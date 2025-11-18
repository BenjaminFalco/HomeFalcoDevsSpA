import { MessageSquare, FileText, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MessageSquare,
    title: "Consulta Inicial",
    description: "Analizamos tus necesidades y objetivos",
  },
  {
    number: "2",
    icon: FileText,
    title: "Propuesta",
    description: "Diseñamos la solución perfecta para ti",
  },
  {
    number: "3",
    icon: Code2,
    title: "Desarrollo",
    description: "Construimos tu proyecto con las mejores prácticas",
  },
  {
    number: "4",
    icon: Rocket,
    title: "Entrega y Soporte",
    description: "Lanzamos y te acompañamos en el proceso",
  },
];

const Process = () => {
  return (
    <section id="proceso" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestro Proceso
          </h2>
          <p className="text-xl text-muted-foreground">
            Simplificamos el desarrollo en 4 pasos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card p-6 rounded-lg shadow-soft hover:shadow-strong transition-all duration-300 border border-border text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
