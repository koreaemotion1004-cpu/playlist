# Soul Funk 파형 — Radial Bars Mild (확정 스펙)

**라인:** Line 3 Soul Funk (Midnight Funk Bureau 브랜드)
**확정일:** 2026-04-25
**디자인 방향:** 기본 radial bars (중앙 원 + 방사 막대), **장식 없음**, 음악에 살짝만 반응

---

## 🎯 핵심 원칙

**"미니멀한 방사형 이퀄라이저 + 음악 절제 반응"**

- 장식 요소 0개 (도트·다중링·눈금·글로우·펄스 브리딩 전부 금지)
- 단순 중앙 이너 링 + 128개 방사 막대
- 흰색 단색
- 진폭 반응은 "살짝만" (1.2x, 과하지 않게)

---

## 📋 Remotion 컴포넌트 스펙

**프로젝트:** `~/Desktop/자동화/yt-all-in-one/remotion/`

**파일:** `src/SoulFunkWaveformPack.tsx` — `RadialBars` 변주
**컴포지션 ID:** `SF-Pack-radial-bars`

### 핵심 파라미터

| 파라미터 | 값 | 설명 |
|---|---|---|
| `numberOfSamples` | `128` | FFT 주파수 샘플 개수 |
| `innerR` | `120` | 중앙 이너 링 반경 (px) |
| `maxOuterR` | `340` | 최대 바 바깥쪽 반경 (px) |
| `slowRot` | `(frame / fps) * 5` | 회전 속도 5°/s (고정, 베이스 반응 없음) |
| `ampScale` | `1.2` | 진폭 배율 (1.0=기본, 1.8=과함) |
| `stroke` | `accentColor` (흰색) | 막대 색 |
| `strokeWidth` | `3` | 막대 굵기 (px) |
| `strokeLinecap` | `"round"` | 둥근 끝 |

### 데코 요소 (있는 것만)

```tsx
// 중앙 이너 링 (2겹, 미세한 장식)
<circle r={innerR} stroke={secondaryColor} strokeWidth="1" opacity="0.4" />
<circle r={innerR - 8} stroke={secondaryColor} strokeWidth="0.5" opacity="0.2" />
```

---

## 🎨 색상 설정 (Soul Funk Vol.02 기준)

```
bgColor:        "transparent"   ← 배경 투명 (CapCut 합성용)
accentColor:    "#FFFFFF"       ← 막대 흰색
secondaryColor: "#FFFFFF"       ← 이너 링 흰색
```

---

## 🎬 렌더링 스펙

| 항목 | 값 |
|---|---|
| 해상도 | **1280×720** |
| FPS | 30 |
| 코덱 | **ProRes 4444** |
| 프로필 | 4444 |
| 픽셀 포맷 | **yuva444p10le** (알파 채널 필수) |
| 이미지 포맷 | **PNG** (알파 필수) |
| 출력 | **.mov** |
| 배경 | transparent |
| Concurrency | 4 |
| durationInFrames (컴포지션) | 7000 (최대 233초 커버) |

---

## 💻 Remotion CLI 렌더링 커맨드

```bash
cd ~/Desktop/자동화/yt-all-in-one/remotion

PROPS='{"audioSrc":"sf-01.mp3","variant":"radial-bars","bgColor":"transparent","accentColor":"#FFFFFF","secondaryColor":"#FFFFFF"}'

npx remotion render "SF-Pack-radial-bars" "output.mov" \
  --frames=0-{N-1} \
  --codec=prores --prores-profile=4444 \
  --pixel-format=yuva444p10le --image-format=png \
  --concurrency=4 \
  --props="$PROPS"
```

- `{N}` = mp3 duration × 30 (ex: 182초 → 5464 프레임)
- mp3는 미리 `remotion/public/` 에 `sf-NN.mp3` 형식으로 복사 필요

---

## 📝 메타데이터 주입 (ffmpeg)

```bash
ffmpeg -y -i "$raw" \
  -metadata title="Track NN. 제목" \
  -metadata artist="Midnight Funk Bureau" \
  -metadata album="Soul Funk Vol.XX" \
  -metadata album_artist="Midnight Funk Bureau" \
  -metadata genre="Soul Funk" \
  -metadata date="2026" \
  -metadata comment="Soul Funk Lounge Mix | [색] [장면], vintage soul funk, slow deep groove" \
  -metadata description="Vintage Soul Funk. BoomSlick/BOOM PULSE/MonoLux reference. Deep warm male baritone. BPM 84." \
  -metadata keywords="soul funk, vintage, 70s, groovy, minimal, warm, vinyl, deep funk, late night lounge, [색], [장면], slow deep groove" \
  -metadata composer="Suno AI" \
  -metadata copyright="© 2026 Midnight Funk Bureau" \
  -c copy "$final"
```

`-c copy` = 재인코딩 없이 메타만 주입 (빠름, 품질 유지).

---

## 🔁 10곡 배치 렌더링 워크플로우

**경로:** `사용한 곡/playlist-video/YYMMDD/soulfunk-volNN/`

### 단계
1. 각 mp3 duration 확인 (ffprobe)
2. `remotion/public/` 에 `sf-01.mp3 ~ sf-10.mp3` 복사
3. 배치 스크립트 실행 (`batch-render.sh`)
4. 각 트랙: Remotion 렌더 → ffmpeg 메타 주입 → raw 파일 삭제
5. 완료 시 10개 `.mov` 파일 생성

### 스크립트 템플릿 경로
`사용한 곡/playlist-video/YYMMDD/batch-render.sh` (Vol마다 생성)

---

## ⚠️ 설계 실수 학습 (반복 금지)

### 1. FFT vs Time-Domain 구분
- `visualizeAudio` = FFT = **주파수 스펙트럼** → 좌=저음 / 우=고음
- Soul Funk 같은 베이스 중심 곡은 **좌측만 움직임** → 레퍼런스(BoomSlick) 같은 "전 구간 반응" 안 나옴
- **Radial bars는 FFT OK** (방사형이라 좌우 구분 없음), **수평 bar는 time-domain 필수**

### 2. 장식 과다 금지
- 도트 / 다중링 / 눈금 / 글로우 / 펄스 브리딩 = **디자인 오염**
- 기본 radial bar만 두고 음악 반응만 조율하는 게 정답

### 3. 진폭 배율 튜닝
| 배율 | 느낌 |
|:---:|---|
| 1.0 | 원본 (그래프 평평) |
| **1.2** ⭐ | **적절 강화 (mild 확정)** |
| 1.5 | 다이나믹 |
| 1.8 | **과함** |
| 2.0+ | 바 밖으로 튀어나가는 수준 |

### 4. 회전 속도
- 5°/s = 기본 (잔잔)
- 베이스 반응 가속 = 과함 (기본값 사용 금지)

---

## 🎯 적용 예정 Vol

- **Vol.02 Velvet Midnight Bourbon** (2026-04-25 첫 적용 · [[archive-soulfunk-vol02]])
- Vol.03 Emerald Late Night Bar ([[archive-soulfunk-vol03]])
- 이후 Soul Funk Line 3 전 Vol 공통

## ❌ 다른 라인 적용 금지

- Line 1 Cafe Jazz / Line 2 Noir → 별도 `WaveformLine` 스펙 사용 (1px 얇은 선)
- Line 5 Neo Soul → 별도 디자인 (TBD)

---

## 🗂️ 관련 파일

- Remotion 컴포넌트: `~/Desktop/자동화/yt-all-in-one/remotion/src/SoulFunkWaveformPack.tsx`
- 컴포지션 등록: `~/Desktop/자동화/yt-all-in-one/remotion/src/Root.tsx` (`SF-Pack-radial-bars`)
- mp3 소스: `remotion/public/sf-01.mp3 ~ sf-10.mp3` (임시 복사본)
- 배치 스크립트: `사용한 곡/playlist-video/YYMMDD/batch-render.sh`

---
최종 업데이트: 2026-04-25
