import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import { useCurrentFrame, useVideoConfig } from "remotion";

interface WaveformProps {
  audioSrc: string;
  width: number;
  height: number;
}

export const Waveform: React.FC<WaveformProps> = ({
  audioSrc,
  width,
  height,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const audioData = useAudioData(audioSrc);

  if (!audioData) {
    return null;
  }

  const visualization = visualizeAudio({
    fps,
    frame,
    audioData,
    numberOfSamples: 64,
    smoothing: true,
  });

  // Apply logarithmic scaling + amplitude boost for more dynamic look
  const scaled = visualization.map((v, i) => {
    const freqBoost = 1 + (i / visualization.length) * 8;
    const ampBoost = 3;
    const raw = Math.pow(v * freqBoost * ampBoost, 0.5);
    return Math.min(raw, 1);
  });

  const barCount = scaled.length;
  const gap = width * 0.004;
  const barWidth = (width - gap * (barCount - 1)) / barCount;
  const maxBarHeight = height * 0.9;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id="barGradient" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.5)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 0.8)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {scaled.map((v, i) => {
        const barHeight = Math.max(v * maxBarHeight, barWidth);
        const x = i * (barWidth + gap);
        const y = height - barHeight;

        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={barWidth}
            height={barHeight}
            rx={barWidth / 2}
            ry={barWidth / 2}
            fill="url(#barGradient)"
            filter="url(#glow)"
          />
        );
      })}
    </svg>
  );
};
