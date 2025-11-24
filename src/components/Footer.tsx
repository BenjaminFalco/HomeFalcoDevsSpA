const falcodevsLogo =
  "/public/logoHome.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-3">
            <img src={falcodevsLogo} alt="FalcoDevs" className="h-8 w-8 object-contain" />
            <span className="text-lg font-semibold">FalcoDevs</span>
          </div>
          <p className="text-sm text-secondary-foreground/80">
            Desarrollamos y automatizamos tu negocio con IA y software a medida.
          </p>
          <p className="text-xs text-secondary-foreground/70">
            © 2024 FalcoDevs. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
