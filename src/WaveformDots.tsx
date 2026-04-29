import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import { useCurrentFrame, useVideoConfig } from "remotion";

interface Props {
  audioSrc: string;
  width: number;
  height: number;
  color?: string;
}

/** Option 2: Dot waveform - vintage typewriter feel */
export const WaveformDots: React.FC<Props> = ({
  audioSrc,
  width,
  height,
  color = "rgba(240, 220, 190, 0.85)",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const audioData = useAudioData(audioSrc);
  if (!audioData) return null;

  const vis = visualizeAudio({
    fps,
    frame,
    audioData,
    numberOfSamples: 48,
    smoothing: true,
  });

  const scaled = vis.map((v, i) => {
    const freqBoost = 1 + (i / vis.length) * 6;
    return Math.min(Math.pow(v * freqBoost * 2.5, 0.6), 1);
  });

  const centerY = height / 2;
  const step = width / scaled.length;
  const maxOffset = height * 0.4;
  const dotRadius = Math.min(step * 0.18, 4);

  return (
    <svg width={width} height={height} style={{ display: "block" }}>
      {scaled.map((v, i) => {
        const x = i * step + step / 2;
        const offset = v * maxOffset;
        return (
          <g key={i}>
            <circle cx={x} cy={centerY - offset} r={dotRadius} fill={color} />
            <circle
              cx={x}
              cy={centerY + offset}
              r={dotRadius}
              fill={color}
              opacity={0.5}
            />
            {/* Center anchor dot (always visible) */}
            <circle
              cx={x}
              cy={centerY}
              r={dotRadius * 0.6}
              fill={color}
              opacity={0.3}
            />
          </g>
        );
      })}
    </svg>
  );
};
