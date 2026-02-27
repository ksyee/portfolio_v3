import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "@/components/SectionHeading";
import { Code2, Server, Database, Cloud, Wrench } from "lucide-react";

type SkillCategory = "frontend" | "backend" | "database" | "devops" | "tools";

interface Skill {
  name: string;
  level: number;
  color: string;
  icon: string;
}

const categories: { key: SkillCategory; label: string; icon: typeof Code2 }[] = [
  { key: "frontend", label: "Frontend", icon: Code2 },
  { key: "backend", label: "Backend", icon: Server },
  { key: "database", label: "Database", icon: Database },
  { key: "devops", label: "DevOps", icon: Cloud },
  { key: "tools", label: "Tools", icon: Wrench },
];

const skills: Record<SkillCategory, Skill[]> = {
  frontend: [
    { name: "React", level: 95, color: "from-teal-400 to-teal-600", icon: "⚛️" },
    { name: "Next.js", level: 90, color: "from-neutral-400 to-neutral-600", icon: "▲" },
    { name: "TypeScript", level: 92, color: "from-blue-400 to-blue-600", icon: "📘" },
    { name: "Tailwind CSS", level: 93, color: "from-teal-400 to-teal-500", icon: "🎨" },
    { name: "Vue.js", level: 75, color: "from-green-400 to-emerald-600", icon: "💚" },
    { name: "HTML/CSS", level: 97, color: "from-orange-400 to-red-500", icon: "🌐" },
  ],
  backend: [
    { name: "Node.js", level: 90, color: "from-green-400 to-green-600", icon: "🟢" },
    { name: "Express", level: 88, color: "from-neutral-400 to-neutral-600", icon: "🚂" },
    { name: "NestJS", level: 82, color: "from-red-400 to-pink-500", icon: "🐱" },
    { name: "Python", level: 78, color: "from-yellow-400 to-blue-500", icon: "🐍" },
    { name: "GraphQL", level: 80, color: "from-pink-400 to-emerald-500", icon: "◈" },
    { name: "REST API", level: 93, color: "from-indigo-400 to-blue-500", icon: "🔗" },
  ],
  database: [
    { name: "PostgreSQL", level: 88, color: "from-blue-500 to-blue-700", icon: "🐘" },
    { name: "MongoDB", level: 85, color: "from-green-500 to-green-700", icon: "🍃" },
    { name: "Redis", level: 78, color: "from-red-400 to-red-600", icon: "🔴" },
    { name: "Prisma ORM", level: 87, color: "from-emerald-400 to-indigo-600", icon: "💎" },
    { name: "MySQL", level: 80, color: "from-blue-400 to-blue-600", icon: "🐬" },
  ],
  devops: [
    { name: "Docker", level: 82, color: "from-blue-400 to-teal-500", icon: "🐳" },
    { name: "AWS", level: 75, color: "from-amber-400 to-orange-500", icon: "☁️" },
    { name: "CI/CD", level: 80, color: "from-green-400 to-emerald-500", icon: "🔄" },
    { name: "Nginx", level: 72, color: "from-green-500 to-green-700", icon: "🌿" },
    { name: "Vercel", level: 90, color: "from-neutral-400 to-neutral-600", icon: "▲" },
  ],
  tools: [
    { name: "Git", level: 93, color: "from-orange-400 to-red-500", icon: "📦" },
    { name: "Figma", level: 80, color: "from-rose-400 to-red-500", icon: "🎨" },
    { name: "VS Code", level: 95, color: "from-blue-400 to-blue-600", icon: "💻" },
    { name: "Jira", level: 78, color: "from-blue-500 to-blue-700", icon: "📋" },
    { name: "Postman", level: 85, color: "from-orange-400 to-orange-600", icon: "📮" },
  ],
};

export function SkillsPage() {
  const [active, setActive] = useState<SkillCategory>("frontend");

  return (
    <section className="min-h-screen px-6 pt-32 pb-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="SKILLS"
          title="기술 스택"
          description="풀스택 개발에 필요한 다양한 기술을 보유하고 있습니다"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`relative px-5 py-2.5 rounded-xl text-[0.875rem] transition-all font-[Pretendard] flex items-center gap-2 ${
                  active === cat.key
                    ? "text-white shadow-lg shadow-emerald-500/20"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
                }`}
              >
                {active === cat.key && (
                  <motion.div
                    layoutId="skill-tab-bg"
                    className="absolute inset-0 bg-linear-to-r from-emerald-600 to-teal-600 rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Skill Bars */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {skills[active].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ x: 4 }}
                className="group p-4 rounded-xl bg-card/50 border border-transparent hover:border-border hover:bg-card transition-all cursor-default"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-3">
                    <span className="text-[1.1rem]">{skill.icon}</span>
                    <span className="text-foreground text-[0.9rem] font-[Pretendard]">
                      {skill.name}
                    </span>
                  </div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.07 }}
                    className="text-muted-foreground text-[0.8rem] font-mono tabular-nums"
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="h-2 rounded-full bg-accent/40 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1,
                      delay: i * 0.07,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                    className={`h-full rounded-full bg-linear-to-r ${skill.color} relative`}
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <p className="text-muted-foreground text-[0.85rem] mb-8 font-[Pretendard]">
            그 외 경험한 기술들
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {[
              "Redux", "Zustand", "React Query", "Storybook",
              "Jest", "Cypress", "Webpack", "Vite",
              "Socket.io", "Stripe", "Firebase", "Supabase",
              "Sass", "Styled Components", "Motion", "Three.js",
              "D3.js", "Elasticsearch",
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{
                  scale: 1.1,
                  y: -3,
                  borderColor: "rgba(16,185,129,0.4)",
                }}
                className="px-4 py-2 rounded-lg bg-card border border-border text-muted-foreground text-[0.8rem] hover:text-foreground transition-colors cursor-default font-mono"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
