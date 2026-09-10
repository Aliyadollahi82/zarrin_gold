import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategorySection } from "@/components/CategorySection";
import { BestSellers } from "@/components/BestSellers";
import { PromoSection } from "@/components/PromoSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategorySection />
        <BestSellers />
        <PromoSection />
      </main>
      <Footer />
    </>
  );
}
