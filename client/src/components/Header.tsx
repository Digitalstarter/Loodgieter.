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

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Offerte", href: "/offerte" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
              <span className="text-lg font-bold text-primary-foreground">LS</span>
            </div>
            <span className="hidden text-lg font-semibold text-foreground sm:block">
              Loodgieter Services
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={location === item.href ? "bg-accent" : ""}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}

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
          </nav>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-2 md:flex">
            <a href="tel:+31000000000">
              <Button variant="outline" className="gap-2" data-testid="button-bel">
                <Phone className="h-4 w-4" />
                Bel Direct
              </Button>
            </a>
            <Link href="/offerte">
              <Button data-testid="button-offerte-header">Offerte Aanvragen</Button>
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
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${location === item.href ? "bg-accent" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`nav-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}

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

            {/* Mobile CTAs */}
            <div className="space-y-2 border-t border-border pt-4">
              <a href="tel:+31000000000" className="block">
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
