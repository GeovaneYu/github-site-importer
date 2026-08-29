import { personalInfo } from "@/data/portfolio-data";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Linkedin, Download, X } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function HeroSection() {
  const handle = personalInfo.website.split("/").pop();
  const [showEgg, setShowEgg] = useState(false);

  return (
    <section id="top" className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 md:pt-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-8 h-[360px] w-[560px] rounded-full bg-accent/[0.07] blur-3xl" />

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="label-mono mb-6 inline-flex items-center gap-2"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {personalInfo.title}
        <span className="hidden md:inline-flex items-center gap-2 ml-3 pl-3 border-l border-border/50 font-mono text-[10px] tracking-widest text-muted" title="Disponível para novas oportunidades">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          open to work
        </span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8"
      >
        <h1
          className="flex-1 font-mono font-bold leading-[0.9] tracking-[-0.04em] flex flex-wrap items-baseline gap-x-3"
          style={{ fontSize: "clamp(2.2rem, 7.2vw, 5.2rem)" }}
          aria-label={personalInfo.name}
        >
          <span className="text-foreground">GEOVANE</span>
          <span className="text-accent-gradient">GOFREDO</span>
          <span className="inline-block w-[0.55ch] h-[0.85em] bg-accent ml-1 animate-pulse translate-y-1" aria-hidden="true" />
          <span className="hidden md:inline font-mono text-[10px] tracking-[0.2em] text-muted ml-2 self-center">— v2026.08</span>
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="relative shrink-0 translate-y-9 md:translate-y-10"
        >
            <div className="relative w-[140px] h-[140px] md:w-[150px] md:h-[150px] lg:w-[160px] lg:h-[160px]">
            <div aria-hidden="true" className="absolute -inset-2 rounded-full border border-accent/12" />
            <div className="relative w-full h-full overflow-hidden rounded-full border-[3px] border-accent/30 bg-surface shadow-lg">
              <picture>
                <source srcSet="/img/geovane.webp" type="image/webp" />
                <img
                  src="/img/geovane.jpg"
                  alt="Retrato de Geovane Gofredo"
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.18 }}
        className="mt-3 font-mono text-xs md:text-sm leading-relaxed text-muted w-full"
      >
        <span className="text-accent">▸</span>{" "}
        <button onClick={() => setShowEgg(true)} className="hover:text-accent transition-colors cursor-pointer" title="clique 👀">
          Rapaz do Computador
        </button>{" "}
        • Na minha máquina funciona • Já abriu o chamado? • CTRL+ALT+DEL
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.28 }}
        className="mt-8 flex flex-wrap items-center gap-3"
      >
        <a
          href="/CV-Geovane-Gofredo-2026.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-accent-foreground hover:bg-accent/90 transition-colors"
        >
          <Download className="h-3.5 w-3.5" />
          BAIXAR CV (PDF)
        </a>
        <a
          href={personalInfo.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-muted hover:text-foreground hover:border-accent/30 hover:bg-surface-hover transition-colors"
        >
          <WhatsAppIcon className="h-3.5 w-3.5 text-accent" />
          Falar no WhatsApp
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-8 flex flex-nowrap items-center justify-between gap-4 border-t border-border/50 pt-5 font-mono text-xs overflow-x-auto"
      >
        <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-muted hover:text-accent transition-colors truncate">
          <Mail className="h-3.5 w-3.5 shrink-0 text-accent" />
          {personalInfo.email}
        </a>
        <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-accent transition-colors">
          <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 text-accent" />
          {personalInfo.phone}
        </a>
        <a href="https://www.google.com/maps/search/S%C3%A3o+Paulo,+SP" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-accent transition-colors">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" />
          {personalInfo.location.city}
        </a>
        <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-accent transition-colors truncate">
          <Linkedin className="h-3.5 w-3.5 shrink-0 text-accent" />
          @{handle}
        </a>
      </motion.div>

      <AnimatePresence>
        {showEgg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setShowEgg(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative max-w-[420px] w-full glass-card-elevated rounded-2xl p-6 border border-accent/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowEgg(false)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-surface hover:bg-surface-hover text-muted hover:text-foreground transition-colors"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
              <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">easter egg — suporte_</p>
              <img src="/img/meme-menino-suporte.jpg" alt="Meme: Menino do computador é o C@#%*! Eu sou profissional de TI — SUPORTE" className="w-full rounded-xl border border-border" loading="lazy" />
              <p className="mt-3 font-mono text-xs text-muted text-center">Clique em “Rapaz do Computador” na tagline 😉</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
