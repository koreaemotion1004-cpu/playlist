#!/bin/bash
# 렌더링 임시 파일 자동 정리 (silent mode)
# 매주 월요일 09:00 자동 실행 (Windows 작업 스케줄러)

BASE_DIR="$(dirname "$0")/사용한 곡/playlist-video"
DAYS=14

# WebM 삭제
find "$BASE_DIR" -name "*.webm" -mtime +${DAYS} -delete 2>/dev/null

# ProRes 폴더 삭제
find "$BASE_DIR" -type d \( -name "prores" -o -name "prores_v2" \) -mtime +${DAYS} -exec rm -rf {} + 2>/dev/null

# Remotion out/ 폴더 무조건 삭제
rm -rf "$BASE_DIR/out" 2>/dev/null

exit 0
