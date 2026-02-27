import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/SectionHeading";
import { MagneticButton } from "@/components/MagneticButton";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { toast, Toaster } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "이메일",
    value: "hello@devportfolio.com",
    href: "mailto:hello@devportfolio.com",
  },
  {
    icon: Phone,
    label: "전화",
    value: "010-1234-5678",
    href: "tel:01012345678",
  },
  {
    icon: MapPin,
    label: "위치",
    value: "서울특별시, 대한민국",
    href: "#",
  },
];

const socials = [
  { icon: GitHubIcon, label: "GitHub", value: "github.com/devkimdev", href: "#" },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/devkimdev",
    href: "#",
  },
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success("메시지가 성공적으로 전송되었습니다!");
    setTimeout(() => {
      setSent(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 rounded-xl bg-background border text-foreground text-[0.9rem] transition-all font-[Pretendard] placeholder:text-muted-foreground/40 focus:outline-none ${
      focusedField === field
        ? "border-emerald-500 shadow-[0_0_0_3px_rgba(139,92,246,0.1)]"
        : "border-border hover:border-border/80"
    }`;

  return (
    <section className="min-h-screen px-6 pt-32 pb-20">
      <Toaster position="top-center" />
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="CONTACT"
          title="연락하기"
          description="프로젝트 제안이나 협업 요청을 환영합니다"
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="p-6 rounded-2xl bg-card border border-border space-y-5">
              <h3 className="text-foreground font-[Pretendard] mb-1">
                연락처 정보
              </h3>
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center shrink-0 group-hover:from-emerald-500/20 group-hover:to-teal-500/20 transition-all">
                    <item.icon className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-[0.8rem] font-[Pretendard]">
                      {item.label}
                    </p>
                    <p className="text-foreground text-[0.9rem] font-[Pretendard] group-hover:text-emerald-500 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
              <h3 className="text-foreground font-[Pretendard] mb-1">
                소셜 링크
              </h3>
              {socials.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-emerald-500/10 transition-colors">
                      <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-emerald-500 transition-colors" />
                    </div>
                    <p className="text-muted-foreground text-[0.9rem] group-hover:text-foreground transition-colors font-[Pretendard]">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/0 group-hover:text-emerald-500 transition-all" />
                </motion.a>
              ))}
            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl bg-linear-to-br from-emerald-500/5 to-teal-500/5 border border-emerald-500/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-foreground text-[0.85rem] font-[Pretendard]">
                  현재 가능 상태
                </span>
              </div>
              <p className="text-muted-foreground text-[0.85rem] font-[Pretendard] leading-relaxed">
                프리랜서 프로젝트 및 정규직 포지션 모두 열려있습니다.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-2xl bg-card border border-border space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-foreground text-[0.85rem] mb-2.5 block font-[Pretendard]">
                    이름
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className={inputClass("name")}
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="text-foreground text-[0.85rem] mb-2.5 block font-[Pretendard]">
                    이메일
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className={inputClass("email")}
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-foreground text-[0.85rem] mb-2.5 block font-[Pretendard]">
                  제목
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  className={inputClass("subject")}
                  placeholder="프로젝트 협업 제안"
                />
              </div>
              <div>
                <label className="text-foreground text-[0.85rem] mb-2.5 block font-[Pretendard]">
                  메시지
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputClass("message")} resize-none`}
                  placeholder="프로젝트에 대해 자유롭게 설명해 주세요..."
                />
              </div>

              <MagneticButton className="w-full">
                <button
                  type="submit"
                  disabled={sent}
                  className={`w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-[0.95rem] transition-all font-[Pretendard] ${
                    sent
                      ? "bg-green-500 text-white"
                      : "bg-linear-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg hover:shadow-emerald-500/25"
                  }`}
                >
                  {sent ? (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring" }}
                      >
                        <CheckCircle2 className="w-5 h-5" />
                      </motion.div>
                      전송 완료!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      메시지 보내기
                    </>
                  )}
                </button>
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
