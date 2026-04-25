# Soul Funk VPH 실측 트래킹

**목적:** Mellow_Funk 레퍼런스 채널의 VPH를 정기 실측하여 **현재 뜨거운 키워드**를 기반으로 Vol 제목 결정.
**측정 방식:** `yt-dlp`로 영상별 업로드일·조회수 추출 → `VPH = views / (경과일 × 24)` 계산
**업데이트 주기:** 새 Vol 기획 직전마다 재측정 필수 (VPH는 시간 경과에 따라 상승·하강)

---

## ⚠️ 핵심 원칙

**위키에 기록된 VPH 수치는 측정 시점 기준 스냅샷. 그대로 인용 금지.**

- 같은 영상도 시간이 지나면 VPH가 변한다
- 바이럴 영상은 **오히려 상승** (예: 04-12 `Late Night Bar` 영상 → 위키 VPH 293 → 현재 VPH 346)
- 실패 영상은 하강
- **매 Vol 기획 직전 재측정** → 현재 살아있는 키워드로 제목 결정

---

## 📊 2026-04-24 측정 — Mellow_Funk 채널

**측정 대상:** @Mellow_Funk 최근 25개 영상
**측정 시각:** 2026-04-24 (저녁)

### 🏆 VPH TOP 8

| 순위 | 영상 | 업로드 | 경과일 | 조회 | **VPH** |
|:---:|---|:---:|:---:|---:|---:|
| **1** 🏆 | **Soul Funk Lounge Mix \| Late Night Bar • Slow Deep Groove** | 04-12 | 12일 | 99,878 | **346** |
| 2 | Soul Funk Lounge Mix \| Midnight Art Lounge • Slow Deep Groove | 04-23 | 1일 | 3,493 | 145 |
| 3 | Soul Funk Lounge Mix \| Amber Mosaic Room • Slow Deep Groove | 04-18 | 6일 | 19,065 | 132 |
| 4 | Soul Funk Lounge Mix \| Emerald Art Lounge • Slow Deep Groove | 04-17 | 7일 | 21,727 | 129 |
| 5 | Soul Funk Lounge Mix \| Vintage Record Room • Deep Emerald Vibes | 04-13 | 11일 | 28,571 | 108 |
| 6 | Soul Funk Lounge Mix \| Amber Whiskey Bar • Slow Deep Groove | 04-20 | 4일 | 9,854 | 103 |
| 7 | Late Night Bar Lounge \| Minimal Soul Funk • Smoky & Smooth | 04-09 | 15일 | 20,343 | 57 |
| 8 | Soul Funk Vinyl Mix \| Late Night Record Spin • The Gentleman's Gallery | 04-15 | 9일 | 8,249 | 38 |

### 🔥 검증된 뜨거운 키워드 (VPH 100+)

| 요소 | 실측 | 역할 |
|---|---|---|
| **`Late Night Bar`** | **VPH 346** (챔피언, 상승 중) | 최강 장면 앵커 |
| **`Amber`** | VPH 132 / 103 | 검증 색 #1 |
| **`Emerald`** | VPH 129 / 108 | 검증 색 #2 |
| **`Art Lounge`** | VPH 145 / 129 | 검증 장면 #2 |
| **`Mosaic Room`** | VPH 132 | 검증 장면 #3 |
| **`Whiskey Bar`** | VPH 103 | 검증 장면 #4 |
| **`Vintage Record Room`** | VPH 108 | 검증 장면 #5 |
| `Slow Deep Groove` | 챔피언 공통 꼬리말 | SEO 교차 노출 |

### ❌ 실측 저조 키워드 (VPH < 20 · 기피 대상)

| 키워드 | 영상 | 경과일 | 조회 | VPH |
|---|---|:---:|---:|---:|
| **Midnight Bourbon** ⚠️ | Midnight Bourbon Groove • Velvet Night Lounge | 25일 | 2,112 | **3.5** |
| **Silent Room Echoes** | Silent Room Echoes • Warm Midnight Vibes | 19일 | 4,663 | 10 |
| **Golden Reflections + Midnight** | Smoke & Golden Reflections • Midnight Lounge | 26일 | 8,144 | 13 |
| **Teal + Crimson** | Feline's Gaze • Teal & Crimson Lounge | 8일 | 3,109 | 16 |
| **Sunset Chill** | Sunset Chill Soul Funk Mix | 21일 | 1,281 | 2.5 |
| **Late Night Soul Funk Minimal** (그대로) | Late Night Soul Funk Mix • Minimal Groove | 23일 | 469 | 0.8 |
| **Where Shadows Meet** | Where Shadows Meet • Golden Amber Lounge | 29일 | 3,771 | 5.4 |
| **Velvet Night + Amber Glow** | Velvet Night & Amber Glow • Late Night Lounge | 27일 | 725 | 1.1 |

---

## 📌 의사결정 규칙 (Vol 제목 정할 때)

### ✅ 반드시 포함 (VPH 부스터)
1. **`Late Night Bar`** — 현재 최강 앵커 (VPH 346). 색만 바꿔가며 반복 사용 가능
2. **`Slow Deep Groove`** — 챔피언 꼬리말 (알고리즘 교차 노출)
3. **검증 색 1개** (Amber / Emerald — 둘 다 100+ VPH)

### ❌ 절대 피함
1. **`Midnight Bourbon`** — VPH 3.5 실측 실패. Vol.02에 이미 사용한 조합은 신규 Vol 반복 금지
2. **`Golden + Midnight` 조합** — VPH 13 실패
3. **`Silent Room` / `Silent + Echoes`** — VPH 10 실패
4. **Teal / Crimson 단독 색** — VPH 16 검증 부족
5. **`Where ___ Meet the Night`** 식 시적 변형 — VPH 5 이하

### 🟡 중립 (데이터 부족)
- Velvet, Copper, Deep Green (Mellow_Funk 최근 25개에 없거나 VPH 저조)
- Vol.02에서 Velvet 사용 중 → 결과 나오면 이 문서에 추가

---

## 📈 위키 기록 vs 현재 VPH 비교 (학습 자료)

| 영상 | 위키 기록 VPH | 현재 실측 VPH | 변화 |
|---|---:|---:|:---:|
| Late Night Bar Slow Deep Groove | 293 (8일, 5.9만뷰) | **346 (12일, 9.9만뷰)** | **⬆ 상승** |
| Emerald Art Lounge Slow Deep | 115 (3일, 9.4천뷰) | 129 (7일, 2.2만뷰) | ⬆ 상승 |
| Amber Mosaic Room Slow Deep | 92 (2일, 5.3천뷰) | 132 (6일, 1.9만뷰) | ⬆ 상승 |

**결론:** 검증 영상은 **시간 지나면서 VPH 상승** (알고리즘 지속 추천). 초기 3~7일 VPH로 판단 금지, 10~14일 관찰 후 확정.

---

## 🔁 재측정 체크리스트

Vol 기획 전 반드시 수행:

1. `yt-dlp`로 Mellow_Funk 최근 25개 추출
2. 각 영상 VPH 재계산 (경과일 × 24 분모)
3. 이 문서의 TOP 8 / 검증 키워드 / 실패 키워드 업데이트
4. 트렌드 변화 기록 (상승/하강 영상)
5. 기획 Vol 제목 키워드와 현재 TOP 5 매칭 확인

---

## 🎯 적용 내역

| Vol | 제목 | 근거 | 결과 |
|:---:|---|---|:---:|
| Vol.01 | (Amber 테마 추정) | - | - |
| Vol.02 | `Velvet Midnight Bourbon  Slow Deep Groove` | 기획 당시 위키 참조 | ⚠️ `Midnight Bourbon` VPH 3.5 실측 실패. **보류**. |
| Vol.03 | `Emerald Late Night Bar  Slow Deep Groove` (예정) | Emerald 129 + Late Night Bar 346 | 측정 예정 |

---

## 📊 2026-04-25 측정 — Vintage Park 채널 (@vintage-park)

**두 번째 레퍼런스 채널.** Soul Funk Line 3 신규 벤치마크 추가.

### 🏆 바이럴 히트 2개 (초기 업로드 급상승)

| Vol | 제목 | 업로드 | 경과일 | 조회수 | 좋아요 | **VPH** |
|:---:|---|:---:|:---:|---:|---:|---:|
| **13** | Vintage Grooves to **Trust Yourself** \| Vintage Soul Funk Playlist | 01-13 | 102일 | **630,181** | 12,877 | **🏆 257** |
| **11** | **Good Times Flow** – 70s Soul Funk Grooves \| Vintage Soul Funk Playlist | 01-07 | 108일 | **429,919** | 7,106 | **🥈 166** |

### ⚠️ 최근 15개 (참사)

| Vol | 업로드 | 경과일 | 조회 | VPH |
|:---:|:---:|:---:|---:|---:|
| 40 | 04-24 | 1일 | 353 | 14.7 |
| 39 | 04-18 | 7일 | 1,232 | 7.3 |
| 38 | 04-16 | 9일 | 780 | 3.6 |
| 37 | 04-09 | 16일 | 1,350 | 3.5 |
| 36 | 04-01 | 24일 | 2,261 | 3.9 |
| 35 | 03-26 | 30일 | 4,537 | 6.3 |
| 32 | 03-17 | 39일 | 3,262 | 3.5 |
| 31 `Believe in Yourself` | 03-14 | 42일 | 1,295 | **1.3** ⚠️ |
| 26 | 02-18 | 66일 | 4,135 | 2.6 |

### 💡 핵심 인사이트

**충격 지점:**
- Vol.13 `Trust Yourself` VPH 257 vs Vol.31 `Believe in Yourself` VPH 1.3 → **같은 공식, 200배 차이**
- 최근 15개 평균 VPH = ~4 (챔피언 2개와 40~60배 차이)
- **"제목 공식"만으론 부족** — 채널 초기 모멘텀·알고리즘 타이밍이 결정적

**히트 2개 공통점:**
- 업로드 시기: **채널 첫 달** (초기 모멘텀)
- **감정 훅** 키워드 (Trust Yourself / Good Times)
- 공통 꼬리 `Vintage Soul Funk Playlist` (3채널 공통 검증)
- Vol 번호 명시 `| vol.XX`
- 재생 시간 **75~91분** (업계 평균)

---

## 🎯 우리 채널 적용 5가지 액션 (2026-04-25 확정)

### 1️⃣ ⭐ 재생 시간 대폭 확대 (최우선)

| 채널 | 평균 | 비고 |
|---|:---:|---|
| Vintage Park | 75~91분 | 히트 2개 기준 |
| Mellow_Funk | 2시간 내외 | 챔피언 VPH 346 |
| BoomSlick | 3시간+ | 주 레퍼런스 |
| **우리 Vol.02** | **33분** | ⚠️ **업계 1/3** |

**Vol.03부터 즉시 적용:**
- 10곡 → **20~25곡** 확장 (총 60~75분)
- 또는 곡 반복 편집 (같은 10곡 2회)
- 또는 Suno 각 곡 더 길게 재생성

### 2️⃣ 제목에 `| vol.XX` 명시

- Vintage Park 100% 일관, Mellow_Funk도 `| EP 4` 사용
- 시리즈 시그널 = 알고리즘 "컬렉션" 인식

**Vol.03 제목 개정:**
- Before: `Soul Funk Lounge Mix | Emerald Late Night Bar  Slow Deep Groove`
- After: `Soul Funk Lounge Mix | Emerald Late Night Bar | vol.03`

### 3️⃣ `Vintage Soul Funk Playlist` 꼬리 키워드 추가 고려

- Vintage Park 100% 일관 사용 (3채널 공통 검증)
- 우리 제목에 미포함
- **Vol.03 후보:** `Soul Funk Lounge Mix | Emerald Late Night Bar | Vintage Soul Funk Playlist vol.03` (단 60자 이내 유지)

### 4️⃣ 감정 훅 키워드 실험 (Vol.04~)

Vintage Park 히트 2개 키워드: `Trust Yourself`, `Good Times Flow`

**우리 감정 키워드 후보 라이브러리:**
- `Feel Your Shadow` — 소울 깊이
- `Slow Down & Feel` — 회복
- `Deep in the Groove` — 몰입
- `Nothing to Prove` — 자기 확신
- `Let It Go` — 해방
- `Come Back to You` — 자기 회복
- `Ease Your Mind` — 이완

→ Vol.04~ 중 **1~2개 감정 테마 실험** → VPH 비교

### 5️⃣ 초기 업로드 집중도

- Vintage Park 히트 2개 = **채널 첫 1~2개월** 업로드
- 초기에 알고리즘 기회 극대화
- 우리도 Vol.01~05 구간 **주 1~2회 집중 업로드**

---

## 🔁 재측정 체크리스트 (v2 — 두 레퍼런스 포함)

Vol 기획 전 반드시 수행:

1. `yt-dlp`로 **Mellow_Funk 최근 25개** + **Vintage Park 최근 15개** 추출
2. 각 영상 VPH 재계산 (경과일 × 24 분모)
3. TOP 8 / 검증 키워드 / 실패 키워드 업데이트
4. **감정 훅 키워드** 신규 히트 스캔
5. 기획 Vol 제목과 현재 TOP 5 매칭 + 감정 훅 후보 비교

---

## 🎯 적용 내역 업데이트

| Vol | 제목 | 근거 | 결과 |
|:---:|---|---|:---:|
| Vol.01 | (Amber 테마 추정) | - | - |
| Vol.02 | `Velvet Midnight Bourbon  Slow Deep Groove` | 기획 당시 위키 참조 | ⚠️ `Midnight Bourbon` VPH 3.5 실측 실패. **보류** (업로드 후 VPH 모니터링 중) |
| Vol.03 | `Soul Funk Lounge Mix \| Emerald Late Night Bar \| vol.03` (개정) | Late Night Bar 346 + Vol 번호 명시 (Vintage Park 공식) | 측정 예정 |
| Vol.04~ | 감정 훅 테마 실험 (TBD) | Trust Yourself / Good Times Flow 공식 차용 | 측정 예정 |

---

## 🚀 2026-04-25 추가 측정 — Mellow_Funk 챔피언 D13 추적

**대상:** `🎤 Soul Funk Lounge Mix | Late Night Bar • Slow Deep Groove`
**URL:** https://www.youtube.com/watch?v=wfkkmEVx-3k

### VPH 가속 추이 (감속이 아니라 가속!)
| 측정 시점 | 경과일 | 조회수 | VPH | 일일 변화 |
|---|:---:|---:|---:|:---:|
| 위키 초기 기록 | 8일 | 59,000 | 293 | — |
| 2026-04-24 | 12일 | 99,878 | 346 | +53 VPH |
| **2026-04-25 (D13)** | **13일** | **115,834** | **🚀 371** | **+24 VPH** |

**1일 만에 +15,956뷰.** 일반 영상은 시간 지나며 VPH 감소하는데, 이 영상은 **계속 가속**. 알고리즘 적극 푸시 단계.

### 메타 풀데이터 (D13)
| 항목 | 값 |
|------|---|
| 재생시간 | **2시간 4분 (124분 / 7463초)** |
| 트랙 수 | **16곡** (평균 7.7분/곡) |
| 좋아요율 | **2.54%** (2,942 / 115,834) |
| 댓글률 | 0.12% (136 / 115,834) |
| 해시태그 | **5개만** (#soulfunk #latenightmix #barlounge #slowgroove #mellowfunk) |

### 트랙리스트 패턴 (마지막 트랙 주목)
```
0:00     Late Night Bar Lounge
4:13     Amber Pour Flow
...
58:45    Retro Soul Boombox
1:02:11  Repeat   ← ⭐ 마지막 트랙이 "Repeat"
```
→ **곡을 한 번 더 반복 재생시켜 재생시간 인위적 확장** (62분 → 124분)

### 첫 줄 후킹 패턴
```
Welcome to the classic night lounge. Sink into the deep red velvet,
listen to the smooth vocals, and let the slow soul funk groove wash over you.
```
- "Welcome to..." 도입어
- 구체적 감각 (deep red velvet, smooth vocals)
- 검색 의도 키워드 (late-night relaxation, quiet drink, midnight chill)

---

## 🎯 우리 채널 즉시 적용 (Vol.03부터 강제 적용)

### 1️⃣ ⭐⭐⭐ 재생시간 124분 매칭 (최우선)

**현재 우리 Vol.02:** 33분 (챔피언의 27%)
**목표:** **60분 이상 (이상적 110~125분)**

**3가지 옵션:**
- **A. Repeat 트랙 추가** (가장 쉬움) — 10곡 + Track 11 Repeat = 33분 + 33분 = 66분
- **B. 16곡으로 확장** — Suno 6곡 추가 생성 후 16곡 평균 7.7분 = 110~125분
- **C. 곡 길이 늘리기** — Suno 재생성 시 각 곡 5~7분으로 조정 → 50~70분

**Vol.03 채택:** A (Repeat) 즉시 적용 + B는 Vol.04~ 점진 도입

### 2️⃣ 마지막 트랙 = "Repeat" 트랙으로 (무조건)

**Mellow_Funk 검증된 트릭:**
```
1:02:11  Repeat
```
→ 같은 곡을 한 번 더 (CapCut 편집에서 첫 트랙 또는 좋아하는 트랙 복사)
→ 알고리즘에 "긴 영상" 시그널 + 시청자 retention 보너스

### 3️⃣ 제목 emoji + bullet 포맷

**Mellow_Funk 챔피언:** `🎤 Soul Funk Lounge Mix | Late Night Bar • Slow Deep Groove`
- emoji 1개 (🎤 / 🥃 / 🍷 / 🎷) — 모바일 검색에서 시각 앵커
- `|` 메인 구분 + `•` 보조 구분

**Vol.03 적용:** `🥃 Soul Funk Lounge Mix | Emerald Late Night Bar • vol.03`

### 4️⃣ 설명글 첫 줄 = "Welcome to..." 도입어

**Vol.03 첫 줄 후보:**
- `Welcome to the emerald-lit lounge. Sink into the green glass, let the slow groove pour out at the bar's quiet hour.`

### 5️⃣ 해시태그 5~7개로 압축

**현재 우리:** 18개 (영문) / 35개 (한국어)
**Mellow_Funk:** 5개만

**Vol.03 영문 해시태그 (5개):**
```
#soulfunk #latenightmix #barlounge #slowgroove #vintagesoulfunk
```

**한국어판 별도 5개:**
```
#소울펑크 #라운지뮤직 #슬로우딥그루브 #늦은밤음악 #빈티지소울펑크
```

---

## 🚨 핵심 깨달음 (전 Vol 적용)

> **이 영상은 13일 지났는데 VPH가 계속 올라간다.**

이게 의미하는 건:
1. 시청자가 끝까지 듣는다 (124분 retention 좋다)
2. 알고리즘이 "긴 영상을 끝까지 듣는다"고 판단 → 추천 가중치 ↑
3. 새 시청자 유입 → 또 끝까지 봄 → 선순환

**33분 영상으로는 이 사이클 진입 불가.** 60분 이상 필수.

---
최종 업데이트: 2026-04-25 (Mellow_Funk D13 가속 추적 + 5가지 즉시 액션 강화)
