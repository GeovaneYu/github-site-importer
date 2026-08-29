import { personalInfo } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { Mail, Linkedin, Download } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function ContactSection() {
  const channels = [
    { icon: Mail, label: "E-mail", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: WhatsAppIcon, label: "WhatsApp", value: personalInfo.phone, href: personalInfo.whatsapp },
    { icon: Linkedin, label: "LinkedIn", value: `@${personalInfo.website.split("/").pop()}`, href: `https://${personalInfo.website}` },
  ];

  return (
    <section id="contato" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-2xl p-8 md:p-10"
      >
        <h2 className="label-mono mb-6">Contato</h2>
        <p className="text-[22px] md:text-[30px] font-bold tracking-tight leading-[1.15] max-w-3xl">
          Vamos manter <span className="text-accent">tudo no ar</span>?
        </p>
        <p className="mt-3 text-[15px] leading-[1.65] text-muted max-w-2xl">
          14 anos entre <span className="text-foreground font-medium">cabo e cloud</span> — Proxmox, Azure, redes e automação sem “na minha máquina funciona”. Entrego operação documentada e sem sustos. <span className="text-foreground font-medium">Aberto a CLT, PJ e projetos.</span>
        </p>

        <a
          href="/CV-Geovane-Gofredo-2026.pdf"
          download
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 font-mono text-xs uppercase tracking-widest text-accent-foreground shadow-sm hover:bg-accent/90 transition-colors"
        >
          <Download className="h-3.5 w-3.5" />
          BAIXAR CV (PDF)
        </a>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group rounded-xl border border-border bg-secondary/50 p-6 transition-colors hover:border-accent/40 hover:bg-secondary"
            >
              <Icon className="w-5 h-5 text-accent mb-3" aria-hidden="true" />
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{label}</div>
              <div className="mt-1.5 text-[14px] leading-snug break-all text-foreground group-hover:text-accent transition-colors">
                {value}
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
