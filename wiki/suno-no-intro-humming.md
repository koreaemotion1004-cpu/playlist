# Suno 도입부 허밍·애드립 금지 프롬프트

**문제:** Suno가 자주 곡 시작 전에 `Mmm...`, `Oh yeah...`, `Hey...` 같은 **불필요한 허밍·애드립**을 넣어 카페 BGM으로 쓸 때 어색함
**해결:** 가사 메타태그 + 스타일 프롬프트 **양쪽 모두**에 금지 문구 삽입

---

## ⭐ 핵심 원칙

**3가지 동시 적용 필수:**

1. **Mmm..., Oh... yeah, Hey... 같은 도입 보컬 삭제**
2. **`[ad-libs]`, `[smoky intro vocalizing]` 같은 태그 삭제**
3. **`Start Directly with Lyrics` 같은 명시적 지시 추가**

---

## 🏷️ 필수 금지 태그 (Style of Music 블록)

```
[No Intro Humming]
[No Intro Ad-Libs]
[No Wordless Intro]
[Clean Cold Open]
[Start Directly with Lyrics]
```

---

## 📝 본문 단락 한 줄 (Descriptive Body)

```
Start immediately with clear lyrics.
No humming, no vocalizing, no ad-libs at the beginning.
```

---

## 🎼 가사 Intro 메타태그 (Lyrics 블록)

```
[Intro]
[clean cold open]
[no humming, no ad-libs]
```

---

## 📋 완전 적용 예시 (Cafe BGM Noir 기준)

**Style of Music:**
```
[Hypnotic Bass]
[Moody Melody]
[Vintage Noir Jazz]
[72 BPM]
[Low-Mixed Intimate Vocal]
[No Intro Humming]
[No Intro Ad-Libs]
[No Wordless Intro]
[Clean Cold Open]
[Start Directly with Lyrics]

Warm upright piano, deep woody upright bass, soft brushed snare, and muted hollow-body electric guitar. Low-mixed intimate vocal, restrained and behind the beat. Start immediately with clear lyrics, with no humming, no vocalizing, and no ad-libs at the beginning.
```

**Lyrics:**
```
[Intro]
[clean cold open]
[no humming, no ad-libs]
The room is still
Coffee breathing slow

[Verse 1]
...
```

---

## ⚠️ 주의사항

- **Outro는 허밍 허용** (Noir 공식의 `Mmm` 허밍 Outro는 기존 규칙 유지)
- 이 금지 태그는 **Intro에만 적용**
- Cafe BGM / Noir / Soul Funk / Neo Soul 전 라인 공통 적용 가능

---

## 🔗 적용 대상
- 모든 Vol (14~)
- 모든 Line (Cafe/Noir/Soul Funk/Neo Soul)
- [[suno-core-dna]] 기본형에도 해당 5태그 추가 권장
- [[suno-kissa-series-template]] 5 Phase 시리즈 전체 적용
- [[suno-assistant-master-spec]] 마스터 스펙 규칙에 포함

---
최종 업데이트: 2026-04-24
