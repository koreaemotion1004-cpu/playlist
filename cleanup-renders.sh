#!/bin/bash
# 렌더링 임시 파일 자동 정리 스크립트
# 사용법: bash cleanup-renders.sh
# 주기: 매주 1회 실행 권장

set -e

BASE_DIR="$(dirname "$0")/사용한 곡/playlist-video"
DAYS=14  # 2주 이상 된 파일 삭제

echo "=== 렌더링 임시 파일 정리 (${DAYS}일 이상) ==="
echo ""

# WebM 파일 정리 (1080p/720p 미리보기)
echo "1. WebM 파일 검색 중..."
WEBM_COUNT=$(find "$BASE_DIR" -name "*.webm" -mtime +${DAYS} 2>/dev/null | wc -l)
if [ "$WEBM_COUNT" -gt 0 ]; then
    echo "   → ${WEBM_COUNT}개 webm 파일 발견 (${DAYS}일 이상)"
    find "$BASE_DIR" -name "*.webm" -mtime +${DAYS} -print -delete 2>/dev/null
else
    echo "   → 삭제할 webm 파일 없음"
fi
echo ""

# ProRes 폴더 정리 (업로드 완료된 대용량 파일)
echo "2. ProRes 폴더 검색 중..."
PRORES_COUNT=$(find "$BASE_DIR" -type d \( -name "prores" -o -name "prores_v2" \) -mtime +${DAYS} 2>/dev/null | wc -l)
if [ "$PRORES_COUNT" -gt 0 ]; then
    echo "   → ${PRORES_COUNT}개 ProRes 폴더 발견 (${DAYS}일 이상)"
    find "$BASE_DIR" -type d \( -name "prores" -o -name "prores_v2" \) -mtime +${DAYS} -print -exec rm -rf {} + 2>/dev/null
else
    echo "   → 삭제할 ProRes 폴더 없음"
fi
echo ""

# out/ 폴더 정리 (Remotion 기본 출력 폴더, 사용 금지 경로)
echo "3. out/ 폴더 검색 중..."
if [ -d "$BASE_DIR/out" ]; then
    OUT_SIZE=$(du -sh "$BASE_DIR/out" 2>/dev/null | cut -f1)
    echo "   → out/ 폴더 크기: ${OUT_SIZE}"
    echo "   → 삭제 중..."
    rm -rf "$BASE_DIR/out"
else
    echo "   → out/ 폴더 없음"
fi
echo ""

# 용량 체크
echo "=== 현재 playlist-video 폴더 용량 ==="
du -sh "$BASE_DIR" 2>/dev/null
echo ""

echo "=== 정리 완료 ==="
echo ""
echo "보호된 파일 (삭제 안 됨):"
echo "  - mp3 원본 (사용한 곡/volXX/*.mp3)"
echo "  - 최근 ${DAYS}일 이내 렌더링 파일"
echo "  - _archive/ 폴더 내 파일"
echo "  - public/ 폴더 (Remotion 소스)"
