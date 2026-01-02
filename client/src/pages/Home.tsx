import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Reviews } from "@/components/Reviews";
import { Werkgebieden } from "@/components/Werkgebieden";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Services />
          <WhyUs />
          <Reviews />
          <Werkgebieden />
          <FAQ />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
