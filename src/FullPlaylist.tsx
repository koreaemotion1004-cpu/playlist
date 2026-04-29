import {
  AbsoluteFill,
  Html5Audio,
  Html5Video,
  Img,
  Sequence,
  staticFile,
  useVideoConfig,
  interpolate,
} from "remotion";
import { Waveform } from "./Waveform";
import { WaveformLine } from "./WaveformLine";
import { WaveformDots } from "./WaveformDots";
import { WaveformVU } from "./WaveformVU";
import { WaveformFineBars } from "./WaveformFineBars";

export interface TrackInfo {
  file: string;
  title: string;
  durationSec: number;
}

export type WaveformStyle = "bars" | "line" | "dots" | "vu" | "fine" | "none";

export interface FullPlaylistProps {
  backgroundFile: string;
  tracks: TrackInfo[];
  crossfadeSec?: number;
  waveformStyle?: WaveformStyle;
}

const FPS = 30;

const isVideoFile = (f: string) => /\.(mp4|webm|mov)$/i.test(f);

const renderWaveform = (
  style: WaveformStyle,
  audioSrc: string,
  w: number,
  h: number
) => {
  if (style === "none") return null;
  if (style === "line")
    return <WaveformLine audioSrc={audioSrc} width={w} height={h} />;
  if (style === "dots")
    return <WaveformDots audioSrc={audioSrc} width={w} height={h} />;
  if (style === "vu")
    return <WaveformVU audioSrc={audioSrc} width={w} height={h} />;
  if (style === "fine")
    return <WaveformFineBars audioSrc={audioSrc} width={w} height={h} />;
  return <Waveform audioSrc={audioSrc} width={w} height={h} />;
};

const TrackSegment: React.FC<{
  track: TrackInfo;
  trackIndex: number;
  totalTracks: number;
  durationFrames: number;
  fadeFrames: number;
  isFirst: boolean;
  isLast: boolean;
  width: number;
  height: number;
  waveformStyle: WaveformStyle;
}> = ({
  track,
  trackIndex,
  totalTracks,
  durationFrames,
  fadeFrames,
  isFirst,
  isLast,
  width,
  height,
  waveformStyle,
}) => {
  const audioSrc = staticFile(track.file);
  const textShadow = "0 2px 10px rgba(0,0,0,0.85), 0 0 4px rgba(0,0,0,0.6)";
  const color = "rgba(245, 230, 211, 0.95)";
  const trackLabel = `Track ${String(trackIndex + 1).padStart(2, "0")} / ${String(totalTracks).padStart(2, "0")}`;

  const waveWidth = width * 0.65;
  const waveHeight = height * 0.22;

  return (
    <>
      <Html5Audio
        src={audioSrc}
        volume={(f) => {
          const fadeIn = isFirst
            ? 1
            : interpolate(f, [0, fadeFrames], [0, 1], {
                extrapolateRight: "clamp",
              });
          const fadeOut = isLast
            ? 1
            : interpolate(
                f,
                [durationFrames - fadeFrames, durationFrames],
                [1, 0],
                { extrapolateLeft: "clamp" }
              );
          return Math.min(fadeIn, fadeOut);
        }}
      />

      {/* Bottom-center stack: text → waveform */}
      <div
        style={{
          position: "absolute",
          bottom: height * 0.07,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: height * 0.015,
        }}
      >
        {/* Text block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color,
            textAlign: "center",
            textShadow,
          }}
        >
          <div
            style={{
              width: width * 0.04,
              height: 1,
              background: "rgba(245, 230, 211, 0.7)",
              marginBottom: height * 0.012,
              boxShadow: "0 1px 4px rgba(0,0,0,0.6)",
            }}
          />
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: width * 0.01,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              opacity: 0.85,
              marginBottom: height * 0.008,
            }}
          >
            {trackLabel}
          </div>
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: width * 0.022,
              fontStyle: "italic",
              letterSpacing: "0.02em",
            }}
          >
            {track.title}
          </div>
        </div>

        {/* Waveform */}
        <div style={{ width: waveWidth, height: waveHeight }}>
          {renderWaveform(waveformStyle, audioSrc, waveWidth, waveHeight)}
        </div>
      </div>
    </>
  );
};

export const FullPlaylist: React.FC<FullPlaylistProps> = ({
  backgroundFile,
  tracks,
  crossfadeSec = 3,
  waveformStyle = "line",
}) => {
  const { width, height } = useVideoConfig();
  const bgSrc = staticFile(backgroundFile);
  const bgIsVideo = isVideoFile(backgroundFile);

  const trackSchedule = (() => {
    const result: { startSec: number; durationSec: number }[] = [];
    let cursor = 0;
    tracks.forEach((t) => {
      result.push({ startSec: cursor, durationSec: t.durationSec });
      cursor += t.durationSec - crossfadeSec;
    });
    return result;
  })();

  const fadeFrames = Math.round(crossfadeSec * FPS);

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
      <AbsoluteFill>
        {bgIsVideo ? (
          <Html5Video
            src={bgSrc}
            muted
            loop
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <Img
            src={bgSrc}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.65) 100%)",
          pointerEvents: "none",
        }}
      />

      {tracks.map((t, i) => {
        const startFrame = Math.round(trackSchedule[i].startSec * FPS);
        const durationFrames = Math.round(t.durationSec * FPS);
        return (
          <Sequence
            key={t.file + i}
            from={startFrame}
            durationInFrames={durationFrames}
          >
            <TrackSegment
              track={t}
              trackIndex={i}
              totalTracks={tracks.length}
              durationFrames={durationFrames}
              fadeFrames={fadeFrames}
              isFirst={i === 0}
              isLast={i === tracks.length - 1}
              width={width}
              height={height}
              waveformStyle={waveformStyle}
            />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
