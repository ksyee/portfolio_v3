export type ProjectCategory = "all" | "fullstack" | "frontend" | "desktop";

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  screenshots: string[];
  tags: string[];
  category: ProjectCategory[];
  github: string;
  demo: string;
  featured: boolean;
  role: string;
  duration: string;
  team: string;
  highlights: string[];
  challenges: { problem: string; solution: string }[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "apiguard",
    title: "APIGuard",
    description:
      "API 서비스 헬스체크 & 모니터링 SaaS 플랫폼. 워크스페이스 기반 멀티 프로젝트 관리, RBAC 권한 제어, 토스페이먼츠 결제 통합까지 엔드투엔드로 구현했습니다.",
    longDescription:
      "배포 후 API가 언제 깨졌는지 모르는 운영 리스크를 해결하기 위해 설계한 풀스택 SaaS 플랫폼입니다. 프론트엔드는 Next.js 16(App Router + React Compiler)으로, 백엔드는 Spring Boot + PostgreSQL + Redis로 구축했습니다. 워크스페이스 단위의 데이터 격리와 Owner > Admin > Member > Viewer 역할 계층 기반 RBAC, 스케줄러 기반 주기적 헬스체크, 연속 실패 임계치 기반 알림(이메일/Slack/Webhook), 토스페이먼츠 연동 결제, 한/영 다국어 지원까지 포함합니다.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    screenshots: [],
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "TailwindCSS 4",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "JWT",
    ],
    category: ["fullstack"],
    github: "https://github.com/ksyee/apiguard-frontend",
    demo: "",
    featured: true,
    role: "Full-Stack Developer",
    duration: "2025.01 - 현재",
    team: "2명 (프론트엔드 겸 기획 1, 백엔드 1)",
    highlights: [
      "Next.js 16 App Router + React Compiler + Turbopack 기반 프론트엔드 구축",
      "Spring Boot + PostgreSQL + Redis로 안정적인 백엔드 아키텍처 설계",
      "RBAC(Owner > Admin > Member > Viewer) 기반 워크스페이스별 권한 관리",
      "스케줄러 기반 엔드포인트 헬스체크 및 Recharts 통계 시각화",
      "연속 실패 임계치 + Redis 쿨다운 기반 중복 알림 방지 시스템",
      "토스페이먼츠 연동 Free/Pro 결제 플랜 구현",
      "next-intl 한/영 다국어 및 next-themes 다크모드 지원",
    ],
    challenges: [
      {
        problem:
          "알림 폭주 문제 — 엔드포인트가 일시적 장애를 겪을 때 매 체크마다 알림이 발송되어 사용자 피로도가 급증했습니다.",
        solution:
          "연속 실패 횟수 기반 임계치 알림 트리거와 Redis TTL 키 기반 쿨다운 메커니즘을 도입했습니다. 단일 실패가 아닌 N회 연속 실패 시에만 알림을 보내고, 동일 엔드포인트에 대해 일정 시간 내 중복 발송을 억제하여 알림 신호 품질을 크게 개선했습니다.",
      },
      {
        problem:
          "플랜별 기능 제한 관리 복잡도 — Free/Pro 플랜에 따라 엔드포인트 수, 점검 주기, 멤버 수 등 여러 제약사항이 코드 전반에 흩어져 관리가 어려웠습니다.",
        solution:
          "PlanLimitPolicy 정책 객체로 플랜 제한을 중앙 집중 관리하여, 새로운 제약사항 추가 시 변경 범위를 최소화했습니다. 프론트엔드에서도 permissions.ts 유틸리티와 RequireRole 컴포넌트 가드로 권한 체크를 일원화했습니다.",
      },
    ],
  },
  {
    id: 2,
    slug: "find-it",
    title: "찾아줘! (Find It)",
    description:
      "전국 분실물/유실물 통합 검색 플랫폼. 공공 API 연동, 키워드 알림, 커뮤니티 기능을 포함한 팀 프로젝트에서 프론트엔드 리드를 담당했습니다.",
    longDescription:
      "매년 600만 건 이상 발생하는 유실물을 효과적으로 찾을 수 있도록 설계한 통합 플랫폼입니다. 전국 각 기관에 흩어진 분실물 데이터를 한 곳에서 검색하고, 키워드 알림으로 놓치지 않으며, 커뮤니티를 통해 함께 찾는 서비스입니다. 프론트엔드 리드로서 공공 데이터 표준화 파이프라인, React Query 캐싱 전략, 스크롤 위치 복원 등 핵심 기능을 설계하고 구현했습니다.",
    image:
      "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=800&auto=format&fit=crop&q=60",
    screenshots: [],
    tags: [
      "React",
      "TypeScript",
      "React Query",
      "Supabase",
      "Kakao Map API",
    ],
    category: ["frontend"],
    github: "https://github.com/ksyee/find-it",
    demo: "",
    featured: true,
    role: "Frontend Lead",
    duration: "2024.10 - 2024.12",
    team: "4명 (프론트엔드 2, 백엔드 1, 디자이너 1)",
    highlights: [
      "Feature-Sliced Design(FSD) 아키텍처 적용으로 확장 가능한 프로젝트 구조 설계",
      "공공 데이터 API 표준화 파이프라인 구축 — 서로 다른 형식의 데이터를 통합",
      "React Query 캐싱 전략으로 API 호출 최적화 및 사용자 경험 개선",
      "무한 스크롤 + 스크롤 위치 복원으로 끊김 없는 탐색 경험 구현",
      "Supabase 기반 실시간 키워드 알림 시스템 (최대 10개 키워드)",
      "Kakao 지도 API 연동으로 보관 장소 시각화",
      "웹 접근성(a11y) 준수 및 로딩 상태 UX 최적화",
    ],
    challenges: [
      {
        problem:
          "공공 데이터 형식 불일치 — 각 기관마다 API 응답 형식, 필드명, 날짜 포맷이 달라 통합 검색이 어려웠습니다.",
        solution:
          "공공 데이터 표준화 파이프라인을 구축하여 각 기관별 어댑터를 만들고, 공통 인터페이스로 변환하는 레이어를 추가했습니다. 이를 통해 새로운 데이터 소스 추가 시에도 어댑터만 작성하면 되는 확장 가능한 구조를 만들었습니다.",
      },
      {
        problem:
          "HTTPS Mixed Content 문제 — 공공 API가 HTTP만 지원하여 HTTPS 사이트에서 요청이 차단되었습니다.",
        solution:
          "프록시 서버를 통해 HTTP 요청을 중계하고, 클라이언트에서는 HTTPS로만 통신하도록 아키텍처를 구성하여 보안 정책을 준수하면서도 공공 API를 활용할 수 있게 했습니다.",
      },
    ],
  },
  {
    id: 3,
    slug: "scriba",
    title: "Scriba",
    description:
      "AI 회의록 자동 생성 데스크톱 앱. 실시간 음성 녹음 → 자동 텍스트 변환 → AI 회의록 생성까지, 모든 처리가 로컬에서 이루어집니다.",
    longDescription:
      "회의 중 메모에 집중하느라 논의를 놓치는 문제를 해결하기 위해 만든 데스크톱 애플리케이션입니다. 실시간으로 음성을 녹음하고, whisper.cpp로 텍스트를 변환한 뒤, Ollama 로컬 LLM으로 회의록을 자동 생성합니다. 인터넷 연결 없이 모든 처리가 로컬에서 이루어져 개인정보 걱정 없이 사용할 수 있습니다.",
    image:
      "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=800&auto=format&fit=crop&q=60",
    screenshots: [],
    tags: [
      "Electron",
      "React",
      "Vite",
      "TailwindCSS 4",
      "whisper.cpp",
      "Ollama",
    ],
    category: ["desktop"],
    github: "https://github.com/ksyee/Scriba",
    demo: "",
    featured: true,
    role: "Solo Developer",
    duration: "2025.01 - 2025.02",
    team: "1명 (개인 프로젝트)",
    highlights: [
      "Electron + electron-vite 기반 크로스 플랫폼 데스크톱 앱 구축",
      "Web Audio API → PCM 16-bit mono 16kHz 실시간 오디오 변환 파이프라인",
      "whisper.cpp(@fugood/whisper.node)로 오프라인 음성 인식 구현",
      "Ollama REST API 스트리밍으로 로컬 LLM 기반 회의록 자동 생성",
      "contextBridge + IPC를 활용한 안전한 Renderer-Main 프로세스 통신",
      "완전 오프라인 처리로 프라이버시 보장",
    ],
    challenges: [
      {
        problem:
          "실시간 오디오 처리 성능 — 브라우저의 Web Audio API로 캡처한 오디오를 whisper.cpp가 요구하는 PCM 16-bit mono 16kHz 형식으로 실시간 변환하는 과정에서 지연이 발생했습니다.",
        solution:
          "오디오 처리를 Main Process로 위임하고, IPC 채널을 통해 청크 단위로 전송하는 파이프라인을 구축했습니다. 버퍼링과 배치 처리를 적용하여 CPU 부하를 분산시키고, 변환 지연을 최소화했습니다.",
      },
      {
        problem:
          "LLM 응답 스트리밍 UX — Ollama API의 응답이 한꺼번에 오지 않고 토큰 단위로 스트리밍되어, 사용자에게 자연스러운 타이핑 효과를 제공해야 했습니다.",
        solution:
          "Ollama REST API의 스트리밍 응답을 ReadableStream으로 처리하고, IPC를 통해 Renderer에 실시간으로 전달하여 ChatGPT와 유사한 타이핑 효과를 구현했습니다.",
      },
    ],
  },
  {
    id: 4,
    slug: "k-type",
    title: "K-TYPE",
    description:
      "타이핑에만 집중할 수 있는 미니멀한 환경의 한글 타이핑 연습 웹 애플리케이션. 실시간 속도(CPM) 및 정확도 분석을 제공합니다.",
    longDescription:
      "커스텀 키보드 제작 후 타건 연습과 한글 타이핑 실력 향상을 위해 개발한 웹 애플리케이션입니다. 불필요한 요소를 배제한 미니멀한 인터페이스로 타이핑에만 집중할 수 있으며, 실시간으로 입력 속도(CPM)와 정확도를 분석합니다. Supabase를 통해 다양한 한글 문장을 관리하고 제공합니다.",
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=60",
    screenshots: [],
    tags: ["React", "TypeScript", "Supabase", "Vite"],
    category: ["frontend"],
    github: "https://github.com/ksyee/k-type",
    demo: "",
    featured: false,
    role: "Solo Developer",
    duration: "2024.11 - 2024.12",
    team: "1명 (개인 프로젝트)",
    highlights: [
      "실시간 타이핑 분석 엔진 — CPM, 정확도 등 즉각적 피드백 제공",
      "한글 자모 분리/조합 기반 정확한 타이핑 검증 로직 구현",
      "Supabase를 활용한 문장 데이터 관리 및 랜덤 제공",
      "미니멀한 UI/UX 설계 — 타이핑에만 집중할 수 있는 직관적 인터페이스",
      "시각적 피드백 — 타이핑 오류 시 즉각적인 시각적 알림",
    ],
    challenges: [
      {
        problem:
          "한글 조합 상태 처리 — 한글은 자모가 조합 중인 상태와 완성된 상태가 있어, 영문과 달리 키 입력과 글자 완성 시점이 다릅니다. 이로 인해 타이핑 정확도 판정이 부정확했습니다.",
        solution:
          "CompositionEvent(compositionstart, compositionupdate, compositionend)를 활용하여 한글 조합 상태를 정확하게 추적했습니다. 조합 완료 시점에만 정확도를 판정하고, 조합 중에는 시각적 피드백만 제공하는 2단계 처리 방식을 적용했습니다.",
      },
    ],
  },
  {
    id: 5,
    slug: "id-card-generator",
    title: "ID Card Generator",
    description:
      "대량 ID 카드를 손쉽게 생성하는 데스크톱 앱. 엑셀 업로드, 실시간 미리보기, QR 코드 자동 생성, PDF/이미지 내보내기를 지원합니다.",
    longDescription:
      "수작업으로 ID 카드를 제작하는 비효율을 해결하기 위해 만든 데스크톱 애플리케이션입니다. 엑셀(XLSX) 파일을 업로드하면 여러 명의 ID 카드를 한 번에 생성하고, 실시간 미리보기로 디자인을 확인하며, QR 코드를 자동으로 포함시킬 수 있습니다. 생성된 카드를 이미지 또는 PDF로 내보낼 수 있어 실무에서 즉시 활용 가능합니다.",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format&fit=crop&q=60",
    screenshots: [],
    tags: [
      "React",
      "TypeScript",
      "Electron",
      "Vite",
      "TailwindCSS",
      "shadcn/ui",
    ],
    category: ["desktop"],
    github: "https://github.com/ksyee/id-card-generator",
    demo: "",
    featured: false,
    role: "Solo Developer",
    duration: "2024.12 - 2025.01",
    team: "1명 (개인 프로젝트)",
    highlights: [
      "엑셀(XLSX) 대량 업로드 → 자동 ID 카드 일괄 생성",
      "실시간 디자인 미리보기 및 수정 기능",
      "qrcode.react로 QR 코드 자동 생성 및 카드 삽입",
      "html2canvas-pro + jsPDF로 고품질 이미지/PDF 내보내기",
      "Electron 기반 크로스 플랫폼 데스크톱 앱 배포",
      "shadcn/ui + Radix UI로 일관된 접근성 확보 UI 구현",
    ],
    challenges: [
      {
        problem:
          "대량 카드 렌더링 성능 — 100장 이상의 ID 카드를 동시에 렌더링하면 HTML2Canvas 캡처 시 메모리 사용량이 급증하고 브라우저가 멈추는 현상이 발생했습니다.",
        solution:
          "배치 처리 방식을 도입하여 한 번에 10장씩 순차적으로 캡처하고, 완료된 데이터는 즉시 메모리에서 해제했습니다. 또한 html2canvas-pro의 scale 옵션을 최적화하여 충분한 인쇄 품질을 유지하면서도 메모리 사용량을 크게 줄였습니다.",
      },
    ],
  },
];
