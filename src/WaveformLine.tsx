import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import { useCurrentFrame, useVideoConfig } from "remotion";

interface Props {
  audioSrc: string;
  width: number;
  height: number;
  color?: string;
}

/** Option 1: Thin gentle line waveform - minimal, elegant */
export const WaveformLine: React.FC<Props> = ({
  audioSrc,
  width,
  height,
  color = "rgba(245, 230, 211, 0.85)",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const audioData = useAudioData(audioSrc);
  if (!audioData) return null;

  const vis = visualizeAudio({
    fps,
    frame,
    audioData,
    numberOfSamples: 512,
    smoothing: true,
  });

  const scaled = vis.map((v, i) => {
    const freqBoost = 1 + (i / vis.length) * 6;
    return Math.min(Math.pow(v * freqBoost * 2.5, 0.6), 1);
  });

  const centerY = height / 2;
  const step = width / (scaled.length - 1);

  // Mirror vertically around center
  const topPts = scaled.map((v, i) => ({
    x: i * step,
    y: centerY - v * (height * 0.45),
  }));

  // Smooth cubic bezier path
  const buildPath = (pts: { x: number; y: number }[]) => {
    if (pts.length < 2) return "";
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const c = pts[i];
      const n = pts[i + 1];
      const mx = (c.x + n.x) / 2;
      d += ` C ${mx} ${c.y}, ${mx} ${n.y}, ${n.x} ${n.y}`;
    }
    return d;
  };

  const topPath = buildPath(topPts);
  // Mirror bottom
  const bottomPts = scaled.map((v, i) => ({
    x: i * step,
    y: centerY + v * (height * 0.45),
  }));
  const bottomPath = buildPath(bottomPts);

  return (
    <svg width={width} height={height} style={{ display: "block" }}>
      <path
        d={topPath}
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
      />
      <path
        d={bottomPath}
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        opacity={0.5}
      />
    </svg>
  );
};
