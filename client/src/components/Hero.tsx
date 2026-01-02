import { Link } from "wouter";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  cityName?: string;
}

export function Hero({ cityName }: HeroProps) {
  const title = cityName ? `Loodgieter ${cityName}` : "Uw Betrouwbare Loodgieter";
  const subtitle = cityName
    ? `Professionele loodgietersservice in ${cityName} en omgeving`
    : "Professionele loodgietersservice in heel Nederland";

  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/20 lg:min-h-[70vh]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            24/7 Beschikbaar
          </div>

          {/* Title */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl" data-testid="hero-title">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl" data-testid="hero-subtitle">
            {subtitle}. Wij helpen u snel en vakkundig met alle loodgieterswerkzaamheden.
            Van verstopte afvoeren tot complete installatieprojecten.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/offerte">
              <Button size="lg" className="w-full gap-2 px-8 sm:w-auto" data-testid="button-hero-offerte">
                Gratis Offerte Aanvragen
              </Button>
            </Link>
            <a href="tel:+31000000000">
              <Button size="lg" variant="outline" className="w-full gap-2 px-8 sm:w-auto" data-testid="button-hero-bel">
                <Phone className="h-5 w-5" />
                Bel Direct
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>10+ Jaar Ervaring</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Snelle Respons</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Vakkundige Monteurs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="h-12 w-full text-background" preserveAspectRatio="none" viewBox="0 0 1440 54">
          <path fill="currentColor" d="M0 22L60 16.7C120 11 240 1 360 0.3C480 0 600 10 720 16.7C840 22 960 22 1080 16.7C1200 11 1320 1 1380 0.3L1440 0V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V22Z"></path>
        </svg>
      </div>
    </section>
  );
}
