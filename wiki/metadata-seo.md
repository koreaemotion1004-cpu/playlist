# 파일 메타데이터 SEO 전략

## 핵심 원리
mp3/mp4/webm/mov 파일 내부에는 메타정보를 박을 수 있는 필드가 있다.
YouTube 업로드 시 알고리즘 봇이 이 메타정보를 긁어가서 노출에 반영한다.

## Suno 다운로드 파일의 메타정보
자동 포함되는 정보:
- 가사 (Lyrics)
- Suno 고유 번호 (Song ID)

활용:
- 다른 계정에서도 이 파일 올리면 Suno가 ID 인식 → 이어 작업 가능
- 가사 자동 포함으로 재편집 수월

주의: 오디오 편집하면 메타정보 사라질 수 있음

## 커스텀 메타데이터 필드
| 필드 | 용도 |
|------|------|
| Title | 곡 제목 |
| Artist | 유튜브 채널명 |
| Album | Vol.XX 앨범명 |
| Album Artist | 채널 브랜드 |
| Genre | Jazz / Cafe Jazz |
| Date | 발매 연도 |
| Comment | YouTube 설명 키워드 |
| Description | 상세 설명 |
| Keywords | SEO 태그 (콤마 구분) |
| Composer | 작곡가명 |
| Copyright | 저작권 |

## 우리 채널 메타데이터 템플릿
```
Title:        Track XX. 제목
Artist:       途中広告なし
Album:        Cafe Jazz Vol.XX
Album Artist: 途中広告なし
Genre:        Cafe Jazz
Date:         2026
Comment:      Home Café Jazz ☕ relax & eazy, vintage jazz kissa, slow morning jazz
Keywords:     cafe jazz, lofi, vintage, slow jazz, bgm, 作業用BGM, スロージャズ, カフェジャズ
Composer:     Suno AI
Copyright:    © 2026 途中広告なし
```

## ffmpeg 메타데이터 주입 명령어
```bash
ffmpeg -i input.webm \
  -metadata title="Track 01. The Matchbox on the Counter" \
  -metadata artist="途中広告なし" \
  -metadata album="Cafe Jazz Vol.12" \
  -metadata genre="Cafe Jazz" \
  -metadata date="2026" \
  -metadata comment="Home Café Jazz ☕ relax & eazy" \
  -metadata description="Vintage Japanese Jazz Kissa style cafe jazz BGM" \
  -c copy output.webm
```

- `-c copy` = 재인코딩 없이 메타데이터만 주입 (빠름, 품질 유지)

## YouTube에 도움되는 이유
- YouTube 봇이 파일 메타정보를 긁어감
- 제목/설명/태그와 일관된 키워드가 메타에 박혀있으면 알고리즘 신호 강화
- 미세한 효과지만 누적되면 SEO 경쟁력

## 워크플로우 적용
Step 5 (렌더링) 직후 Step 5.5 (메타데이터 주입) 추가
→ 최종 업로드 전 메타정보 주입된 webm 파일이 결과물

---
최종 업데이트: 2026-04-17
