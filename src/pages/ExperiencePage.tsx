import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Briefcase, GraduationCap, Award } from "lucide-react";

interface TimelineItem {
  type: "work" | "education" | "award";
  title: string;
  organization: string;
  period: string;
  description: string;
  tags?: string[];
}

const timeline: TimelineItem[] = [
  {
    type: "work",
    title: "시니어 프론트엔드 개발자",
    organization: "테크스타트 주식회사",
    period: "2025.01 — 현재",
    description:
      "대규모 SaaS 플랫폼의 프론트엔드 아키텍처 설계 및 개발. 디자인 시스템 구축과 성능 최적화를 주도하여 LCP 40% 개선.",
    tags: ["React", "Next.js", "TypeScript", "Design System"],
  },
  {
    type: "work",
    title: "풀스택 개발자",
    organization: "디지털웨이브",
    period: "2023.06 — 2024.12",
    description:
      "이커머스 플랫폼과 기업용 관리 시스템 개발. Node.js 백엔드 API 설계 및 React 프론트엔드 구현. 결제 시스템 통합.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    type: "work",
    title: "주니어 웹 개발자",
    organization: "코드랩 스튜디오",
    period: "2022.03 — 2023.05",
    description:
      "다양한 클라이언트 프로젝트의 웹 애플리케이션 개발. 반응형 웹 디자인과 RESTful API 개발을 담당.",
    tags: ["React", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    type: "award",
    title: "해커톤 최우수상",
    organization: "2024 Dev Conference",
    period: "2024.09",
    description:
      "AI 기반 코드 리뷰 도구를 개발하여 최우수상 수상. 48시간 동안 팀 리더로서 프로젝트를 총괄.",
  },
  {
    type: "education",
    title: "컴퓨터공학 학사",
    organization: "서울대학교",
    period: "2018.03 — 2022.02",
    description:
      "소프트웨어 공학, 데이터베이스, 알고리즘 등을 학습. 졸업 프로젝트로 실시간 협업 문서 에디터를 개발.",
  },
];

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  award: Award,
};

const colorMap = {
  work: "from-emerald-500 to-blue-500",
  education: "from-teal-500 to-green-500",
  award: "from-amber-500 to-orange-500",
};

const labelMap = {
  work: "경력",
  education: "학력",
  award: "수상",
};

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);

  const Icon = iconMap[item.type];
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className={`relative flex items-start mb-8 md:mb-12 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Icon circle */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
        className="absolute left-6 md:left-1/2 w-12 h-12 -translate-x-1/2 rounded-full bg-card border-2 border-border flex items-center justify-center z-10"
      >
        <div
          className={`w-8 h-8 rounded-full bg-linear-to-br ${colorMap[item.type]} flex items-center justify-center shadow-lg`}
        >
          <Icon className="w-4 h-4 text-white" />
        </div>
      </motion.div>

      {/* Content card */}
      <div
        className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${
          isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
        }`}
      >
        <motion.div
          whileHover={{ y: -3 }}
          className="p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/20 transition-all group"
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`inline-block px-2.5 py-0.5 rounded-md bg-linear-to-r ${colorMap[item.type]} text-white text-[0.65rem] font-[Pretendard]`}
            >
              {labelMap[item.type]}
            </span>
            <span className="text-[0.75rem] text-muted-foreground font-mono">
              {item.period}
            </span>
          </div>
          <h3 className="text-foreground font-[Pretendard] mb-1">
            {item.title}
          </h3>
          <p className="text-emerald-500/80 text-[0.85rem] mb-3 font-[Pretendard]">
            {item.organization}
          </p>
          <p className="text-muted-foreground text-[0.875rem] leading-[1.8] font-[Pretendard]">
            {item.description}
          </p>
          {item.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-accent/60 text-muted-foreground text-[0.7rem] font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ExperiencePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="min-h-screen px-6 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          badge="EXPERIENCE"
          title="경력 & 학력"
          description="개발자로서의 성장 과정을 소개합니다"
        />

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Static background line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border/40 md:-translate-x-px" />
          {/* Animated progress line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 w-px bg-linear-to-b from-emerald-500 to-teal-500 md:-translate-x-px origin-top"
            style={{ height: lineHeight }}
          />

          {timeline.map((item, i) => (
            <TimelineCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
