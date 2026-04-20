# 용량 관리 정책

## 파일 분류 (보존 / 삭제)

### Tier 1: 영구 보존 (절대 삭제 금지)
| 경로 | 크기 | 이유 |
|------|------|------|
| `사용한 곡/volXX/*.mp3` | ~40MB/Vol | Suno 원본, 재생성 불가 |
| `wiki/*.md` | ~500KB | 공식·아카이브·메타 |
| `썸네일/*.png` | ~5MB/Vol | 재사용 가능 |
| `_archive/*.mp4` | ~300MB/Vol | 최종 업로드본 |

### Tier 2: 1~2주 유지 후 삭제
| 경로 | 크기 | 이유 |
|------|------|------|
| `playlist-video/YYMMDD/*.webm` | ~13MB/곡 | 편집 미리보기 |
| `playlist-video/YYMMDD/prores_v2/*.mov` | ~700MB/곡 | 편집용 ProRes |
| `playlist-video/out/` | 가변 | Remotion 기본 출력 (사용 금지 경로) |

### Tier 3: 사용 후 즉시 삭제
| 경로 | 이유 |
|------|------|
| CapCut 캐시 | 편집 완료 후 즉시 |
| 업로드 실패한 MP4 | 즉시 |

---

## 용량 예측

### Vol 1개당 발생 용량
- mp3 원본: 40MB (영구)
- WebM: 120MB (2주 후 삭제)
- ProRes: 7GB (업로드 후 삭제)
- 최종 MP4: 300MB (영구)
- **합계 (영구 보존만):** ~350MB

### 100 Vol 운영 시
- 영구 보존: ~35GB (로컬 보관 가능)
- 임시 파일: 주기적 정리 필요

---

## 자동 정리 스크립트

프로젝트 루트에 `cleanup-renders.sh` 존재.

### 실행 방법
```bash
cd "C:/Users/user/Desktop/플리"
bash cleanup-renders.sh
```

### 동작
1. `playlist-video/*/*.webm` → 14일 이상 자동 삭제
2. `playlist-video/*/prores/` `prores_v2/` → 14일 이상 자동 삭제
3. `playlist-video/out/` → 무조건 삭제 (사용 금지 경로)

### 보호되는 것
- mp3 원본
- 14일 이내 최신 렌더링
- `_archive/` 폴더
- `public/` 폴더 (Remotion 소스)

---

## 권장 실행 주기

| 작업 | 주기 | 명령 |
|------|------|------|
| 수동 렌더링 정리 | 업로드 직후 | 해당 Vol 폴더 수동 삭제 |
| 스크립트 자동 정리 | 주 1회 | `bash cleanup-renders.sh` |
| 전체 용량 점검 | 월 1회 | `du -sh 사용한\ 곡/` |

---

## 외부 아카이브 전략 (장기)

Vol이 50개 이상 쌓이면:

### 옵션 A: 외부 HDD ⭐ 추천
- 4TB USB HDD: 약 5만원
- ~500 Vol 저장 가능
- 인터넷 불필요

### 옵션 B: 클라우드
- Google Drive 2TB: 월 2,600원
- Dropbox 2TB: 월 11달러
- 공유·백업 자동

### 옵션 C: NAS
- Synology DS220+: 약 40만원
- RAID 백업 가능
- 가정 서버

---

## 긴급 상황 대처

### 디스크 용량 부족 시
```bash
# 1. 현재 용량 확인
du -sh 사용한\ 곡/

# 2. 가장 큰 폴더 찾기
du -sh 사용한\ 곡/playlist-video/*/

# 3. 14일 이상 오래된 것 즉시 삭제
bash cleanup-renders.sh

# 4. 그래도 부족하면 수동으로 최근 것도 삭제
# (단, mp3 원본은 절대 건드리지 말 것)
```

### 실수로 mp3 원본 삭제 시
**복구 불가.** Suno에서 재생성 필요 (크레딧 소모).
→ 반드시 외부 백업 필수.

---
최종 업데이트: 2026-04-17
