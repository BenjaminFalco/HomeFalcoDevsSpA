import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Calendar } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Te responderemos pronto. ¡Gracias por contactarnos!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h2>
          <p className="text-xl text-muted-foreground">
            Cuéntanos sobre tu proyecto y te responderemos pronto
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href="mailto:falcodevsspa@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  falcodevsspa@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/56999999999"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +569 9999 9999
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Agendar una llamada</h3>
                <Button variant="outline" className="mt-2">
                  Programar reunión
                </Button>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Nombre"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Mensaje"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={6}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
