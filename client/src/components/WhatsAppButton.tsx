import { SiWhatsapp } from "react-icons/si";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/31626144204"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 md:bottom-8 md:right-8"
      aria-label="Chat via WhatsApp"
      data-testid="button-whatsapp"
    >
      <SiWhatsapp className="h-7 w-7" />
    </a>
  );
}
