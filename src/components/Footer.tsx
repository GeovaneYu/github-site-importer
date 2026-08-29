import { personalInfo } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted text-center md:text-left">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <div className="flex items-center gap-4 font-mono text-xs">
          <a
            href={`https://${personalInfo.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-border">•</span>
          <a href="mailto:geovane.gofredo@outlook.com" className="text-muted hover:text-accent transition-colors">
            E-mail
          </a>
        </div>
      </div>
    </footer>
  );
}
