import { personalInfo } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Globe2, Clock } from "lucide-react";

const highlights = [
  { icon: Clock, value: "14+", label: "anos em TI" },
  { icon: Globe2, value: "3", label: "países atendidos" },
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

      {/* Terminal Window */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="rounded-xl border border-border overflow-hidden bg-[#0F1419] shadow-xl"
      >
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-3 font-mono text-xs text-white/40">geovane@portfolio: ~/sobre</span>
        </div>
        <div className="p-6 md:p-8 font-mono text-[14px] md:text-[15px] leading-[1.7]">
          <div className="flex items-center gap-2 text-white/50 mb-3">
            <span className="text-accent">$</span> cat sobre.txt
          </div>
          <p className="text-white/90">
            {personalInfo.bio}
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-accent">$</span>
            <span className="w-2 h-5 bg-accent animate-pulse" aria-hidden="true" />
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
            className="group glass-card rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-accent/30 hover:bg-surface-hover hover:shadow-lg hover:-translate-y-1 cursor-default"
          >
            <Icon className="w-5 h-5 text-accent mb-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
            <div className="text-xl md:text-2xl font-bold tracking-tight text-foreground leading-none">
              {value}
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mt-2">
              {label}
            </div>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
