import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact - Loodgieter Services | Neem Contact Op";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Neem contact op met Loodgieter Services. Wij zijn 24/7 bereikbaar voor al uw loodgietersvragen. Bel, mail of stuur een bericht via WhatsApp."
      );
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/20 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl" data-testid="contact-title">
                Contact
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Heeft u een vraag of wilt u een afspraak maken? Neem gerust contact met ons op.
                Wij staan voor u klaar!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Info */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  Onze Contactgegevens
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Voor spoedgevallen zijn wij 24/7 bereikbaar. Voor algemene vragen kunt u ons
                  bellen, mailen of het contactformulier invullen.
                </p>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Telefoon</h3>
                        <a
                          href="tel:+31626144204"
                          className="text-muted-foreground hover:text-primary"
                          data-testid="contact-phone"
                        >
                          06 26 14 42 04
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366]">
                        <SiWhatsapp className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">WhatsApp</h3>
                        <p className="text-sm text-muted-foreground">06 26 14 42 04</p>
                      </div>
                      <a href="https://wa.me/31626144204" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" data-testid="contact-whatsapp">
                          Open WhatsApp
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">E-mail</h3>
                        <a
                          href="mailto:247loodgieters@gmail.com"
                          className="text-muted-foreground hover:text-primary"
                          data-testid="contact-email"
                        >
                          247loodgieters@gmail.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Werkgebied</h3>
                        <p className="text-muted-foreground">
                          Amsterdam, Rotterdam, Leiden, Zoetermeer en omgeving
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Bereikbaarheid</h3>
                        <p className="text-muted-foreground">
                          24/7 voor spoedgevallen
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
