import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Desarrollamos y automatizamos{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              tu negocio con IA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Consultoría especializada en software, IA, automatización e integraciones para empresas que buscan resultados.
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span>Profesionales certificados en AWS para despliegues seguros en la nube</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("contacto")}
              className="group"
            >
              Agendar una llamada
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("servicios")}
            >
              Ver servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
