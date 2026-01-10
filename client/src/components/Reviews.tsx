import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement, reload?: boolean) => void;
    };
  }
}

const reviews = [
  {
    name: "Jan de V.",
    location: "Amsterdam",
    rating: 5,
    text: "Uitstekende service! Binnen een uur was de monteur ter plaatse en was mijn verstopte riool verholpen. Zeer professioneel en netjes gewerkt.",
  },
  {
    name: "Maria K.",
    location: "Rotterdam",
    rating: 5,
    text: "Al jaren mijn vaste loodgieter. Betrouwbaar, eerlijk en kundig. De communicatie is altijd helder en de prijzen zijn fair.",
  },
];

export function Reviews() {
  useEffect(() => {
    if (window.Trustpilot) {
      const widget = document.querySelector('.trustpilot-widget');
      if (widget) {
        window.Trustpilot.loadFromElement(widget as HTMLElement, true);
      }
    }
  }, []);

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl" data-testid="reviews-title">
            Wat Onze Klanten Zeggen
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Lees de ervaringen van onze tevreden klanten. Klanttevredenheid staat bij ons voorop.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <Card key={index} className="h-full" data-testid={`review-card-${index}`}>
              <CardContent className="flex h-full flex-col p-6">
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="mb-4 flex-1 text-muted-foreground italic">
                  "{review.text}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {review.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trustpilot Widget */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div
            className="trustpilot-widget w-full"
            data-locale="en-US"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="67a60ec3d88afca670dcb654"
            data-style-height="52px"
            data-style-width="100%"
            data-token="3459af4e-d4f6-4e10-8f1f-073bb2f90853"
            data-testid="trustpilot-widget"
          >
            <a
              href="https://www.trustpilot.com/review/loodgieter-services.nl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trustpilot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
