import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StructuredData } from "@/components/StructuredData";
import { cities, type CityData } from "@shared/schema";

interface CityPageProps {
  citySlug: string;
}

export default function CityPage({ citySlug }: CityPageProps) {
  const city = cities.find((c) => c.slug === citySlug) as CityData;

  useEffect(() => {
    if (city) {
      document.title = `Loodgieter ${city.name} - Professionele Loodgietersservice | Loodgieter Services`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          `Professionele loodgietersservice in ${city.name} en omgeving. Riool ontstoppen, WC ontstoppen, gootsteen ontstoppen. 24/7 beschikbaar, snelle service.`
        );
      }
    }
  }, [city]);

  if (!city) {
    return null;
  }

  return (
    <>
      <StructuredData cityName={city.name} />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero cityName={city.name} />
          
          {/* City-specific intro section */}
          <section className="bg-background py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl" data-testid="city-intro-title">
                  Uw Loodgieter in {city.name}
                </h2>
                <p className="text-lg text-muted-foreground">
                  Wij zijn uw betrouwbare partner voor alle loodgieterswerkzaamheden in {city.name} en omgeving.
                  Met jarenlange ervaring en lokale kennis staan wij altijd voor u klaar. Of het nu gaat om een
                  verstopte afvoer, een lekkage of een complete renovatie – wij helpen u snel en vakkundig.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Werkgebied: {city.name} en omgeving
                </div>
              </div>
            </div>
          </section>

          <Services />
          <WhyUs />
          <Reviews />
          <FAQ />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
