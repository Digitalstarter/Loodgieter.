import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cities } from "@shared/schema";
import logoImage from "@assets/Zonder_titel_(300_x_100_px)_(1)_1767314984342.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img 
              src={logoImage} 
              alt="Loodgieter Services Logo" 
              className="h-12 w-auto object-contain"
              data-testid="header-logo"
            />
          </Link>

          {/* Desktop Navigation - Order: Home, Steden, Offerte, Contact */}
          <nav className="hidden items-center gap-1 md:flex">
            <Link href="/">
              <Button
                variant="ghost"
                className={location === "/" ? "bg-accent" : ""}
                data-testid="nav-home"
              >
                Home
              </Button>
            </Link>

            {/* Steden Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1" data-testid="nav-steden">
                  Steden
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {cities.map((city) => (
                  <DropdownMenuItem key={city.slug} asChild>
                    <Link
                      href={`/loodgieter-${city.slug}`}
                      className="w-full cursor-pointer"
                      data-testid={`nav-city-${city.slug}`}
                    >
                      {city.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/offerte">
              <Button
                variant="ghost"
                className={location === "/offerte" ? "bg-accent" : ""}
                data-testid="nav-offerte"
              >
                Offerte
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="ghost"
                className={location === "/contact" ? "bg-accent" : ""}
                data-testid="nav-contact"
              >
                Contact
              </Button>
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-2 md:flex">
            <a href="tel:+31626144204">
              <Button variant="outline" className="gap-2" data-testid="button-bel">
                <Phone className="h-4 w-4" />
                Bel Direct
              </Button>
            </a>
            <Link href="/offerte">
              <Button data-testid="button-offerte-header">Gratis Offerte Aanvragen</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            <Link href="/">
              <Button
                variant="ghost"
                className={`w-full justify-start ${location === "/" ? "bg-accent" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid="nav-mobile-home"
              >
                Home
              </Button>
            </Link>

            {/* Mobile Steden */}
            <div className="border-t border-border pt-2">
              <p className="px-4 py-2 text-sm font-medium text-muted-foreground">Steden</p>
              {cities.map((city) => (
                <Link key={city.slug} href={`/loodgieter-${city.slug}`}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start pl-8"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`nav-mobile-city-${city.slug}`}
                  >
                    {city.name}
                  </Button>
                </Link>
              ))}
            </div>

            <Link href="/offerte">
              <Button
                variant="ghost"
                className={`w-full justify-start ${location === "/offerte" ? "bg-accent" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid="nav-mobile-offerte"
              >
                Offerte
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="ghost"
                className={`w-full justify-start ${location === "/contact" ? "bg-accent" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid="nav-mobile-contact"
              >
                Contact
              </Button>
            </Link>

            {/* Mobile CTAs */}
            <div className="space-y-2 border-t border-border pt-4">
              <a href="tel:+31626144204" className="block">
                <Button variant="outline" className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  Bel Direct
                </Button>
              </a>
              <Link href="/offerte">
                <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  Offerte Aanvragen
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
