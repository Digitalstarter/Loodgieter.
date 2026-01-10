import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

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
  const trustpilotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const SCRIPT_SRC =
      "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";

    const ensureScriptLoaded = () =>
      new Promise<void>((resolve, reject) => {
        // Is the script already present?
        const existing = document.querySelector<HTMLScriptElement>(
          `script[src="${SCRIPT_SRC}"], script[src="https:${SCRIPT_SRC}"], script[src="http:${SCRIPT_SRC}"]`
        );
        if (existing) {
          // If it’s already loaded, resolve immediately
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = SCRIPT_SRC;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load Trustpilot script"));
        document.head.appendChild(script);
      });

    let intervalId: number | null = null;

    const loadWidget = async () => {
      try {
        await ensureScriptLoaded();

        // Wait until Trustpilot global is available, then render widget
        intervalId = window.setInterval(() => {
          const tp = (window as any).Trustpilot;
          if (tp && trustpilotRef.current) {
            tp.loadFromElement(trustpilotRef.current, true);
            if (intervalId) window.clearInterval(intervalId);
            intervalId = null;
          }
        }, 200);
      } catch (e) {
        console.error(e);
      }
    };

    loadWidget();

    return () => {
      if (intervalId) window.clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2
            className="mb-4 text-3xl font-bold text-foreground sm:text-4xl"
            data-testid="reviews-title"
          >
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
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="mb-4 flex-1 text-muted-foreground italic">
                  "{review.text}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
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

        {/* Trustpilot TrustBox widget - Review Collector (below reviews) */}
        <div className="mx-auto mt-12 max-w-4xl w-full">
          <div
            ref={trustpilotRef}
            className="trustpilot-widget"
            data-locale="nl-NL"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="67a60ec3d88afca670dcb654"
            data-style-height="52px"
            data-style-width="100%"
            data-token="395a3fe9-5184-4d81-804f-6b782756c8ae"
            data-testid="trustpilot-widget"
          >
            <a
              href="https://www.trustpilot.com/review/loodgieter-services.nl"
              target="_blank"
              rel="noopener"
            >
              Trustpilot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
