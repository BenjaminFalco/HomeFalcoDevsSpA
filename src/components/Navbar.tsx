import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

// ✅ SIN import desde public
const falcodevsLogo = "/logoHome.png";

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

          {/* ... resto del componente igual ... */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
