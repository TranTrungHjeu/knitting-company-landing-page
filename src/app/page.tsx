import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import About from "@/components/About";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main style={{ scrollPaddingTop: 80 }}>
        <Hero />
        <PartnerLogos />
        <About />
        <Products />
        <Contact />
        <FAQ />
      </main>
    </>
  );
}
