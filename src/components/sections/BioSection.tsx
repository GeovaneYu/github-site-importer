import { personalInfo } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Globe2, Clock } from "lucide-react";

const highlights = [
  { icon: Clock, value: "Mais de 14", label: "anos em TI" },
  { icon: Globe2, value: "Diversos", label: "países atendidos" },
  { icon: ShieldCheck, value: "24/7", label: "sustentação crítica" },
  { icon: Users, value: "Bilíngue", label: "suporte a times globais" },
];

export default function BioSection() {
  return (
    <section id="sobre" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="label-mono mb-8 flex items-center gap-3"
      >
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        Sobre
      </motion.h2>

      {/* Terminal Window — light: warm editorial paper, dark: grafite */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="rounded-xl border overflow-hidden bg-[#FFFBF5] dark:bg-[#0F1419] border-[#F0E6DD] dark:border-white/10 shadow-[0_8px_28px_-14px_rgba(185,28,46,0.18),0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-xl"
      >
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#F0E6DD] dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm">
          <span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_1px_2px_rgba(0,0,0,0.15)]" />
          <span className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_1px_2px_rgba(0,0,0,0.15)]" />
          <span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_1px_2px_rgba(0,0,0,0.15)]" />
          <span className="ml-3 font-mono text-xs tracking-wide text-muted dark:text-white/40">geovane@portfolio: ~/sobre</span>
          <span className="ml-auto hidden md:inline font-mono text-[10px] tracking-widest text-accent/60 dark:text-white/20">— light editorial</span>
        </div>
        <div className="relative p-6 md:p-8 font-mono text-[14px] md:text-[15px] leading-[1.75] bg-[#FFFBF5] dark:bg-[#0F1419]">
          <div className="flex items-center gap-2 text-muted dark:text-white/50 mb-3">
            <span className="text-accent">$</span> cat sobre.txt
          </div>
          <p className="text-[oklch(24%_0.01_240)] dark:text-white/90">
            {personalInfo.bio}
          </p>
          <div className="mt-5 flex items-center gap-2">
            <span className="text-accent">$</span>
            <span className="w-2 h-5 bg-accent animate-pulse shadow-[0_0_8px_oklch(54%_0.18_20_/_0.4)]" aria-hidden="true" />
          </div>
        </div>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto"
      >
        {highlights.map(({ icon: Icon, value, label }) => (
          <li
            key={label}
            className="group relative flex flex-col items-center text-center rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-accent-soft/20 hover:shadow-lg hover:shadow-accent/10 cursor-default"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 ring-1 ring-accent/10 transition-all duration-300 group-hover:bg-accent group-hover:ring-accent group-hover:scale-105">
              <Icon className="h-5 w-5 text-accent transition-colors group-hover:text-accent-foreground" aria-hidden="true" />
            </div>
            <div className="mt-4 text-2xl md:text-[26px] font-bold tracking-tight text-foreground leading-none transition-colors group-hover:text-accent">
              {value}
            </div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {label}
            </div>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
