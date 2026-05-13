import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "2348146327260";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Summitlink%20Telecom`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      className="fixed bottom-5 right-5 bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
    >
      <MessageCircle />
    </a>
  );
}
