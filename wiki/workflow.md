# 전체 작업 워크플로우

## "시작하자" 트리거 동작
1. `사용한 곡/playlist-video/YYMMDD/` 날짜 폴더 생성
2. 해당 폴더 열기 (explorer)
3. 렌더링 시작
4. 완료 시 해당 폴더 다시 열기

## 폴더 구조
- `사용한 곡/volXX/` → Suno mp3 원본 넣는 곳
- `사용한 곡/playlist-video/YYMMDD/` → 렌더링 영상 출력 폴더 (날짜별)
- `wiki/` → 가사 + 프롬프트 + 전략 아카이브

## 전체 워크플로우

### Step 1: 가사 생성
- wiki/lyrics-formula.md 참조
- wiki/rhyme-structures.md 참조
- wiki/song-form.md 참조
- 10곡 단위로 생성 (5구조 x 2곡)
- 출력 포맷: 제목 + 송폼 태그만 (괄호, 감정%, 마커 금지)

### Step 2: Suno 프롬프트 생성
- wiki/suno-core-dna.md의 Core DNA 고정
- wiki/suno-variation-guide.md 참조하여 트랙별 1~2축 변주
- Style of Music + Lyrics 세트로 출력

### Step 3: 제목 생성
- wiki/seo-title-strategy.md 참조
- 히트 제목 키워드 블록 교차 삽입
- 시크릿 모드 검색 테스트

### Step 4: 설명글 생성
- wiki/youtube-description.md 참조
- 타임라인 받은 후 작성
- SEO 최적화 5파트 구조

### Step 5: 렌더링
- 출력 경로: `사용한 곡/playlist-video/YYMMDD/` (out/ 폴더 사용 금지)
- 날짜 폴더 생성 → 열기
- 파일명 규칙: `Track XX. 제목.webm` (하이픈 금지, 공백으로)
  - GOOD: `Track 01. The Matchbox on the Counter.webm`
  - BAD: `The-Matchbox-on-the-Counter.webm`
- 이퀄라이저: 투명 WebM, 720p, 30fps, 병렬처리
- FullPlaylist 디자인: 얇은 라인 파형 + 하단 중앙 텍스트 (변경 금지)
- 완료 시 `사용한 곡/playlist-video/YYMMDD/` 폴더 다시 열기

### Step 5.5: 메타데이터 주입
- wiki/metadata-seo.md 참조
- ffmpeg로 webm 파일에 메타정보 주입 (재인코딩 없이 `-c copy`)
- Title / Artist / Album / Genre / Comment / Keywords 필수
- YouTube 봇이 긁어가서 SEO 신호 강화

### Step 6: 업로드
- 제목 + 설명글 + 태그 세트 적용

---
최종 업데이트: 2026-04-16
