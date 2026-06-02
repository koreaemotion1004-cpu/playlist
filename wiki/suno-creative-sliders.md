# Suno Creative Sliders — 정확한 사용법

> 출처: [Suno 공식 문서](https://help.suno.com/en/articles/6141377) + [Jack Righteous 가이드](https://jackrighteous.com/en-us/blogs/guides-using-suno-ai-music-creation/how-to-use-suno-s-advanced-sliders-weirdness-style-audio-influence) + [Suno Styles](https://sunostyles.com/blog/understanding-suno-parameters)
> 추측 금지 — 공식 확인된 내용만 기재

---

## Weirdness

**범위:** Safe(0%) ↔ Chaos(100%)
**기본값:** 50% = "정상적인 예상 결과"

| 값 | 결과 |
|---|---|
| 낮음 (0~30%) | 예측 가능, 장르에 충실, 안정적 |
| 중간 (40~60%) | 기본값 구간, 일반적인 출력 |
| 높음 (70~100%) | 예상 밖 악기, 비표준 리듬, 갑작스러운 전환, 불안정 |

**핵심:** 50%가 이미 "정상". 낮춘다고 무조건 좋아지는 게 아님. 너무 낮으면 밋밋해짐.

---

## Style Influence

**범위:** Loose(0%) ↔ Strong(100%)
**기본값:** 50%

| 값 | 결과 |
|---|---|
| 낮음 (0~30%) | Suno가 스타일 프롬프트를 자유 해석 — 탐색용 |
| 중간 (40~70%) | 가사가 분위기를 주도하고 스타일은 느슨한 가이드 |
| 높음 (75~100%) | 스타일 프롬프트를 강하게 따름 — 정교한 태그 프롬프트에 적합 |

**핵심:** 프롬프트를 상세하게 썼을수록 높게 설정하는 게 효과적.
결과가 프롬프트를 무시하면 올리고, 너무 경직되면 낮춤.

---

## Audio Influence

**조건:** 오디오 파일 업로드 시에만 표시
**역할:** 업로드한 오디오가 생성 결과에 미치는 영향도 조절

---

## 두 슬라이더 조합

| Weirdness | Style Influence | 결과 |
|---|---|---|
| 낮음 | 높음 | 장르 충실 + 프롬프트 엄수 → 가장 안정적 |
| 높음 | 높음 | 장르 내에서 실험적 → 유니크하지만 불안정 |
| 높음 | 낮음 | 완전 카오스 — 가드레일 없음 |
| 낮음 | 낮음 | Suno 자유 해석 + 안전한 사운드 |

---

## 권장 세팅 (Lo-fi R&B / Jazztronica 기준)

| 옵션 | 값 | 이유 |
|---|---|---|
| Vocal Gender | Male | 보컬 트랙 남성 보컬 |
| Weirdness | **35~40%** | 기본값보다 약간 낮춰 장르 충실도 확보 |
| Style Influence | **70%** | 상세 [] 태그 프롬프트 강하게 반영 |

---

최종 업데이트: 2026-06-02 (공식 문서 기반 확인)
