# Loopstate 가사 나노 분석

**수집일:** 2026-04-27
**수집 영상:** ep.21(챔피언 111K) · ep.06(Valentine 74K) · ep.04(26K) · ep.23(15K) · ep.22(11K)
**방법:** yt-dlp auto-captions (en-orig) → XML 파싱 → 클린 가사 추출
**파일:** `temp_lyrics/all_lyrics_clean.txt` (총 ~600라인)

---

## 🏗️ 송폼 구조 역분석

### 표준 트랙 구조 (ep.21 기준)
```
Verse 1 (6~8줄) — 장면·상황 설정, 1인칭 내면
Hook (2~4줄) — 짧고 반복 가능한 동사구
Verse 2 (6~8줄) — 감정 심화, 시점 이동
Hook (반복)
Bridge (4줄) — 새로운 이미지 or 시점 전환
Final Hook (확장) — 3회 이상 반복
Outro/Fade — 훅 단어 echo 또는 허밍
```

### 훅 길이
- **2줄 훅 (압도적 다수):** "On and on" / "Baby, I need your love" / "Keep that glow alive"
- **4줄 훅:** "Don't let it fade tonight / Keep that glow alive"
- **단어 echo 아웃트로:** "Hold on. Hold on. Hold on." (3~6회)

---

## 🎣 훅 패턴 카탈로그

### Type A — 명령형 훅 (가장 강력)
| 훅 | 트랙 | ep |
|---|---|---|
| "Keep that glow alive" | Glow Through the Night | ep.21 |
| "Hold on. Hold on." | Hold the Light Inside | ep.21 |
| "On and on." | Driftin' Through the Noise | ep.21 |
| "Just face the night" | Don't Run From the Night | ep.21 |
| "Stay cool when it finds you" | Don't Run From the Night | ep.21 |
| "I'll stay. Won't fade." | I'll Stay Right Here | ep.21 |

### Type B — 고백형 훅 (감정 폭발)
| 훅 | 트랙 | ep |
|---|---|---|
| "Baby, I need your love." | Can't Shake Your Love | ep.21 |
| "I love you. I love you. I love you." | I Lose My Balance Around You | ep.06 |
| "You keep me here." | You Keep Me Here | ep.06 |
| "Almost yours." | Almost Yours | ep.06 |
| "I'll be loving you" | While the World Still Turns | ep.06 |

### Type C — 이미지형 훅 (시적)
| 훅 | 트랙 | ep |
|---|---|---|
| "Till we cross that line." | Somewhere Beyond Goodbye | ep.21 |
| "If my words could bloom" | Sunday Light Confession | ep.21 |
| "Escape to the other side tonight" | Beyond the Velvet Sky | ep.21 |

---

## 📐 가사 구조 공식

### Verse 공식 (8줄 패턴)
```
[장면/상황 2줄]
[내면 감정 2줄]
[행동/반응 2줄]
[훅으로 연결 2줄]
```

**실제 예 (ep.21 "Can't Shake Your Love"):**
```
Feeling so low. In the air. I crave touch. That's why I'm here.     ← 상황
You disappeared now. Left me in doubt.                               ← 감정
I call your name out. Don't shut me out.                            ← 행동
Late in the dark. And it ain't right.                               ← 전환
I feel the silence holding me back.                                  ← 감정 심화
Though I try, can't hide what's inside.                             ← 내면
You know I can't let it slide.                                      ← 고백
Baby, I need your love.                                             ← 훅 진입
```

### Bridge 공식 (4줄 전환)
```
[고조/반전 이미지 2줄]
[새로운 시점 1줄]
[훅 재진입 1줄]
```

**실제 예 (ep.21 "Can't Shake Your Love"):**
```
There comes a moment you can't deny.         ← 보편적 진실
A man needs something he can't disguise.     ← 욕망 정당화
Hear me calling through the night.           ← 긴박감
Bring your shadow back to life.              ← 이미지 훅 → Final Hook 연결
```

---

## 🌈 이미지 어휘 사전

### 빛 계열 (가장 빈번)
`glow` · `fire` · `light` · `sun` · `star` · `burning` · `burning through me` · `shadow falls`

### 움직임 계열 (Soul Funk 정체성)
`motion` · `rhythm pulling me` · `riding this rhythm` · `drift` · `slide` · `flow` · `spin`

### 어둠/밤 계열
`shadow` · `night` · `dark` · `smoke` · `silence` · `late in the dark` · `face the night`

### 물리 감각 계열
`touch` · `balance` · `breathe` · `weight` · `hold` · `close` · `soft`

### 색감 계열 (트랙 제목에 집중)
`violet` · `velvet` · `cherry chrome` · `crimson` · `amber` · `blue`

---

## 🧠 주제 분류 (5개 영상 기준)

| 주제 | 빈도 | 대표 트랙 |
|---|:---:|---|
| **욕망·집착** | ★★★★★ | "Can't Shake Your Love", "I Lose My Balance Around You", "Almost Yours" |
| **희망·저항** | ★★★★ | "Hold the Light Inside", "Keep That Glow Alive", "Hold On" |
| **이별·수용** | ★★★ | "Somewhere Beyond Goodbye", "I Can Feel You Leaving" |
| **자아 정체성** | ★★★ | "Driftin' Through the Noise", "Don't Run From the Night" |
| **영원한 사랑** | ★★★ | "While the World Still Turns", "You Keep Me Here" |
| **화해·가족** | ★★ | "Sunday Light Confession" (부모-자식 재결합) |

---

## 🔤 반복 동사 패턴 (훅에 쓰이는 동사들)

```
Keep ______ alive      — 생명 유지, 불꽃 지킴
Hold on                — 버팀, 견딤  
Stay / I'll stay       — 떠나지 않음, 충성
Face the night         — 어둠에 맞섬
Let it go              — 해방, 놓아줌
Ride (this rhythm)     — 흐름에 몸 맡김
Cross (that line)      — 경계 넘기, 새로운 국면
```

→ **공통 구조:** `[명령 동사] + [공간/감각 명사]`
→ "Keep that **glow** alive" / "Hold **on**" / "Face the **night**" / "Ride this **rhythm**"

---

## 📊 ep.21 챔피언 트랙 전체 주제 맵

| 트랙 | 제목 | 주제 | 훅 |
|:---:|---|---|---|
| 1 | Driftin' Through the Noise | 자아/움직임 | "On and on" |
| 2 | Can't Shake Your Love | 욕망/집착 | "Baby, I need your love" |
| 3 | Glow Through the Night | 희망/빛 | "Keep that glow alive" |
| 4 | Somewhere Beyond Goodbye | 이별/수용 | "Till we cross that line" |
| 5 | Hold the Light Inside | 저항/용기 | "Hold on" |
| 6 | I'll Stay Right Here | 충성/약속 | "I'll stay, won't fade" |
| 7 | Sunday Light Confession | 화해/가족 | "I love you. Yes, I love you." |
| 8 | Beyond the Velvet Sky | 욕망/탈출 | "Escape to the other side" |
| 9 | Don't Run From the Night | 용기/밤 | "Just face the night" |
| — | (ep.21 Repeat/Last) | — | "On and on" (순환) |

**→ 기승전결:** 움직임(起) → 욕망(承) → 이별·저항(轉) → 희망·해방(結)

---

## 🆚 loopstate vs BoomSlick 가사 철학 비교

| 항목 | loopstate | BoomSlick (우리) |
|---|---|---|
| **훅 형식** | 짧은 2줄 명령/고백 | 철학적 질문 ("What Is Happy?") |
| **이미지** | 감각·색감·빛 ("glow", "velvet") | 추상 개념 ("identity", "silence") |
| **주제** | 사랑·욕망·감각 (90%) | 자기 성찰·철학 (70%) |
| **1인칭** | "I need / I feel / I stay" | "I wonder / I question / I become" |
| **훅 반복** | 3~6회 (밀어붙임) | 2~3회 (절제) |
| **Bridge** | 이미지 반전 | 질문 심화 |
| **언어** | 구어적·즉각적 | 시적·관조적 |

**→ 우리는 BoomSlick 철학 노선 유지. loopstate 따라하지 말 것.**

---

## 💡 우리 Soul Funk 가사에 적용 가능한 인사이트

### 1️⃣ 2줄 훅 공식 도입
- loopstate 최강 훅은 전부 2줄 이내
- 우리 "You got to + verb" 시리즈(T11-16)와 형식 일치
- **→ "You got to let it go / You got to face the night" 스타일 = loopstate 검증된 공식**

### 2️⃣ Bridge = 이미지 전환 (설명 X)
- loopstate bridge는 항상 새로운 시각적 이미지로 시작
- "There comes a moment you can't deny" → 보편 진실 1줄 → 감각 이미지
- **→ 우리 bridge에서 설명 대신 이미지 전환 강화**

### 3️⃣ Outro = 훅 echo (단어 반복)
- "Hold on. Hold on. Hold on." — 단어만 남김
- "On and on." — 훅의 핵심 단어만 fade
- **→ Suno [Outro] 섹션에 핵심 단어 2~3회 반복 = 자연스러운 loop 효과**

### 4️⃣ Verse 첫 줄 = 장면/감각 (추상 X)
- "I keep my body in motion" — 신체적 감각
- "Feeling so low. In the air. I crave touch." — 즉각적 감각
- **→ 우리 Verse 첫 줄도 감각/장면 시작 강화 (철학은 Verse 2에서)**

### 5️⃣ 훅 동사 뱅크 (검증됨)
```
Keep / Hold / Stay / Face / Ride / Let / Cross / Feel / Move / Run
```
→ 모두 Soul Funk 리듬에 잘 맞는 단음절~2음절 동사

---

## 🔗 연관 문서
- [[loopstate-case-study]] — 채널 나노 분석 (VPH · 알고리즘 · 운영 전략)
- [[소울펑크]] — Line 3 Soul Funk 공식
- [[archive-soulfunk-vol05]] — Crimson vol 가사 (T11-16 "You got to" 훅 적용)
- [[lyrics-formula]] — 빌보드 가사 공식

---
최종 업데이트: 2026-04-27 (5개 영상 가사 전수 분석)
