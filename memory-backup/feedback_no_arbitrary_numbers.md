---
name: 검증되지 않은 수치 변주 금지
description: Suno Advanced Settings 등에서 곡별로 임의 숫자 변경 금지 — 검증된 테스트 데이터 없으면 고정값 사용
type: feedback
originSessionId: 3bc61ede-0cb9-4fe7-89a3-1b765ab751cf
---
Suno Advanced Settings(Weirdness, Style influence 등)나 유사한 설정값에서, 곡별로 숫자를 임의로 변주하지 마라. 위키에 적힌 범위(예: 25~32)가 있어도 내부 테스트 결과 없이 "이 곡은 좀 더 누아르니까 32" 같은 느낌 기반 배분을 하지 않는다.

**Why:** 사용자가 2026-04-20 Soul Funk Suno 프롬프트 작성 시 지적 — "이건 갑자기 왜 나오는거야?" 내가 곡별로 28/32/25를 임의 배분했는데 검증 근거가 없었고, 이는 신뢰도를 해치는 허세 구체화. 위키에 범위만 적혀있어도 곡별 최적값이 검증된 게 아님.

**How to apply:**
- 기본값은 항상 **고정 단일 숫자** 사용 (Soul Funk: Weirdness 30, Style influence 75, male)
- 변주가 필요하면 **Style of Music 텍스트 프롬프트**(BPM/악기/Mood tag)에서만 한다
- 숫자를 바꾸려면 먼저 **같은 가사 + 같은 프롬프트로 숫자만 바꾼 A/B 렌더링** 후 결과를 위키에 기록 → 그 다음에만 허용
- 범위 표기("25~32")는 "실험 여지"지 "곡별 최적값"이 아니다
- 다른 장르(Cafe Jazz, Noir, Gospel, Neo Soul)에도 동일 원칙 적용
