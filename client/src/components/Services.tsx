import { Card, CardContent } from "@/components/ui/card";
import { Droplets, CircleDot, Pipette, Wrench } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Riool Ontstoppen",
    description: "Verstopt riool? Wij lossen het snel en effectief op met professionele apparatuur. Van kleine verstopping tot complete rioolreiniging.",
  },
  {
    icon: CircleDot,
    title: "WC Ontstoppen",
    description: "Een verstopte WC is vervelend. Onze specialisten zijn snel ter plaatse en zorgen ervoor dat uw toilet weer normaal functioneert.",
  },
  {
    icon: Pipette,
    title: "Gootsteen Ontstoppen",
    description: "Last van een verstopte gootsteen? Wij maken uw afvoer weer vrij zodat u zonder zorgen kunt koken en afwassen.",
  },
  {
    icon: Wrench,
    title: "Rioolservice",
    description: "Complete rioolservice van inspectie tot reparatie. Wij zorgen voor een goed functionerend rioolsysteem in uw woning of bedrijf.",
  },
];

export function Services() {
  return (
    <section className="bg-background py-16 lg:py-24" id="diensten">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl" data-testid="services-title">
            Onze Diensten
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Wij bieden een breed scala aan loodgietersdiensten voor particulieren en bedrijven.
            Altijd vakkundig en tegen eerlijke prijzen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group transition-all duration-200 hover-elevate"
              data-testid={`service-card-${index}`}
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
