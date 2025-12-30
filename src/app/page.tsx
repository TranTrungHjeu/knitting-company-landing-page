import dynamic from "next/dynamic";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import FloatingZaloButton from "@/components/FloatingZaloButton";

// Lazy load below-the-fold components for better performance
const About = dynamic(() => import("@/components/About"), {
  loading: () => (
    <div className="w-full py-20 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const Products = dynamic(() => import("@/components/Products"), {
  loading: () => (
    <div className="w-full py-20 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => (
    <div className="w-full py-20 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => (
    <div className="w-full py-20 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main style={{ scrollPaddingTop: 80, position: "relative" }}>
        <Hero />
        <PartnerLogos />
        <About />
        <Products />
        <Contact />
        <FAQ />
      </main>
      <FloatingZaloButton />
    </>
  );
}
