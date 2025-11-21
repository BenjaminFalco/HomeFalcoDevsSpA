import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (ids: string | string[]) => {
    const targetIds = Array.isArray(ids) ? ids : [ids];
    const element = targetIds
      .map((id) => document.getElementById(id))
      .find(Boolean);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-gradient-to-b from-background via-background to-muted/20">
      {/* Fondos y grillas */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,193,255,0.08),transparent_25%),radial-gradient(circle_at_80%_0,rgba(0,193,255,0.06),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(0,0,0,0.06),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Título idéntico al de la imagen */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight">
            Desarrollamos tu negocio con{" "}
            <span className="text-primary">IA</span> y{" "}
            <span className="block text-primary">software a medida</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Consultoría especializada en software, IA, automatización e
            integraciones para empresas que buscan resultados.
          </p>

          {/* Badge AWS */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-soft mx-auto">
            Profesionales certificados en AWS para despliegues seguros en la nube
          </div>

          {/* Botones iguales a la imagen */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection(["contacto", "contact"])}
              className="text-lg px-8 py-6 h-auto shadow-strong"
            >
              Agendar una llamada
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection(["servicios", "services"])}
              className="text-lg px-8 py-6 h-auto border-primary/40"
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
