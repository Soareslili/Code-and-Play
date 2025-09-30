import Hero from "../components/Hero";
import Header from "../components/Header";
import CategoriasSection from "@/components/CategoriasSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CategoriasSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
