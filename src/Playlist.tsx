import {
  AbsoluteFill,
  Html5Audio,
  staticFile,
  useVideoConfig,
} from "remotion";
import { WaveformRadial } from "./WaveformRadial";

interface PlaylistProps {
  audioFile: string;
  title?: string;
  trackIndex?: number;
  totalTracks?: number;
}

export const Playlist: React.FC<PlaylistProps> = ({
  audioFile,
}) => {
  const { width, height } = useVideoConfig();
  const audioSrc = staticFile(audioFile);

  // Radial waveform: square size = full height (720px), centered horizontally
  const waveSize = height;
  const waveLeft = (width - waveSize) / 2;

  return (
    <AbsoluteFill style={{ backgroundColor: "transparent" }}>
      {/* Centered radial waveform — Soul Funk identical */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: waveLeft,
          width: waveSize,
          height: waveSize,
        }}
      >
        <WaveformRadial audioSrc={audioSrc} size={waveSize} />
      </div>

      <Html5Audio src={audioSrc} />
    </AbsoluteFill>
  );
};
