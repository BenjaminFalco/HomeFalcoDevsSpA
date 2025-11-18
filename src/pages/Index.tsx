import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Process />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
