import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import { useCurrentFrame, useVideoConfig } from "remotion";

interface Props {
  audioSrc: string;
  width: number;
  height: number;
  color?: string;
  samples?: number;
}

/** Fine-grained bars - many thin vertical bars, reference style */
export const WaveformFineBars: React.FC<Props> = ({
  audioSrc,
  width,
  height,
  color = "rgba(245, 230, 211, 0.95)",
  samples = 256,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const audioData = useAudioData(audioSrc);
  if (!audioData) return null;

  const vis = visualizeAudio({
    fps,
    frame,
    audioData,
    numberOfSamples: samples,
    smoothing: true,
  });

  const scaled = vis.map((v, i) => {
    const freqBoost = 1 + (i / vis.length) * 6;
    return Math.min(Math.pow(v * freqBoost * 2.5, 0.6), 1);
  });

  const barCount = scaled.length;
  const gap = Math.max(width * 0.0008, 0.5);
  const barWidth = Math.max((width - gap * (barCount - 1)) / barCount, 1);
  const centerY = height / 2;
  const maxHalf = height * 0.42;

  return (
    <svg width={width} height={height} style={{ display: "block" }}>
      {scaled.map((v, i) => {
        const barHalf = Math.max(v * maxHalf, 1);
        const x = i * (barWidth + gap);
        return (
          <line
            key={i}
            x1={x + barWidth / 2}
            y1={centerY - barHalf}
            x2={x + barWidth / 2}
            y2={centerY + barHalf}
            stroke={color}
            strokeWidth={barWidth}
            strokeLinecap="round"
            opacity={0.6 + v * 0.4}
          />
        );
      })}
    </svg>
  );
};
