import { Card, CardContent } from "@/components/ui/card";
import rioolImage from "@assets/stock_images/drain_pipe_sewer_cle_d0807308.jpg";
import wcImage from "@assets/stock_images/toilet_bathroom_wc_w_7a410947.jpg";
import gooststeenImage from "@assets/stock_images/kitchen_sink_drain_f_a4dad1f3.jpg";
import rioolserviceImage from "@assets/stock_images/plumber_sewer_inspec_212c25f4.jpg";

const services = [
  {
    image: rioolImage,
    title: "Riool Ontstoppen",
    description: "Verstopt riool? Wij lossen het snel en effectief op met professionele apparatuur. Van kleine verstopping tot complete rioolreiniging.",
  },
  {
    image: wcImage,
    title: "WC Ontstoppen",
    description: "Een verstopte WC is vervelend. Onze specialisten zijn snel ter plaatse en zorgen ervoor dat uw toilet weer normaal functioneert.",
  },
  {
    image: gooststeenImage,
    title: "Gootsteen Ontstoppen",
    description: "Last van een verstopte gootsteen? Wij maken uw afvoer weer vrij zodat u zonder zorgen kunt koken en afwassen.",
  },
  {
    image: rioolserviceImage,
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
              className="group overflow-hidden transition-all duration-200"
              data-testid={`service-card-${index}`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
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
