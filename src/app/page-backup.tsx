import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { MessageCircle, Phone, Zap, Shield, Globe } from "lucide-react"; import { motion } from "framer-motion"; import { useState } from "react";

export default function LandingPage() { const [form, setForm] = useState({ name: "", phone: "", message: "" });

const whatsappNumber = "2348146327260";

const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Summitlink%20Telecom%2C%20I%20am%20interested%20in%20your%20services`;

const handleSubmit = (e) => { e.preventDefault(); const text = `Name: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
    "_blank"
  );
};

return ( <div className="min-h-screen bg-white text-gray-900">

{/* FLOATING WHATSAPP BUTTON */}
  <a
    href={whatsappLink}
    target="_blank"
    className="fixed bottom-5 right-5 bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
  >
    <MessageCircle />
  </a>

  {/* HERO */}
  <section className="bg-gradient-to-r from-green-600 to-green-800 text-white p-10 md:p-20">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold">Summitlink Telecom LTD</h1>
      <p className="mt-4 text-lg md:text-xl">Connecting You. Empowering Possibilities.</p>
      <p className="mt-3 text-sm opacity-90">Bulk SMS • OTP • Voice SMS • WhatsApp API</p>

      <div className="mt-6 flex gap-4 justify-center">
        <a href={whatsappLink} target="_blank">
          <Button className="bg-white text-green-700 hover:bg-gray-100">Get Started</Button>
        </a>
        <a href="#contact">
          <Button variant="outline" className="border-white text-white">Contact Sales</Button>
        </a>
      </div>
    </motion.div>
  </section>

  {/* SERVICES */}
  <section className="p-10 md:p-20 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        { title: "Bulk SMS", desc: "Send thousands of SMS instantly.", icon: <MessageCircle /> },
        { title: "OTP SMS", desc: "Secure verification messages.", icon: <Shield /> },
        { title: "Voice SMS", desc: "Automated voice messaging.", icon: <Phone /> },
        { title: "SMS API", desc: "Integrate SMS into your app.", icon: <Zap /> },
        { title: "WhatsApp API", desc: "Automate WhatsApp messaging.", icon: <MessageCircle /> },
        { title: "Global Messaging", desc: "Reach customers worldwide.", icon: <Globe /> },
      ].map((item, i) => (
        <Card key={i} className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <div className="text-green-600 mb-3">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>

  {/* PRICING */}
  <section className="bg-gray-50 p-10 md:p-20">
    <h2 className="text-3xl font-bold text-center mb-10">Pricing (Bulk SMS)</h2>

    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
      {[
        { plan: "Starter", price: "₦4.50/SMS", desc: "1,000 – 10,000 SMS" },
        { plan: "Business", price: "₦3.20/SMS", desc: "10,000 – 100,000 SMS" },
        { plan: "Enterprise", price: "Custom", desc: "100,000+ SMS" },
      ].map((p, i) => (
        <Card key={i} className="rounded-2xl shadow-md text-center">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold">{p.plan}</h3>
            <p className="text-green-600 text-2xl font-bold mt-2">{p.price}</p>
            <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>

  {/* CONTACT FORM */}
  <section id="contact" className="p-10 md:p-20 max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="w-full border p-3 rounded"
        placeholder="Your Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="w-full border p-3 rounded"
        placeholder="Phone Number"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <textarea
        className="w-full border p-3 rounded"
        placeholder="Message"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <Button className="w-full bg-green-700 text-white">
        Send via WhatsApp
      </Button>
    </form>
  </section>

  {/* CTA */}
  <section className="p-10 md:p-20 text-center bg-green-700 text-white">
    <h2 className="text-3xl font-bold">Grow Your Business Today</h2>
    <p className="mt-2">Fast, reliable and affordable messaging solutions.</p>
    <a href={whatsappLink} target="_blank">
      <Button className="mt-6 bg-white text-green-700">Chat on WhatsApp</Button>
    </a>
  </section>

  {/* FOOTER */}
  <footer className="p-6 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Summitlink Telecom LTD. All rights reserved.
  </footer>
</div>

); }
