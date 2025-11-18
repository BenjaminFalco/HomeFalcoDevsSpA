import logo from "@/assets/falcodevs-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="FalcoDevs" className="h-8 w-8" />
            <span className="text-lg font-bold text-secondary-foreground">
              FalcoDevs SpA
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 FalcoDevs SpA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
