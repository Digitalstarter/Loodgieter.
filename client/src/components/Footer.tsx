import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { cities } from "@shared/schema";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
                <span className="text-lg font-bold text-primary-foreground">LS</span>
              </div>
              <span className="text-lg font-semibold">Loodgieter Services</span>
            </div>
            <p className="mt-4 text-sm text-background/70">
              Uw betrouwbare partner voor alle loodgieterswerkzaamheden.
              Al meer dan 10 jaar actief in Nederland.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+31000000000"
                  className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
                  data-testid="footer-phone"
                >
                  <Phone className="h-4 w-4" />
                  <span>+31 (0)00 000 0000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@loodgieter-services.nl"
                  className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
                  data-testid="footer-email"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@loodgieter-services.nl</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Amsterdam, Rotterdam, Leiden, Zoetermeer en omgeving</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Clock className="h-4 w-4" />
                <span>24/7 Bereikbaar voor spoed</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Snelle Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-background/70 transition-colors hover:text-background"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/offerte"
                  className="text-sm text-background/70 transition-colors hover:text-background"
                >
                  Offerte Aanvragen
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-background/70 transition-colors hover:text-background"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Werkgebieden
            </h3>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/loodgieter-${city.slug}`}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                    data-testid={`footer-city-${city.slug}`}
                  >
                    Loodgieter {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-background/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Loodgieter Services. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-background/60 transition-colors hover:text-background"
              >
                Privacybeleid
              </a>
              <a
                href="#"
                className="text-sm text-background/60 transition-colors hover:text-background"
              >
                Algemene Voorwaarden
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
