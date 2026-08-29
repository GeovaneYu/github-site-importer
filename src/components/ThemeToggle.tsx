import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        aria-label="Alternar tema"
        className="h-8 w-8 rounded-lg border border-border bg-surface flex items-center justify-center opacity-50"
      >
        <Sun className="h-4 w-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      title={isDark ? "Tema claro" : "Tema escuro"}
      className="relative h-8 w-8 md:h-9 md:w-9 rounded-lg border border-border bg-surface hover:bg-surface-hover flex items-center justify-center transition-colors duration-200 group"
    >
      <Sun
        className={`h-4 w-4 text-accent absolute transition-all duration-300 ${isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`}
      />
      <Moon
        className={`h-4 w-4 text-accent absolute transition-all duration-300 ${isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"}`}
      />
      <span className="sr-only">Alternar tema</span>
    </button>
  );
}
