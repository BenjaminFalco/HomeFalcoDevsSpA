import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import landingExpressLogo from "@/assets/landingexpress-logo.png";
import digitalAgentsLogo from "@/assets/falcodigitalagents-logo.jpg";

const services = [
  {
    logo: landingExpressLogo,
    title: "LandingExpress",
    description:
      "Creación rápida de landing pages personalizadas, profesionales y optimizadas para conversión. Diseños modernos que destacan tu negocio en el mundo digital.",
    link: "#landingexpress",
  },
  {
    logo: digitalAgentsLogo,
    title: "FalcoDigitalAgents",
    description:
      "Automatización inteligente y agentes digitales que optimizan procesos empresariales, mejoran la eficiencia operativa y potencian la experiencia del cliente.",
    link: "#digitalagents",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground">
            Soluciones digitales profesionales para tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-soft hover:shadow-strong transition-all duration-300 border border-border group relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Servicio Premium
                </Badge>
              </div>
              
              <div className="mb-6 mt-2">
                <img 
                  src={service.logo} 
                  alt={service.title} 
                  className="h-16 w-auto object-contain"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                Ver {service.title}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
