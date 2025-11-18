import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FalcoDevs
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("proceso")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
            <Button onClick={() => scrollToSection("contacto")}>
              Registrarse
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("servicios")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("proceso")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="w-full"
            >
              Registrarse
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
