import { Check, Clock, Shield, Award, Users, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "10+ Jaar Ervaring",
    description: "Met meer dan tien jaar ervaring kennen wij alle aspecten van het loodgietersvak.",
  },
  {
    icon: Clock,
    title: "Snelle Service",
    description: "Wij zijn vaak dezelfde dag nog bij u. Voor spoed zijn wij 24/7 bereikbaar.",
  },
  {
    icon: Shield,
    title: "Garantie op Werk",
    description: "Op al ons werk geven wij garantie. Zo weet u zeker dat het goed geregeld is.",
  },
  {
    icon: Users,
    title: "Vakkundige Monteurs",
    description: "Onze monteurs zijn gediplomeerd en volgen regelmatig bijscholingen.",
  },
  {
    icon: ThumbsUp,
    title: "Eerlijke Prijzen",
    description: "Geen verrassingen achteraf. U krijgt altijd vooraf een duidelijke offerte.",
  },
  {
    icon: Check,
    title: "Persoonlijke Aanpak",
    description: "Wij nemen de tijd om uw situatie goed te begrijpen en de beste oplossing te bieden.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl" data-testid="whyus-title">
              Waarom Kiezen Voor Ons?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Bij Loodgieter Services staat kwaliteit en klanttevredenheid voorop.
              Wij onderscheiden ons door vakmanschap, betrouwbaarheid en een persoonlijke aanpak.
            </p>

            {/* Reasons Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4" data-testid={`reason-${index}`}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <reason.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{reason.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats/Image Area */}
          <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-gradient-to-br from-primary/5 to-accent/10 p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary lg:text-5xl" data-testid="stat-years">10+</div>
                  <div className="mt-2 text-sm text-muted-foreground">Jaar Ervaring</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary lg:text-5xl" data-testid="stat-customers">2500+</div>
                  <div className="mt-2 text-sm text-muted-foreground">Tevreden Klanten</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary lg:text-5xl" data-testid="stat-projects">5000+</div>
                  <div className="mt-2 text-sm text-muted-foreground">Projecten</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary lg:text-5xl" data-testid="stat-rating">4.9</div>
                  <div className="mt-2 text-sm text-muted-foreground">Gemiddelde Score</div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-background/80 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-primary/20 text-sm font-medium text-primary"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Ons Team</div>
                    <div className="text-sm text-muted-foreground">Ervaren professionals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
