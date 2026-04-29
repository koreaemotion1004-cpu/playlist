import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import { useCurrentFrame, useVideoConfig } from "remotion";

interface Props {
  audioSrc: string;
  width: number;
  height: number;
  color?: string;
}

/** Option 3: Retro VU meter - thin analog bars, sepia/gold */
export const WaveformVU: React.FC<Props> = ({
  audioSrc,
  width,
  height,
  color = "rgba(212, 175, 129, 0.9)",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const audioData = useAudioData(audioSrc);
  if (!audioData) return null;

  const vis = visualizeAudio({
    fps,
    frame,
    audioData,
    numberOfSamples: 96,
    smoothing: true,
  });

  const scaled = vis.map((v, i) => {
    const freqBoost = 1 + (i / vis.length) * 6;
    return Math.min(Math.pow(v * freqBoost * 2.5, 0.6), 1);
  });

  const barCount = scaled.length;
  const gap = width * 0.003;
  const barWidth = (width - gap * (barCount - 1)) / barCount;
  const maxBarHeight = height * 0.75;

  return (
    <svg width={width} height={height} style={{ display: "block" }}>
      {/* Baseline */}
      <line
        x1={0}
        y1={height - 1}
        x2={width}
        y2={height - 1}
        stroke={color}
        strokeWidth={0.5}
        opacity={0.3}
      />

      {scaled.map((v, i) => {
        const barHeight = Math.max(v * maxBarHeight, 2);
        const x = i * (barWidth + gap);
        const y = height - barHeight;

        // Tiered opacity - lower = more visible, higher = fading
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={barWidth}
            height={barHeight}
            fill={color}
            opacity={0.85}
          />
        );
      })}
    </svg>
  );
};
