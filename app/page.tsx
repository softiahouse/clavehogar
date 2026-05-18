import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuienesSomos from "./components/QuienesSomos";
import Servicios from "./components/Servicios";
import Paquetes from "./components/Paquetes";
import Testimonios from "./components/Testimonios";
import PorQueElegirnos from "./components/PorQueElegirnos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuienesSomos />
        <Servicios />
        <Paquetes />
        <Testimonios />
        <PorQueElegirnos />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
