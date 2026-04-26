# 전체 작업 워크플로우

## ⭐ 트리거 명령어 (2026-04-20 개편)

### 🎬 "시작" 또는 "시작하자" (새 Vol 작업)
```
내가 "시작" 치면 → 자동 실행:
    ⓪ ⭐ 실측 VPH 갱신 (2026-04-25 신설 · 모든 제목 작업의 전제)
       - yt-dlp로 레퍼런스 채널 최근 15~25개 영상 VPH 즉석 측정
       - Line 1 Cafe: Coffee Shop Vibes / Lepreezy / Fikatone / Mysig
       - Line 2 Noir: Sepia Lounge / PinkPantherlounge / NOIR VIBES
       - Line 3 Soul Funk: Mellow_Funk + Vintage Park (둘 다 필수)
       - 측정 결과 → wiki/soulfunk-vph-tracking.md (또는 라인별 트래킹) 갱신
       - 위키 기록 VPH 그대로 사용 금지 (시간 경과로 변동)

    ① 제목 3개 생성 (A/B 테스트용) ⭐ 2026-04-26 재개정
       - 표준 포맷: [emoji] Soul Funk Lounge Mix | [색] [장면] • Slow Deep Groove
         예) 🥃 Soul Funk Lounge Mix | Amber Late Night Bar • Slow Deep Groove
       - ❌ vol.XX 제거 (2026-04-26 결정) — Mellow_Funk 챔피언 정확 복제
         이전: ❌ "🥃 Soul Funk Lounge Mix | Emerald Late Night Bar • vol.02"
         이후: ✅ "🥃 Soul Funk Lounge Mix | Emerald Late Night Bar • Slow Deep Groove"
       - 제목 1: 챔피언 영상 정확 매칭 (트래픽 풀 직격)
       - 제목 2: 인접 트래픽 풀 매칭 (보조 추천 진입)
       - 제목 3: 차별화 안 (포맷·각도 변경, control)
       - 모든 안은 ⓪에서 측정한 실측 VPH 데이터 근거로 작성
       - YouTube Studio A/B 테스트 (영상 단계 노출 분배 14일 측정) 활용
       - 자세한 전략: [[soulfunk-vph-tracking]] / [[title-direction-master]]
    ② 가사 10곡 (Track 10 → 01 역순)
    ③ Suno 프롬프트 10곡 (Track 10 → 01 역순)
       ★ 자동 적용 규칙 (suno-artist-benchmark.md 참조) ★
       - 방법 B: 아티스트 이름 대신 "연도 + 스타일" 포맷 사용 (저작권 필터 우회)
         예: [2002 intimate female jazz vocal era]
             [1955 smoky noir jazz female alto style]
             [1971 warm baritone soul era]
             [2018-2020 modern neo soul intimate baritone]
       - 방법 C: 3앵커 로테이션
         · Track 01~03 → 라인 메인 앵커 #1 (핵심 정체성)
         · Track 04~06 → 라인 메인 앵커 #2 (변주·보강)
         · Track 07~10 → 라인 메인 앵커 #3 (다양성·마무리)
       - 앵커 매트릭스:
         · Line 1 Cafe:     #1 Norah Jones 2002 / #2 Diana Krall 1997 / #3 Madeleine Peyroux 2004
         · Line 2 Noir:     #1 Julie London 1955 / #2 Peggy Lee 1956 / #3 Billie Holiday 1958
         · Line 3 Soul Funk: #1 Bill Withers 1971 / #2 Curtis Mayfield 1970 / #3 Donny Hathaway 1970
         · Line 5 Neo Soul: #1 Mac Ayres 2017 / #2 D'Angelo 2000 / #3 Tom Misch 2018
       - 1곡당 앵커 1명 고정 (섞지 않음)
       - 도입부 허밍·애드립 금지 태그 5개 자동 포함 (suno-no-intro-humming.md)

       ★★ 방법 B 강제 규칙 (Suno 필터 우회 — 위반 시 프롬프트 리젝트) ★★
       - 브래킷 태그 [...] 뿐 아니라 descriptive body(설명 단락)에도
         아티스트/앨범/유명 곡명 절대 사용 금지
       - 반드시 "[연도] + [스타일 서술어]" 포맷만 사용
       - 실수 예시 (금지):
         ❌ "Bill Withers Just As I Am era warmth"
         ❌ "Curtis Mayfield Superfly era groove"
         ❌ "Norah Jones Come Away With Me era"
         ❌ "Mac Ayres Drive Slow style"
         ❌ "D'Angelo Voodoo era drum pocket"
       - 올바른 예시:
         ✅ "1971 intimate baritone soul era warmth"
         ✅ "1972 urban cinematic soul funk groove"
         ✅ "2002 intimate female jazz era delivery"
         ✅ "2017 modern neo soul laid-back baritone style"
         ✅ "2000 deep lo-fi neo soul drum pocket"
       - 장르 이름 + 악기 묘사는 허용 (Suno 공식 태그로 취급)
       - Suno가 아티스트 이름 감지하면 프롬프트 리젝트 또는 다른 스타일로 생성
```

### 🎨 "랜더링" 또는 "랜더링 시작" (mp3 렌더링)
```
내가 "랜더링" 치면 → 자동 실행:
    1. `사용한 곡/playlist-video/YYMMDD/` 날짜 폴더 생성
    2. 해당 폴더 열기 (explorer)
    3. ProRes 4444 렌더링 시작
    4. 메타데이터 주입
    5. 완료 시 폴더 다시 열기
```

---

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

### ⭐ 제목 생성 A/B 로테이션
- **홀수 Vol (13, 15, 17...)** → A 공식 (`Rainy 1940s Coffee Shop Ambience`)
- **짝수 Vol (14, 16, 18...)** → B 공식 (`& Jazz` 패턴)
- 상세: [[title-direction-master]]

### ⭐ BPM 기승전결 곡선 규칙 (Soul Funk / Neo Soul 전용)

**10곡 전체 구조:** 기(1~2) → 승(3~5) → 전(6~8) → 결(9~10)

```
재생 순서:  01 → 02 → 03 → 04 → 05 → 06 → 07 → 08 → 09 → 10
BPM:        78   79   80   81   82   83   84   85   78   72
기승전결:   기   기   승   승   승   전   전   전   결   결
```

**핵심 규칙:**
- 시작 (Track 01): **78 BPM**
- 최고점 (Track 08): **85 BPM**
- 여운 마무리 (Track 10): **72 BPM** ⭐ (시작보다 낮음)

**이유:**
- Track 10이 시작(78)보다 낮아야 "지는 해" 여운 나옴
- 72는 심박수 근접 → 본능적 안정감
- 최고점 85 → 72 하강폭 = 15% → 확실한 마무리 감각
- 70 이하는 카페 BGM 범위 벗어남 (졸음 유발)

**예외 장르 (Line 1 Cafe Jazz/Noir):**
- 기존 BPM 유지 (62~82 기존 범위)
- 기승전결 곡선 선택적

### BPM 대안 (Track 10 여운 강도 조절)
| BPM | 여운 강도 | 상황 |
|-----|---------|------|
| 74 | 적당 | 안전 최소선 |
| **72** ⭐ | **최적** | **기본값** |
| 70 | 강함 | 드라마틱 원할 때 |
| 68↓ | 과함 | ❌ 카페 BGM 범위 초과 |

## 폴더 구조
- `사용한 곡/volXX/` → Suno mp3 원본 넣는 곳
- `사용한 곡/playlist-video/YYMMDD/` → 렌더링 영상 출력 폴더 (날짜별)
- `wiki/` → 가사 + 프롬프트 + 전략 아카이브

---

## 🎬 전체 워크플로우 (단계별 상세)

### Step 1: "시작" — 제목 + 가사 + 프롬프트 자동 생성
명령어: `시작` 또는 `시작하자`

#### 1-1. 제목 생성
- [[title-direction-master]] A/B 공식 참조
- Vol 번호에 따라 공식 자동 선택 (홀수=A, 짝수=B)
- Use Case 라이브러리에서 미사용 1개 자동 선택
- 독창 구문 자동 생성
- 시크릿 모드 검증 권장

#### 1-2. 가사 생성 (Track 10 → 01 역순)
- [[lyrics-formula]] 참조 (빌보드 공식)
- [[lyrics-formula-noir]] 참조 (Noir 전용)
- [[rhyme-structures]] 참조 (5구조 × 2곡)
- [[song-form]] 참조 (송폼 구조)
- 출력 포맷: 제목 + 송폼 태그만 (괄호, 감정%, 마커 금지)

#### 1-3. Suno 프롬프트 생성 (Track 10 → 01 역순)
- [[suno-core-dna]] Core DNA 5 필수 태그 확인
- [[suno-variation-guide]] 트랙별 1~2축 변주
- 장르별 템플릿 적용:
  - Cafe Jazz/Noir: [[lyrics-formula-noir]]
  - Soul Funk: [[소울펑크]]
  - Gospel: [[가스펠]]
  - Neo Soul: [[네오소울]]
- Style of Music + Lyrics 세트로 출력

### Step 2: mp3 준비 (수동)
- Suno에서 10곡 생성
- mp3 다운로드
- `사용한 곡/volXX/` 폴더에 저장
- 파일명 규칙: `Track XX. 제목.mp3`

### Step 3: "랜더링" — mp3 영상 렌더링
명령어: `랜더링` 또는 `랜더링 시작`

#### 3-1. 렌더링
- 출력 경로: `사용한 곡/playlist-video/YYMMDD/prores_v2/`
- ProRes 4444 + 알파 채널 (yuva444p10le)
- 1280x720 HD + PNG image format
- 순차 렌더링 (동시 실행 시 오디오 충돌)
- 파일명: `Track XX. 제목.mov` (하이픈 금지, 공백)

#### 3-2. 메타데이터 주입
- [[metadata-seo]] 참조
- ffmpeg로 mov 파일에 메타정보 주입
- Title / Artist / Album / Genre / Keywords 필수

### Step 4: 설명글 생성 (수동 요청)
- [[youtube-description]] 참조
- [[romance-novel-formula]] (Cafe Jazz 라인)
- 타임라인 받은 후 작성
- SEO 최적화 5파트 구조

### Step 5: CapCut 편집 (수동)
- ProRes .mov 파일 CapCut에 드래그
- 배경 이미지/영상 합성
- 투명 인식 자동
- 최종 영상 출력 (MP4)

### Step 6: 업로드 (수동)
- 제목 + 설명글 + 태그 세트 적용
- YouTube Studio 다국어 설정 (선택)
- 공개 or 예약 업로드

### Step 7: 커밋 푸시 (명령어: `커밋 푸시`)
- wiki 아카이브 저장
- git add/commit/push

---

## 🚫 절대 규칙 (위반 금지)

1. **Mysig 특수 키워드 사용 금지** (VPH 16~24 냉각기)
2. **한국어 제목 키워드 금지** (일본·영어 타겟)
3. **【途中広告なし】 브랜드 접두사 금지**
4. **Track 순서 1→10 정순 생성 금지** (역순 10→01만)
5. **Core DNA 5 필수 태그 누락 금지** (특히 [Mesmerizing Melody])
6. **렌더링 out/ 폴더 사용 금지** (날짜 폴더 직접 출력)
7. **렌더링 동시 실행 5개+ 금지** (오디오 충돌, 순차 권장)
8. **`商用利用OK` / `Free for commercial use` 상업이용 허가 문구 절대 금지** (저작권 권리 포기 = 수익 보호 치명적) → [[youtube-description]] 참조

---

## 📚 워크플로우 관련 위키 링크

- [[title-direction-master]] — 제목 생성 A/B 마스터 전략
- [[lyrics-formula]] / [[lyrics-formula-noir]] — 가사 공식
- [[suno-core-dna]] — Suno Core DNA
- [[소울펑크]] / [[가스펠]] / [[네오소울]] — 장르별 공식
- [[metadata-seo]] — 메타데이터 주입 공식
- [[storage-management]] — 용량 관리 정책

---
최종 업데이트: 2026-04-24
