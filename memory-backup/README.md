# 메모리 백업 (Claude Code preferences)

이 폴더는 Claude Code의 사용자 규칙(memory) 백업입니다.
원본 위치: `~/.claude/projects/<프로젝트키>/memory/`

## 새 컴퓨터에서 복원하는 법

1. 새 컴퓨터에서 이 repo(playlist)를 이 프로젝트 경로로 클론
2. Claude Code를 해당 폴더에서 **한 번 실행** → `~/.claude/projects/<프로젝트키>/memory/` 폴더가 자동 생성됨
   - `<프로젝트키>`는 프로젝트 절대경로 기반이라 사용자명이 다르면 키도 달라짐
3. 이 `memory-backup/` 안의 `.md` 파일들을 위 `memory/` 폴더로 복사
4. Claude Code 재시작 → 규칙 인식 확인

## 포함된 규칙
- MEMORY.md — 인덱스
- feedback_no_arbitrary_numbers.md — 임의 수치 변주 금지
- feedback_soul_funk_reference_only.md — Soul Funk 레퍼런스 정공법
- feedback_suno_prompt_limit.md — Suno Style 1000자 제한
- feedback_copycat_no_self_diverge.md — 카피캣 자발적 차별화 금지
- feedback_image_prompts_english.md — 이미지 프롬프트 영어
- feedback_japanese_lyrics_hiragana.md — 일본어 가사 히라가나만/특수문자 제외

## 갱신
메모리가 바뀌면 원본 폴더 파일을 이 폴더에 다시 복사 후 커밋하면 됨.
