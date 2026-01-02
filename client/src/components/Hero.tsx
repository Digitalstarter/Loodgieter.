import { Link } from "wouter";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/stock_images/professional_plumber_aca9a869.jpg";

interface HeroProps {
  cityName?: string;
}

export function Hero({ cityName }: HeroProps) {
  const title = cityName ? `Loodgieter ${cityName}` : "Uw Betrouwbare Loodgieter";
  const subtitle = cityName
    ? `De bekende loodgieter in ${cityName}`
    : "De betrouwbare loodgieter in uw regio";

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden lg:min-h-[80vh]">
      {/* Background Image with Dark Wash */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professionele loodgieter aan het werk"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:min-h-[80vh] lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
            </span>
            24/7 Beschikbaar
          </div>

          {/* Tagline */}
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-blue-300">
            De betrouwbare loodgieter in uw regio
          </p>

          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl" data-testid="hero-title">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mb-2 text-xl font-semibold uppercase tracking-wide text-blue-200 sm:text-2xl">
            {subtitle}
          </p>

          {/* Description */}
          <p className="mb-8 text-lg text-gray-300" data-testid="hero-subtitle">
            Zoekt u een ervaren loodgieter voor lekdetectie, verstoppingen of onderhoud? 
            Onze loodgieters staan dag en nacht voor u klaar met snelle service en vakmanschap. 
            Bel direct voor hulp of plan eenvoudig online een afspraak.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto" 
                data-testid="button-hero-contact"
              >
                Contact
              </Button>
            </Link>
            <Link href="/offerte">
              <Button 
                size="lg" 
                className="w-full gap-2 bg-slate-700 px-8 text-white hover:bg-slate-600 sm:w-auto" 
                data-testid="button-hero-offerte"
              >
                Alle diensten
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>10+ Jaar Ervaring</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Snelle Respons</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Vakkundige Monteurs</span>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="mt-8 flex items-center gap-4">
            <a href="tel:+31626144204" className="flex items-center gap-2 text-white hover:text-blue-300">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">06 26 14 42 04</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
