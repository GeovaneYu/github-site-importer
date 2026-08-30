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
        className="max-w-7xl mx-auto px-4 md:px-12 h-16 flex items-center gap-2 md:gap-4"
      >
        <a href="#top" className="shrink-0 label-mono text-foreground hover:text-accent transition-colors">
          GG<span className="text-accent">.</span>
        </a>

        <div className="flex flex-1 min-w-0 items-center justify-end gap-2 md:gap-3">
          <div className="min-w-0 flex-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <ul className="flex w-max flex-nowrap items-center gap-1 md:gap-2">
              {links.map((link) => (
                <li key={link.id} className="shrink-0">
                  <a
                    href={`#${link.id}`}
                    aria-current={active === link.id ? "true" : undefined}
                    className={cn(
                      "inline-flex whitespace-nowrap font-mono text-[10px] md:text-xs uppercase tracking-widest px-2 md:px-3 py-2 rounded-md transition-colors",
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
          </div>
          <div className="shrink-0">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}