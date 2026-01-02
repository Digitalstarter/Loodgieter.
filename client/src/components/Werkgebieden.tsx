import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cities } from "@shared/schema";

export function Werkgebieden() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl" data-testid="werkgebieden-title">
            Onze Werkgebieden
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Wij zijn actief in de volgende steden en omgeving. Klik op een stad voor meer informatie.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((city) => (
            <Link key={city.slug} href={`/loodgieter-${city.slug}`}>
              <Button
                variant="outline"
                className="h-auto w-full flex-col gap-2 p-6"
                data-testid={`werkgebieden-city-${city.slug}`}
              >
                <MapPin className="h-8 w-8 text-primary" />
                <span className="text-lg font-semibold">Loodgieter {city.name}</span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  Bekijk pagina <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground">
            Staat uw stad er niet bij? Neem contact met ons op, wij helpen u graag!
          </p>
          <Link href="/contact">
            <Button data-testid="werkgebieden-contact-button">
              Neem Contact Op
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
