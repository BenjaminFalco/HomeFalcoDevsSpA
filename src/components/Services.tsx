import { Rocket, Code, Bot, Workflow } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Landings Escalables",
    description:
      "Creamos landing pages que pueden evolucionar hacia soluciones completas con bases de datos, integraciones y lógica personalizada.",
    features: [
      "Base de datos integrada",
      "Integraciones con APIs externas",
      "Lógica de negocio personalizada",
    ],
  },
  {
    icon: Code,
    title: "Desarrollo Web Completo",
    description:
      "Soluciones web a medida con las últimas tecnologías para impulsar tu negocio.",
    features: [],
  },
  {
    icon: Bot,
    title: "Agentes IA",
    description:
      "Implementamos agentes inteligentes que automatizan tareas y mejoran la experiencia del cliente.",
    features: [],
  },
  {
    icon: Workflow,
    title: "Automatización e Integraciones",
    description:
      "Consultoría en automatización de procesos e integraciones con WhatsApp, CRMs y más.",
    features: [],
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground">
            Soluciones tecnológicas que impulsan tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-soft hover:shadow-strong transition-all duration-300 border border-border group"
            >
              <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              {service.features.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">
                    Capacidades de evolución:
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
