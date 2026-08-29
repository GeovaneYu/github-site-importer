import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "competencias", label: "Competências" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
];

/**
 * Fixed navigation bar with scroll-spy active state
 */
export default function NavBar() {
  const [active, setActive] = useState<string>("sobre");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-card border-b border-border/60" : "bg-transparent"
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-4"
      >
        <a href="#top" className="label-mono text-foreground hover:text-accent transition-colors">
          GG<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-2 md:gap-3">
          <ul className="flex items-center gap-1 md:gap-2">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                  className={cn(
                    "font-mono text-[11px] md:text-xs uppercase tracking-widest px-2 md:px-3 py-2 rounded-md transition-colors",
                    active === link.id
                      ? "text-accent bg-accent/10"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}