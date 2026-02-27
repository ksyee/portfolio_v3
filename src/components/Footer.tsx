import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";

import { MagneticButton } from "./MagneticButton";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-[0.85rem] font-[Pretendard]">
            Designed &amp; Developed by 강선영
          </p>
          <div className="flex items-center gap-3">
            {[GitHubIcon, LinkedInIcon, Mail].map((Icon, i) => (
              <MagneticButton key={i}>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-emerald-500 hover:border-emerald-500/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              </MagneticButton>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
