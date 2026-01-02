import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { cities } from "@shared/schema";
import logoImage from "@assets/Zonder_titel_(300_x_100_px)_(1)_1767314984342.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img 
                src={logoImage} 
                alt="Loodgieter Services Logo" 
                className="h-12 w-auto object-contain"
                data-testid="footer-logo"
              />
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
                  href="tel:+31626144204"
                  className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
                  data-testid="footer-phone"
                >
                  <Phone className="h-4 w-4" />
                  <span>06 26 14 42 04</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/31626144204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
                  data-testid="footer-whatsapp"
                >
                  <SiWhatsapp className="h-4 w-4" />
                  <span>WhatsApp: 06 26 14 42 04</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:247loodgieters@gmail.com"
                  className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
                  data-testid="footer-email"
                >
                  <Mail className="h-4 w-4" />
                  <span>247loodgieters@gmail.com</span>
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
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <p className="text-sm text-background/60">
              © 2026 Loodgieter Services | Alle rechten voorbehouden | designed by{" "}
              <a
                href="https://www.digitalstarters.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 underline transition-colors hover:text-background"
              >
                DigitalStarters
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
