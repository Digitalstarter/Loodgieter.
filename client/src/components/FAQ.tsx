import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Hoe snel kunnen jullie ter plaatse zijn?",
    answer: "In de meeste gevallen kunnen wij dezelfde dag nog langskomen. Voor spoedgevallen zijn wij 24/7 bereikbaar en streven we ernaar binnen 1-2 uur ter plaatse te zijn.",
  },
  {
    question: "Wat kost het ontstoppen van een riool of afvoer?",
    answer: "De kosten zijn afhankelijk van de ernst van de verstopping en de benodigde werkzaamheden. Wij geven altijd vooraf een duidelijke offerte zodat u niet voor verrassingen komt te staan. Neem contact met ons op voor een vrijblijvende prijsopgave.",
  },
  {
    question: "Geven jullie garantie op het werk?",
    answer: "Ja, op al ons werk geven wij garantie. De garantieperiode is afhankelijk van het type werkzaamheden. Bij het afronden van de klus informeren wij u over de specifieke garantievoorwaarden.",
  },
  {
    question: "Zijn jullie gecertificeerd?",
    answer: "Al onze monteurs zijn gediplomeerd en beschikken over de benodigde certificeringen. Daarnaast volgen zij regelmatig bijscholingen om op de hoogte te blijven van de nieuwste technieken en regelgeving.",
  },
  {
    question: "In welke plaatsen zijn jullie actief?",
    answer: "Wij zijn actief in Amsterdam, Rotterdam, Leiden, Zoetermeer en omgeving. Twijfelt u of wij bij u in de buurt komen? Neem gerust contact op, we kijken graag of we u kunnen helpen.",
  },
  {
    question: "Kan ik ook 's avonds of in het weekend terecht?",
    answer: "Ja, voor spoedgevallen zijn wij 24/7 beschikbaar, ook in het weekend en 's avonds. Reguliere afspraken maken wij bij voorkeur tijdens kantooruren, maar we denken graag met u mee.",
  },
];

export function FAQ() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl" data-testid="faq-title">
            Veelgestelde Vragen
          </h2>
          <p className="text-lg text-muted-foreground">
            Hier vindt u antwoorden op de meest gestelde vragen. Staat uw vraag er niet bij?
            Neem dan gerust contact met ons op.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger
                className="text-left font-semibold"
                data-testid={`faq-question-${index}`}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                className="text-muted-foreground"
                data-testid={`faq-answer-${index}`}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
