import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import { useCurrentFrame, useVideoConfig } from "remotion";

interface Props {
  audioSrc: string;
  size?: number; // canvas size (square)
  accentColor?: string;
  secondaryColor?: string;
  numberOfSamples?: number;
  innerR?: number;
  maxOuterR?: number;
  ampScale?: number;
  rotSpeed?: number; // degrees per second
}

/**
 * Radial Bars Mild — Soul Funk 동일 파형 (Cafe BGM 적용)
 * 128개 방사형 막대 + 중앙 이너 링 2겹 + 5°/s 회전
 */
export const WaveformRadial: React.FC<Props> = ({
  audioSrc,
  size = 720,
  accentColor = "#FFFFFF",
  secondaryColor = "#FFFFFF",
  numberOfSamples = 128,
  innerR = 120,
  maxOuterR = 340,
  ampScale = 1.2,
  rotSpeed = 5,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const audioData = useAudioData(audioSrc);
  if (!audioData) return null;

  const vis = visualizeAudio({
    fps,
    frame,
    audioData,
    numberOfSamples,
    smoothing: true,
  });

  const cx = size / 2;
  const cy = size / 2;
  const rotDeg = (frame / fps) * rotSpeed;
  const rotRad = (rotDeg * Math.PI) / 180;

  const rangeR = maxOuterR - innerR;

  const bars = vis.map((v, i) => {
    const angle = (i / numberOfSamples) * 2 * Math.PI + rotRad;
    const barLen = v * ampScale * rangeR;
    const r1 = innerR;
    const r2 = innerR + barLen;
    const x1 = cx + Math.cos(angle) * r1;
    const y1 = cy + Math.sin(angle) * r1;
    const x2 = cx + Math.cos(angle) * r2;
    const y2 = cy + Math.sin(angle) * r2;
    return { x1, y1, x2, y2 };
  });

  return (
    <svg
      width={size}
      height={size}
      style={{ display: "block" }}
      viewBox={`0 0 ${size} ${size}`}
    >
      {/* 중앙 이너 링 2겹 */}
      <circle
        cx={cx}
        cy={cy}
        r={innerR}
        fill="none"
        stroke={secondaryColor}
        strokeWidth={1}
        opacity={0.4}
      />
      <circle
        cx={cx}
        cy={cy}
        r={innerR - 8}
        fill="none"
        stroke={secondaryColor}
        strokeWidth={0.5}
        opacity={0.2}
      />

      {/* 128개 방사형 막대 */}
      {bars.map((b, i) => (
        <line
          key={i}
          x1={b.x1}
          y1={b.y1}
          x2={b.x2}
          y2={b.y2}
          stroke={accentColor}
          strokeWidth={3}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
};
