---
name: Suno Style of Music 1000자 제한
description: Suno "Style of Music" 필드는 1000자 이상 잘림. 프롬프트 작성 시 반드시 under 1000 chars로 맞춘다.
type: feedback
originSessionId: 3bc61ede-0cb9-4fe7-89a3-1b765ab751cf
---
Suno의 Style of Music 필드는 **1000자 이상 입력 시 잘린다**.
→ 프롬프트 작성·수정 시 항상 **1000자 미만**으로 맞춰서 제공한다.

**Why:** 2026-04-20 사용자가 V8 테스트 중 "1000자 넘어서 짤린다"고 지적. 이전까지 제가 태그 나열 + 긴 prose paragraph 조합으로 1100~1300자 수준 프롬프트를 계속 드리고 있었음. 잘린 프롬프트는 뒷부분 태그·문구 손실 → 사용자 의도가 Suno에 전달 안 됨.

**How to apply:**
- 최종 Style of Music 프롬프트 전달 전 **글자 수 추정 / 여유 20% 두고 최대 800자 목표**
- 필수 요소 (절대 버리면 안 됨):
  1. 4 락 태그 (Hypnotic Bass · Mesmerizing Melody · Soul Funk · Mid-Tempo)
  2. BPM
  3. 보컬 태그 2개 (톤 + 믹스 위치)
  4. 핵심 악기 태그 3~4개 (Kick, Congas, Wah, Hammond 등)
  5. 장르 Attitude 태그 1개 (V8의 Back-Alley Urban Soul Attitude)
  6. prose paragraph (짧게, 1~2 문장)
- 버릴 수 있는 것:
  - 중복 mood 태그 (Neon and Shadows + Back-Alley Urban = 하나만)
  - 암시되는 태그 (In-The-Pocket Groove는 Street Swagger에 포함)
  - 꾸밈 형용사 중복 (warm, subtle 반복)
  - 긴 prose의 메타포 (collar up, wet asphalt 등 사치)
- 일반 권장 구조:
  ```
  [락 태그 4개]
  [BPM]
  [시대감 + 분위기 1개]
  [보컬 톤 + 위치 2개]
  [스웨거/태도 1개]
  [Kick · 퍼커션 3~4개]
  [기타 · 키보드 2개]
  [Attitude 마감 태그 1개]
  
  짧은 prose 2~3문장 (태그 보완만, 반복 금지)
  ```
- 장르 불문 (Soul Funk · Cafe Jazz · Noir · Gospel · Neo Soul) 모두 적용
