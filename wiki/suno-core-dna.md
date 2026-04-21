# Suno Core DNA

## Core Prompt (고정 — 절대 변경 금지)
```
[Hypnotic Bass]
[Mesmerizing Melody]
[Vintage Japanese Jazz Kissa]
[Tranquil Cafe Mood]
[Lo-Fi Aesthetic]
[68 BPM]
[Slow and Lazy Feel]
[Minimalist Arrangement]
[1970s Analog Warmth]
[Intimate Breathy Female Alto Vocal]

Acoustic piano trio: warm acoustic upright piano, deep woody upright bass walking line, soft brushed snare drum shuffle, muted hollow-body electric guitar comping, strictly no horns, no trumpet, no saxophone, no brass, close-mic jazz-pop style, relaxed conversational delivery slightly behind the beat, subtle vinyl crackle noise, high-end roll-off EQ, tape saturation, muffled vintage analog warmth, vocal sits deep in the mix
```

## 태그 구조 분석
| 요소 | 값 |
|------|---|
| Genre | Vintage Japanese Jazz Kissa, Lo-Fi Aesthetic |
| Tempo | 68 BPM |
| Groove | Slow and Lazy Feel, slightly behind the beat |
| Texture | 1970s Analog Warmth, vinyl crackle, tape saturation, high-end roll-off EQ |
| Vocal | Intimate Breathy Female Alto Vocal, relaxed conversational delivery |
| Scene | Tranquil Cafe Mood |
| Structure | Minimalist Arrangement |

## Exclude (Core에 내장)
strictly no horns, no trumpet, no saxophone, no brass

## ⭐ Vintage Japanese Jazz Kissa — 기본형 프롬프트 (Cafe Line 1)

**용도:** Line 1 Cafe Jazz 가장 기본형. Vol.14~ 카페 BGM 피벗 시 베이스 템플릿.

```
[Hypnotic Bass]
[Moody Melody]
[Vintage Japanese Jazz Kissa]
[Quiet Cafe Mood]
[Lo-Fi Aesthetic]
[68 BPM]
[Slow and Lazy Feel]
[Minimalist Arrangement]
[1970s Analog Warmth]
[Intimate Breathy Female Alto Vocal]
[Relaxed Delivery Behind the Beat]
[Low-Mixed Intimate Vocal]

Warm acoustic upright piano, deep woody upright bass walking line, soft brushed snare drum shuffle, and muted hollow-body electric guitar comping. Strictly no horns, no trumpet, no saxophone, no brass. Subtle vinyl crackle, tape saturation, softened high end, and muffled analog warmth. Quiet nostalgic cafe atmosphere, understated groove, and background-friendly long-play pacing.
```

**사용법:**
- 이 기본형에서 BPM / Mood / Feel / Arrangement / Vocal 세부 / Texture 6축 중 1~2축만 트랙별로 변주
- 나머지 태그는 고정 유지 (앨범 일관성)

## ⭐ 필수 고정 태그 5개 (모든 장르 공통 — 절대 누락 금지)

아래 5개 태그는 **Cafe Jazz / Noir Jazz / Soul Funk** 등 **모든 라인에서 필수**:

```
[Hypnotic Bass]
[Mesmerizing Melody]
[Vintage Noir Jazz] or [Vintage Japanese Jazz Kissa] or [Vintage Soul Funk]
[Lo-Fi Aesthetic]
[1970s Analog Warmth]
```

### 체크리스트 (10곡 생성 시마다)
- [ ] 모든 곡에 `[Hypnotic Bass]` 포함
- [ ] 모든 곡에 `[Mesmerizing Melody]` 포함 ⭐ (자주 누락 주의)
- [ ] 모든 곡에 장르 태그 포함 (Vintage ~)
- [ ] 모든 곡에 `[Lo-Fi Aesthetic]` 포함
- [ ] 모든 곡에 `[1970s Analog Warmth]` 포함

### 변주 가능 태그 (곡마다 달라짐)
- Scene / Mood (ex: Closing Hour Cafe Mood)
- BPM (62~82 범위)
- Feel (Slow Lingering Feel, Slow Seductive Feel...)
- Arrangement 세부 (Ultra Minimalist, Warm, Sparse...)
- Vocal 세부 디렉션 (Breathy, Sultry Smoky...)
- Texture 추가 요소 (vinyl crackle 강도, rain ambience...)

---
최종 업데이트: 2026-04-21
