import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { OfferteForm } from "@/components/OfferteForm";
import { Check, Clock, Shield, ThumbsUp } from "lucide-react";

const benefits = [
  {
    icon: Check,
    title: "Gratis en Vrijblijvend",
    description: "Ontvang een offerte zonder verplichtingen",
  },
  {
    icon: Clock,
    title: "Snelle Reactie",
    description: "Wij reageren binnen 24 uur op uw aanvraag",
  },
  {
    icon: ThumbsUp,
    title: "Eerlijke Prijzen",
    description: "Transparante prijsopgave zonder verrassingen",
  },
  {
    icon: Shield,
    title: "Garantie",
    description: "Op al ons werk geven wij garantie",
  },
];

export default function Offerte() {
  useEffect(() => {
    document.title = "Offerte Aanvragen - Loodgieter Services | Gratis Prijsopgave";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Vraag een gratis en vrijblijvende offerte aan voor loodgieterswerkzaamheden. Snelle reactie, eerlijke prijzen en garantie op al ons werk."
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
              <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl" data-testid="offerte-title">
                Offerte Aanvragen
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Vraag een gratis en vrijblijvende offerte aan. Vul het formulier in en wij nemen
                zo spoedig mogelijk contact met u op.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-card py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                  data-testid={`offerte-benefit-${index}`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <OfferteForm />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
