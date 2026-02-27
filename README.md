# 🌐 DevPortfolio

풀스택 개발자 포트폴리오 웹사이트입니다.  
인터랙티브 애니메이션과 다크모드를 지원하는 모던 SPA로 구성되어 있습니다.

## ✨ 주요 특징

- **인터랙티브 UI** — 커서 글로우, 배경 파티클, 틸트 카드, 텍스트 리빌 등 풍부한 마이크로 인터랙션
- **다크모드** — 시스템 설정 연동 및 수동 전환 지원
- **반응형 디자인** — 모바일부터 데스크톱까지 최적화된 레이아웃
- **프로젝트 상세 페이지** — 기술 스택, 역할, 기간, 주요 성과 및 문제 해결 과정 소개
- **SPA 라우팅** — React Router 기반 부드러운 페이지 전환

## 🛠 기술 스택

| 영역          | 기술                         |
| ------------- | ---------------------------- |
| **Framework** | React 19, TypeScript         |
| **Build**     | Vite 7, React Compiler       |
| **Styling**   | TailwindCSS 4, CSS Variables |
| **Animation** | Motion (Framer Motion)       |
| **Routing**   | React Router 7               |
| **Font**      | Pretendard Variable          |
| **Icons**     | Lucide React                 |
| **UI Utils**  | clsx, tailwind-merge         |

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 컴포넌트
│   ├── Navbar.tsx           # 네비게이션 바
│   ├── Footer.tsx           # 푸터
│   ├── CursorGlow.tsx       # 커서 글로우 이펙트
│   ├── InteractiveBackground.tsx  # 파티클 배경
│   ├── TiltCard.tsx         # 3D 틸트 카드
│   ├── TextReveal.tsx       # 텍스트 리빌 애니메이션
│   ├── MagneticButton.tsx   # 마그네틱 버튼
│   ├── AnimatedCounter.tsx  # 숫자 카운트업
│   ├── SectionHeading.tsx   # 섹션 제목
│   └── ImageWithFallback.tsx # 이미지 폴백
├── pages/               # 페이지 컴포넌트
│   ├── HomePage.tsx         # 메인 랜딩
│   ├── AboutPage.tsx        # 자기소개
│   ├── SkillsPage.tsx       # 기술 스택
│   ├── ProjectsPage.tsx     # 프로젝트 목록
│   ├── ProjectDetailPage.tsx # 프로젝트 상세
│   ├── ExperiencePage.tsx   # 경력/경험
│   └── ContactPage.tsx      # 연락처
├── data/                # 데이터
│   └── projects.ts          # 프로젝트 데이터
├── styles/              # 스타일
│   ├── theme.css            # 테마 변수 & 디자인 토큰
│   ├── fonts.css            # 폰트 설정
│   └── animations.css       # 애니메이션 키프레임
└── lib/                 # 유틸리티
```
