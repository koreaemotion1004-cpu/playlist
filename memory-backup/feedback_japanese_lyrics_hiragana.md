---
name: feedback-japanese-lyrics-hiragana
description: "일본어 가사는 히라가나만 사용, 특수문자 제외 (Jazztronica/혼합가사 라인)"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 4a7abfa8-7222-4bd4-90c4-f9e4e16c7f2c
---

일본어 가사를 쓸 때는 **히라가나만** 사용한다. 한자·가타카나 금지. 그리고 가사 본문에서 **특수문자(—, …, ~, ★, 괄호, 따옴표 등) 전면 제외**.

**Why:** 사용자가 일본어+영어 혼합 가사 라인(Jazztronica 계열) 작업 시 명시적으로 지정 (2026-05-25). 발음·렌더링 일관성 + 깔끔한 텍스트 출력 목적으로 추정.

**How to apply:** 일본어가 들어가는 모든 가사(혼합 포함)에서 히라가나로만 표기. 송폼 태그 `[Verse 1]` 같은 구조 표기는 예외(구조이므로 허용). 가사 라인 안에는 기호 넣지 말 것. 영어 가사 부분도 특수문자 배제. 관련: [[feedback-image-prompts-english]]
