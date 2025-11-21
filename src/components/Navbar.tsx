import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

// ⬇️ Usa UNO de estos según tu estructura:

// Opción 1: si el logo está en public/logoHome.png
// const falcodevsLogo = "/logoHome.png";

// Opción 2: si el logo está en src/assets/logoHome.png
import falcodevsLogo from "@/assets/logoHome.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* BRAND FALCODEVS */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            <img
              src={falcodevsLogo}
              alt="FalcoDevs"
              className="h-9 w-9 md:h-10 md:w-10 object-contain drop-shadow-[0_0_12px_rgba(0,200,255,0.55)]"
            />
            <span className="text-xl md:text-2xl font-semibold tracking-tight">
              <span className="text-foreground">Falco</span>
              <span className="text-primary">Devs</span>
            </span>
          </button>

          {/* NAV DESKTOP */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative text-foreground transition-colors hover:text-primary"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="relative text-foreground transition-colors hover:text-primary"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="relative text-foreground transition-colors hover:text-primary"
            >
              Contacto
            </button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Cambiar tema"
              onClick={toggleTheme}
              className="rounded-full border border-border/60 bg-card hover:border-primary/50"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* NAV MÓVIL */}
          <div className="flex items-center gap-3 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Cambiar tema"
              onClick={toggleTheme}
              className="rounded-full border border-border/60 bg-card hover:border-primary/50"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground transition-colors hover:text-primary"
              aria-label="Abrir menú"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-in slide-in-from-top-2">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsOpen(false);
              }}
              className="block w-full text-left rounded-lg border border-border bg-card px-4 py-3 text-foreground shadow-soft hover:border-primary/50 hover:shadow-strong"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="block w-full text-left rounded-lg border border-border bg-card px-4 py-3 text-foreground shadow-soft hover:border-primary/50 hover:shadow-strong"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="block w-full text-left rounded-lg border border-border bg-card px-4 py-3 text-foreground shadow-soft hover:border-primary/50 hover:shadow-strong"
            >
              Contacto
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
