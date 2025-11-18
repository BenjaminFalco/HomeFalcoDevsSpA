import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-background to-secondary/20">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00c1ff08_1px,transparent_1px),linear-gradient(to_bottom,#00c1ff08_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Potenciamos y damos{" "}
            <span className="text-primary">
              presencia digital real
            </span>{" "}
            a tu empresa
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Servicios digitales accesibles y profesionales para pymes y negocios emergentes que buscan destacar en el mundo digital.
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("contacto")}
              className="text-lg px-8 py-6 h-auto"
            >
              Contáctanos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
