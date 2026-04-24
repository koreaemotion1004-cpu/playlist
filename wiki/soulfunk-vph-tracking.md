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
최종 업데이트: 2026-04-24 (Mellow_Funk 최근 25개 기준 초기 측정)
