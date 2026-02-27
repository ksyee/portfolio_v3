import { motion } from "motion/react";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Code2, Server, Database, Monitor, Brain, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "프론트엔드 개발",
    description:
      "React 19, Next.js 16, TypeScript 기반의 모던 웹 앱을 구축합니다. TailwindCSS, Framer Motion으로 반응형 UI와 인터랙션을 구현합니다.",
    gradient: "from-teal-500 to-blue-500",
  },
  {
    icon: Server,
    title: "백엔드 개발",
    description:
      "Spring Boot + PostgreSQL + Redis로 RESTful API를 설계합니다. JWT 인증, RBAC 권한 관리, 스케줄러 기반 자동화를 구현합니다.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "데이터베이스 & BaaS",
    description:
      "PostgreSQL, Redis, Supabase를 활용한 데이터 설계와 실시간 기능 구현. React Query로 캐싱 전략을 최적화합니다.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Monitor,
    title: "데스크톱 앱 개발",
    description:
      "Electron + React + Vite로 크로스 플랫폼 데스크톱 앱을 개발합니다. IPC 통신과 네이티브 기능을 활용합니다.",
    gradient: "from-sky-500 to-blue-500",
  },
  {
    icon: Brain,
    title: "AI / LLM 활용",
    description:
      "whisper.cpp 음성 인식과 Ollama 로컬 LLM을 활용한 AI 기능을 구현합니다. 온디바이스 처리로 프라이버시를 보장합니다.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Users,
    title: "팀 프로젝트 리드",
    description:
      "FSD 아키텍처 설계부터 코드 리뷰까지, 프론트엔드 리드로서 팀 프로젝트를 이끈 경험이 있습니다.",
    gradient: "from-rose-500 to-pink-500",
  },
];

const stats = [
  { value: "3+", label: "년 경력", icon: "💼" },
  { value: "20+", label: "완료 프로젝트", icon: "🚀" },
  { value: "10+", label: "기술 스택", icon: "⚡" },
  { value: "99%", label: "클라이언트 만족도", icon: "❤️" },
];

export function AboutPage() {
  return (
    <section className="min-h-screen px-6 pt-32 pb-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="ABOUT ME"
          title="개발자 소개"
          description="끊임없이 배우고 성장하는 개발자입니다"
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.15 } }}
              className="text-center p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-emerald-500/20 transition-all group cursor-default"
            >
              <span className="text-2xl mb-3 block">{stat.icon}</span>
              <AnimatedCounter
                value={stat.value}
                className="block text-[2.5rem] bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-[Pretendard]"
              />
              <p className="text-muted-foreground text-[0.85rem] mt-1 font-[Pretendard]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <TiltCard className="h-full">
                <div className="p-6 bg-card border border-border h-full rounded-2xl hover:border-emerald-500/20 transition-all group">
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all`}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-foreground mb-3 font-[Pretendard]">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-[0.9rem] leading-[1.8] font-[Pretendard]">
                    {item.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
