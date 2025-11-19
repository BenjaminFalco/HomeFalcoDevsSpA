import { Button } from "@/components/ui/button";

const landingExpressLogo =
  "https://falcodevs.blob.core.windows.net/falcodevs-images/logoLE_transparent.png";
const digitalAgentsLogo =
  "https://falcodevs.blob.core.windows.net/falcodevs-images/logoFDA_transparent.png";

const services = [
  {
    logo: landingExpressLogo,
    title: "LandingExpress",
    description:
      "Landing pages rápidas, personalizadas y pensadas para que tu marca gane visibilidad, presencia y clientes reales sin complicaciones técnicas.",
    link: "https://landingexpressfd.vercel.app/",
  },
  {
    logo: digitalAgentsLogo,
    title: "FalcoDigitalAgents",
    description:
      "Automatización inteligente y agentes digitales que liberan tiempo, reducen tareas repetitivas y elevan la eficiencia de tu equipo.",
    link: "https://falco-digital-agent.vercel.app/",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-muted/20 via-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Servicios</p>
          <h2 className="text-4xl md:text-5xl font-semibold">Soluciones listas para impulsar tu marca</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Diseñamos productos digitales claros y efectivos para que tu negocio crezca con confianza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-8 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-strong"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
              <div className="relative flex flex-col h-full items-center text-center gap-6">
                <div className="w-full border border-border/60 rounded-xl bg-muted/40 p-6 shadow-inner">
                  <img
                    src={service.logo}
                    alt={service.title}
                    className="mx-auto h-auto w-full max-w-[220px] object-contain"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
                <Button asChild className="w-full max-w-xs">
                  <a href={service.link} target="_blank" rel="noreferrer">
                    Ver {service.title}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
