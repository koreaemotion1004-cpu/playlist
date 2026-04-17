# YouTube 데이터 추출 워크플로우

## 배경
WebFetch는 YouTube 페이지가 JavaScript로 렌더링되어서 메타데이터를 못 읽음.
yt-dlp로 해결.

## 도구: yt-dlp
```bash
pip install yt-dlp
yt-dlp --version  # 버전 확인
```

## 자주 쓰는 명령어

### 1. 기본 메타데이터 (제목, 채널, 조회수, 길이)
```bash
yt-dlp --skip-download --print "%(channel)s | %(title)s | %(view_count)s views | %(duration)ss" "URL"
```

### 2. 설명글 전체 포함
```bash
yt-dlp --skip-download --print "=== %(channel)s | %(title)s ===" --print "%(description)s" "URL"
```

### 3. 여러 영상 한 번에
```bash
yt-dlp --skip-download --print "%(title)s | %(view_count)s" "URL1" "URL2" "URL3"
```

### 4. 채널 전체 영상 목록 (상위 N개)
```bash
yt-dlp --flat-playlist --playlist-end 20 --skip-download --print "%(title)s | %(view_count)s" "CHANNEL_URL"
```

### 5. 자막(가사) 추출
```bash
yt-dlp --write-subs --sub-langs "en,ko,ja" --skip-download "URL"
# → 자막 파일(.vtt)로 저장
```

### 6. 자동 생성 자막 포함 (보컬 추출 용)
```bash
yt-dlp --write-auto-subs --sub-langs "en" --skip-download "URL"
```

### 7. JSON 전체 메타데이터
```bash
yt-dlp --skip-download --dump-json "URL" > metadata.json
# 조회수, 업로드 날짜, 태그, 좋아요 등 전부 포함
```

## 대안 도구 (보조)

### YouTube Data API v3 (공식)
- Google Cloud Console에서 API 키 발급
- 무료 할당량: 일 10,000 쿼리
- 더 안정적이지만 API 키 관리 필요

### youtube-transcript-api (자막 전용)
```bash
pip install youtube-transcript-api
```
```python
from youtube_transcript_api import YouTubeTranscriptApi
transcript = YouTubeTranscriptApi.get_transcript("VIDEO_ID")
```

### oembed (초경량)
```
https://www.youtube.com/oembed?url=VIDEO_URL&format=json
```
→ 제목·썸네일·채널명만 필요할 때

## 경고 무시
yt-dlp 실행 시 "No supported JavaScript runtime" 경고 나와도
기본 메타데이터는 정상 추출됨. 일단 무시.

deno 설치하면 경고 사라짐: `npm install -g deno` 또는 `choco install deno`

## 실전 워크플로우

### 레퍼런스 채널 분석 시
```bash
# 1. 채널 상위 10개 영상 조회
yt-dlp --flat-playlist --playlist-end 10 --skip-download --print "%(title)s | %(view_count)s | %(id)s" "https://www.youtube.com/@CHANNEL/videos"

# 2. 상위 1~3개 설명글 추출
yt-dlp --skip-download --print "=== %(title)s ===" --print "%(description)s" "URL1" "URL2" "URL3"

# 3. 가사 필요 시 자막 추출
yt-dlp --write-subs --write-auto-subs --sub-langs "en" --skip-download "URL"
```

---
최종 업데이트: 2026-04-17
