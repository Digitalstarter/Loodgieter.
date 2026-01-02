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
  {
    name: "Peter B.",
    location: "Leiden",
    rating: 5,
    text: "Snelle hulp bij een lekkage. De monteur was vriendelijk, legde alles goed uit en liet geen rommel achter. Aanrader!",
  },
  {
    name: "Sandra M.",
    location: "Zoetermeer",
    rating: 5,
    text: "Na een andere slechte ervaring was ik sceptisch, maar deze loodgieter heeft mijn vertrouwen hersteld. Vakkundig en betaalbaar.",
  },
  {
    name: "Henk J.",
    location: "Amsterdam",
    rating: 5,
    text: "Geweldige ervaring! Kwam dezelfde dag nog langs voor een verstopte gootsteen. Probleem was zo opgelost. Top service!",
  },
  {
    name: "Linda W.",
    location: "Rotterdam",
    rating: 5,
    text: "Zeer tevreden over de installatie van onze nieuwe badkamer. Alles netjes afgewerkt en binnen de afgesproken tijd klaar.",
  },
];

export function Reviews() {
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

        {/* Overall Rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 rounded-lg bg-card p-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-foreground">4.9/5</div>
              <div className="text-sm text-muted-foreground">Gebaseerd op 200+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
