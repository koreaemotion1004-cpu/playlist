# 전체 작업 워크플로우

## "시작하자" 트리거 동작
1. `사용한 곡/playlist-video/YYMMDD/` 날짜 폴더 생성
2. 해당 폴더 열기 (explorer)
3. 렌더링 시작
4. 완료 시 해당 폴더 다시 열기

## ⭐ 전역 규칙 (모든 장르 공통)

### 트랙 생성 순서 규칙
- **Track 10 → 09 → 08 → 07 → 06 → 05 → 04 → 03 → 02 → 01** (역순)
- 가사, Suno 프롬프트, 제목 모두 **10번부터 역순**으로 생성
- 적용 범위: Cafe Jazz, Noir Jazz, Soul Funk 등 **모든 라인·모든 장르**
- 예외 없음

### 업로드 전략 확정: **C (단일 플레이리스트)**
- 10곡 = **1개 영상** (30분 내외)
- 1개 통합 제목 + 1개 긴 설명글 (소설 포함)
- 재생은 Track 01 → 10 순서
- ❌ 개별 영상 분할 업로드 X (NOIR VIBES 방식 사용 안 함)
- 이유: 카페 BGM 특성상 장시간 재생 수요, 시청시간 극대화

### 업로드 흐름 (확정)
```
1곡 × 10 렌더링 → 1개 플레이리스트 영상 편집(CapCut) → 1개 업로드
```

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
- ⭐ **생성 순서: Track 10 → 09 → 08 → ... → 01 (역순)** — 모든 장르 공통 규칙

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
