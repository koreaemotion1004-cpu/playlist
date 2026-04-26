# 가사 메타태그 마스터 레퍼런스

**적용 범위:** Line 1 Cafe Jazz / Line 2 Noir / Line 3 Soul Funk / Line 5 Neo Soul (4개 라인 통합)
**최종 업데이트:** 2026-04-26 (마스터 신설)

---

## 📌 메타태그란?

**가사 안에 삽입되는 production direction 지시문.**

- ❗ Style of Music 필드 태그와 **다름** (Style 태그는 [Hypnotic Bass] 같은 음악 DNA)
- 메타태그는 Suno에게 **보컬·악기·믹스·다이나믹 디렉션** 지시
- 섹션 헤더 `[Verse 1]` 다음 줄에 1~3개 추가하는 형식

### 사용 예시
```
[Verse 1]
[conversational, close mic]
[soft, intimate]
We meet in a hazy corner
...
```

---

## 🎯 4개 라인 적용 정책

| 라인 | 핵심 무드 키워드 | 어울리는 태그군 | 피해야 할 태그군 |
|---|---|---|---|
| **Line 1 Cafe Jazz** | warm, tender, intimate, brushed | piano alone, warm brass swell, brushed drums | horns blaze, full power, dirty funk |
| **Line 2 Noir** | smoky, melancholic, mournful, late | melancholy piano, horns mournful, muted trumpet | hopeful, triumphant, soaring |
| **Line 3 Soul Funk** | groovy, raw, 70s, soulful, hypnotic | horns blaze, full groove drops, groove kicks in warm | city pop, smooth jazz, polish |
| **Line 5 Neo Soul** | laid-back, modern, lo-fi, baritone | Rhodes piano, stripped back, intimate | horns blaze, 70s funk, dirty funk |

---

# 📚 카테고리별 태그 라이브러리

## A. 🎬 Intro / Opening 디렉션

### 공통 (전 라인 적용 가능)
```
[clean cold open]      ← 도입 허밍 금지 (필수)
[no ad-libs]            ← 애드립 금지 (필수)
[no words yet]
[room quiet]
[no rush]
```

### 악기 시작 패턴
```
[single piano note]
[single piano, quiet]
[single note repeating]
[bass alone]
[drums enter second bar]
[organ hum]
[organ hum, slow]
[organ hum, sunday slow]
[warm brass swell]
[muted trumpet, low]
[piano stabs]
[brushed drums, slow]
[melancholy piano]
[flowing bass, gentle]
```

### 무드 시작
```
[sharp and playful]      ← Soul Funk
[warm and easy]          ← Cafe Jazz / Neo Soul
[steady and golden]      ← Soul Funk
[the last note of the night]  ← Noir
[night entering]         ← Noir
[detective cool]         ← Noir
[rain sound, then bass]  ← Noir
```

---

## B. 🎤 보컬 디렉션

### 전달 방식
```
[conversational]                     ← 전 라인
[close mic]                          ← 전 라인
[conversational, close mic]          ← 전 라인 (가장 흔한 조합)
[intimate delivery]                  ← 전 라인
[vocal forward]                      ← 전 라인
[stripped back, vocal forward]       ← 전 라인
[vocal alone then horns enter]       ← Soul Funk / Cafe Jazz
[raw, vocal alone]                   ← Soul Funk
[horns soft, vocal raw]              ← Soul Funk
```

### 감정/톤
| 톤 | 적합 라인 |
|---|---|
| `[soft, intimate]` `[close, quiet]` | 전 라인 |
| `[rich, full]` `[warm and giving]` `[generous, soulful]` | Soul Funk / Neo Soul |
| `[lazy and warm]` | Neo Soul / Cafe Jazz |
| `[tender and aching]` `[longing]` | 전 라인 (특히 Cafe Jazz / Neo Soul) |
| `[tired, honest]` `[grounded, storytelling]` | Soul Funk Part 2 / Cafe Jazz |
| `[dry, analytical]` | Noir / Soul Funk 자기성찰 |
| `[confessional]` `[stripped, confessional]` | 전 라인 (Bridge용) |
| `[raw, quiet]` `[stripped, accepting]` | Bridge용 (전 라인) |
| `[peaceful, released]` `[at peace]` | 결말 (Outro/Final) |
| `[grateful, honest]` `[honest and grateful]` | Vintage Park 감정 훅 톤 |
| `[pulling back]` `[easing back]` `[intimate again]` | Verse 2 / Bridge 진입 |
| `[heavier now]` `[heavier, resigned]` `[same weight]` | Bridge / Final |
| `[cool and steady]` | Noir |
| `[playful back and forth]` | Soul Funk dialogue |

---

## C. 📈 다이나믹 디렉션

### Build-up (빌드업)
```
[build slowly]
[slow build]
[rising]
[rising slowly]
[rising with weight]
[rising gently]
[opening up]
[building tension]
[building warmth]
[building intensity]
[gentle build]
[tension building]
[momentum building]
[pulling back then rising]
```
**적합 위치:** Pre-Chorus / Bridge 끝

### Peak / Climax
```
[full band enters]
[full band]
[full band, bigger]
[full band, warm]
[full band locks in]
[everything in]
[everything in, soaring]
[everything in, wide open]
[everything wide open]
[wide and warm]
[wide open]
[horns blaze]                  ← Soul Funk 한정
[horns blaze warm]             ← Soul Funk 한정
[horns punch hard]             ← Soul Funk 한정
[horns punching]               ← Soul Funk 한정
[horns wide open]              ← Soul Funk
[all instruments in]
[wall of sound]
[full power]                   ← Soul Funk
[full and golden]
[lush and full]
[full groove]                  ← Soul Funk
[full groove drops]            ← Soul Funk
[full groove rolling]          ← Soul Funk
[groove kicks in warm]         ← Soul Funk
[groove warm and rolling]      ← Soul Funk
[groove steady]                ← Soul Funk / Neo Soul
[groove lifts gently]          ← Neo Soul / Cafe Jazz
[fuller groove]
[confident, mid tempo]
[peak energy]
```
**적합 위치:** Chorus / Final Chorus

### Down / Release
```
[settle back down]
[stripped back]
[stripped back, vocal forward]
[settle]
[pull back]
[easing back]
[cool down]
[breathe]
[drop to minimal]
[sparse]
[sparse and honest]
[tender, sparse]
[quiet now]
[tender moment]
[reflective]
[heavy and slow]
[slow and heavy]
[groove dragging, intentional]   ← Soul Funk 한정
```
**적합 위치:** Verse 2 / Bridge 시작

---

## D. 🎺 악기/편곡 디렉션

### Horns / Brass (Soul Funk·Cafe Jazz 주력)
```
[horns only]                    ← Soul Funk Bridge
[horns low and warm]            ← Cafe Jazz / Soul Funk
[horns low and mournful]        ← Noir
[horns low, accepting]          ← Noir / Soul Funk reflection
[horns plaintive]               ← Noir
[horns mournful]                ← Noir
[horns fade]                    ← Outro 전 라인
[horns fade to piano]           ← Outro 전 라인
[horns and bass]                ← Verse / Bridge
[horns soft, vocal raw]         ← Bridge
[horns swell then quiet]        ← Cafe Jazz / Noir
[horns reply in kind]           ← Soul Funk Call & Response
[horns wide open]               ← Soul Funk Chorus
[horns blaze]                   ← Soul Funk Chorus
[horns blaze warm]              ← Soul Funk Chorus
[horns punch hard]              ← Soul Funk Final
[horns punching]                ← Soul Funk Final
[crying horns]                  ← Soul Funk / Noir
[soulful horns]                 ← Soul Funk
[muted trumpet, low]            ← Noir / Cafe Jazz
[warm brass swell]              ← Cafe Jazz
[full brass section]            ← Soul Funk Final
```

### Keyboards
```
[piano alone]                   ← 전 라인 (Verse 시작)
[piano alone, searching]        ← Bridge
[piano alone again]             ← Outro
[piano alone, last note]        ← Outro 마지막
[piano out slow]                ← Outro
[piano stabs]                   ← Soul Funk
[piano and bass playful]        ← Soul Funk groove
[organ hum]                     ← Soul Funk / Neo Soul
[organ hum, slow]               ← Cafe Jazz / Neo Soul
[organ hum, sunday slow]        ← Soul Funk gospel
[organ fades]                   ← Outro
[single piano note]             ← Intro
[single piano, quiet]           ← Intro
[Rhodes piano]                  ← Neo Soul 핵심
[Hammond organ]                 ← Soul Funk / Neo Soul
[electric piano]                ← Neo Soul / Soul Funk
```

### Bass / Drums
```
[bass alone]                    ← Intro / Outro
[bass and drums only]           ← Verse 진입
[bass and piano]                ← Verse / Bridge
[drums enter second bar]        ← Intro
[brushed drums, slow]           ← Cafe Jazz / Noir 핵심
[drums fade last]               ← Outro
```

---

## E. 🎺 Outro 디렉션

```
[fade with horns]               ← Soul Funk
[horns fade]                    ← 전 라인
[horns fade to piano]           ← 전 라인
[piano out slow]                ← 전 라인
[organ fades]                   ← Soul Funk / Neo Soul
[bass alone]                    ← 전 라인
[piano alone again]             ← 전 라인
[piano alone, last note]        ← 전 라인
[slow fade]                     ← 전 라인
[reverb tail]                   ← 전 라인 (Noir 특히)
[rain and horns fade]           ← Noir
[decay and silence]             ← Noir / Cafe Jazz
[night entering]                ← Noir
[the last note of the night]    ← Noir / Cafe Jazz
[drums fade last]               ← Soul Funk
```

---

## F. 🎛️ 프로덕션 태그

```
[analog tape]
[1970s recording]               ← Soul Funk / Cafe Jazz Vintage
[vintage sound]                 ← Soul Funk / Cafe Jazz
[warm analog]                   ← 전 라인
[dry close-mic]                 ← Soul Funk / Noir
[no reverb]                     ← Soul Funk
[no polish]                     ← Soul Funk
[no pop production]             ← Soul Funk
[raw recording]                 ← Soul Funk
[live feel]                     ← Soul Funk
[studio recorded]               ← Neo Soul
[warm mix]                      ← 전 라인
[vocal forward]                 ← 전 라인
[bass forward]                  ← Soul Funk
[punchy mix]                    ← Soul Funk
```

---

## G. 🌡️ 무드 / 분위기 태그

| 태그 | 적합 라인 |
|---|---|
| `[groovy]` `[soulful]` `[funky]` | Soul Funk |
| `[warm]` `[tender]` `[intimate]` | 전 라인 |
| `[raw]` `[heavy]` `[hypnotic]` | Soul Funk |
| `[melancholic]` `[nostalgic]` `[longing]` `[aching]` | Noir / Cafe Jazz / Neo Soul |
| `[playful]` | Soul Funk light |
| `[confident]` `[triumphant]` | Soul Funk Final |
| `[hopeful]` | Cafe Jazz / Neo Soul |
| `[laid-back]` `[lazy]` | Neo Soul 핵심 |
| `[reflective]` `[peaceful]` `[cathartic]` | 전 라인 (특히 Soul Funk Part 2) |
| `[urgent]` | Soul Funk dramatic |
| `[steady]` `[slow burn]` | Soul Funk |
| `[mid-tempo]` `[uptempo]` | Soul Funk |

---

## H. 🎵 장르 태그 (Style 필드용)

```
[soul-funk]                     ← Line 3
[neo-soul]                      ← Line 5
[soul]                          ← Line 3 / Line 5
[funk]                          ← Line 3
[R&B]                           ← Line 5
[jazz-funk]                     ← Line 1 / Line 3
[gospel]                        ← Line 4 (분리됨)
[70s funk]                      ← Line 3
[classic soul]                  ← Line 3
[vintage soul]                  ← Line 3
[rare groove]                   ← Line 3
[dirty funk]                    ← Line 3 (heavy)
[heavy funk]                    ← Line 3 (heavy)
[1970s]                         ← Line 1 / Line 3
```

---

## I. 🚫 부정 프롬프트 (Style 필드용)

원하지 않는 요소 차단. **Style of Music 필드에 추가**.

### Soul Funk 권장
```
NOT city pop
NOT smooth jazz
NOT synth pop
NOT pop production
NO polish
NO reverb
NO pop production
```

### Cafe Jazz 권장
```
NOT smooth jazz
NOT contemporary jazz
NO modern production
NO pop hooks
```

### Noir 권장
```
NOT bright
NOT happy
NOT pop production
NO reverb (Noir는 의도적 reverb는 허용)
```

### Neo Soul 권장
```
NOT 70s funk
NOT dirty funk
NOT horns blaze
NO polished pop
```

---

# 📋 섹션별 추천 조합 (전 라인 공통 템플릿)

## [Intro]
```
[clean cold open]
[no ad-libs]
[single piano note]
[room quiet]
```
**변주:**
- Cafe Jazz: `[brushed drums, slow]` 추가
- Noir: `[muted trumpet, low]` 추가
- Soul Funk: `[bass alone]` 또는 `[organ hum, slow]` 추가
- Neo Soul: `[Rhodes piano]` `[warm and easy]` 추가

## [Verse 1]
```
[conversational, close mic]
[soft, intimate]
[close, quiet]
```
**변주:**
- Cafe Jazz: `[warm and giving]` `[tender and aching]`
- Noir: `[dry, analytical]` `[detective cool]`
- Soul Funk: `[grounded, storytelling]` `[lazy and warm]`
- Neo Soul: `[lazy and warm]` `[laid-back]`

## [Pre-Chorus]
```
[build slowly]
[rising]
[building tension]
```
**변주:**
- Cafe Jazz: `[building warmth]` `[gentle build]`
- Noir: `[heavy and slow]` `[slow building weight]`
- Soul Funk: `[rising with weight]` `[momentum building]`
- Neo Soul: `[gentle build]`

## [Chorus]
```
[full band enters]
[full band]
```
**변주:**
- Cafe Jazz: `[wide and warm]` `[full and golden]` `[warm brass swell]`
- Noir: `[full band, bigger]` (절제) + `[crying horns]`
- Soul Funk: `[horns blaze]` `[full groove drops]` `[groove kicks in warm]`
- Neo Soul: `[fuller groove]` `[groove lifts gently]`

## [Verse 2]
```
[settle back down]
[easing back]
```
**변주:**
- Cafe Jazz: `[reflective]` `[grounded, storytelling]`
- Noir: `[heavier now]` `[same weight]`
- Soul Funk: `[grounded]` `[intimate again]`
- Neo Soul: `[at peace]` `[reflective, deep]`

## [Bridge]
```
[stripped back, vocal forward]
[raw, vocal alone]
[sparse and honest]
```
**변주:**
- Cafe Jazz: `[tender, sparse]` `[piano alone, searching]`
- Noir: `[horns mournful]` `[stripped, confessional]`
- Soul Funk: `[horns soft, vocal raw]` `[playful back and forth]`
- Neo Soul: `[stripped, accepting]` `[Rhodes piano]`

## [Final Chorus]
```
[full band, bigger]
[everything in]
```
**변주:**
- Cafe Jazz: `[everything in, wide open]` `[wide and warm]`
- Noir: `[full band, bigger]` (절제 유지) + `[horns punching]`
- Soul Funk: `[everything in, soaring]` `[horns blaze warm]` `[full power]`
- Neo Soul: `[wide open]` `[soaring]` (절제)

## [Outro]
```
[fade with horns]
[piano out slow]
[reverb tail]
```
**변주:**
- Cafe Jazz: `[piano alone, last note]` `[organ fades]`
- Noir: `[rain and horns fade]` `[the last note of the night]` `[decay and silence]`
- Soul Funk: `[fade with horns]` `[organ fades]` `[bass alone]`
- Neo Soul: `[piano alone again]` `[slow fade]`

---

# 💡 Best Practice 예시 (실제 작품)

## Hazy Corner (사용자 작품, 2026-04-26 평가)
> **메타태그 9개 활용 — 베스트 프랙티스 후보**

```
[Intro]
[clean cold open]
[no ad-libs]

[Verse 1]
[conversational, close mic]

[Pre-Chorus]
[build slowly]

[Chorus]
[full band enters]

[Verse 2]
[settle back down]

[Bridge]
[stripped back, vocal forward]

[Final Chorus]
[full band, bigger]

[Outro]
[fade with horns]
```

→ 모든 섹션에 디렉션 명확. Suno가 정확히 해석 가능.

---

# 🎯 적용 규칙 (작업 시 체크리스트)

- [ ] **Intro 필수 2태그:** `[clean cold open]` + `[no ad-libs]`
- [ ] **각 섹션 1~3개** 메타태그 (너무 많으면 충돌)
- [ ] **라인 적합도 확인** (Soul Funk에 `[smooth jazz]` 같은 충돌 태그 X)
- [ ] **Build → Peak → Down** 다이나믹 곡선 의식
- [ ] **Outro 페이드 명시** (`[fade with horns]` `[piano out slow]` 등)
- [ ] **부정 프롬프트는 Style 필드에** (가사가 아닌 Style of Music 입력)

---

# 🔗 참조

- [[lyrics-formula]] (Cafe Jazz)
- [[lyrics-formula-noir]] (Noir)
- [[소울펑크]] (Soul Funk)
- [[네오소울]] (Neo Soul)
- [[suno-no-intro-humming]] (Intro 허밍 금지 — 이 마스터에 통합됨)

---
최종 업데이트: 2026-04-26 (Soul Funk Complete Meta Tag Reference 통합)
