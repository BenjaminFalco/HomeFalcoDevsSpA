const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FalcoDevs
            </h3>
            <p className="text-muted-foreground mb-4">
              Desarrollamos y automatizamos tu negocio con IA y software a medida.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>falcodevsspa@gmail.com</p>
              <p>+569 9999 9999</p>
              <p>falcodevs.pro</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Landings Escalables
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Desarrollo Web
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Agentes IA
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Automatización
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2024 FalcoDevs. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
