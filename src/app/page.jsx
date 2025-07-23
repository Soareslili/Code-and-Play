import Hero from "../components/Hero";
import Header from "../components/Header";
import ProductGallery from "../components/ProductGallery";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <section id="produtos" className="bg-gray-900 py-20">
        <h2 className="text-center text-4xl font-bold text-white mb-12">Nossa Coleção</h2>
        <ProductGallery />
      </section>
    </main>
  );
}
