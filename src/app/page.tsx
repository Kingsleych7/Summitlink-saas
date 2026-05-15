"use client";

import Link from "next/link";
import React, { useState } from "react";

import {
  MessageCircle,
  Phone,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default function LandingPage() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const whatsappNumber = "2348146327260";

  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=Hello%20Summitlink%20Telecom`;

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    const text = `
Name: ${form.name}
Phone: ${form.phone}
Message: ${form.message}
`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const services = [
    {
      title: "Bulk SMS",
      link: "/services/bulk-sms",
      desc: "Send thousands of SMS instantly.",
      icon: <MessageCircle />,
    },
    {
      title: "OTP Services",
      link: "/services/otp-services",
      desc: "Secure verification messages.",
      icon: <Shield />,
    },
    {
      title: "SMS API",
      link: "/services/sms-api",
      desc: "Integrate SMS into your apps.",
      icon: <Zap />,
    },
    {
      title: "WhatsApp API",
      link: "/services/whatsapp-api",
      desc: "Automate WhatsApp messaging.",
      icon: <MessageCircle />,
    },
    {
      title: "Global Messaging",
      link: "/services/global-messaging",
      desc: "Reach customers worldwide.",
      icon: <Globe />,
    },
    {
      title: "Airtime",
      link: "/services/airtime",
      desc: "Instant airtime recharge.",
      icon: <Phone />,
    },
    {
      title: "Internet Data",
      link: "/services/data",
      desc: "Affordable data bundles.",
      icon: <Zap />,
    },
    {
      title: "Electricity",
      link: "/services/electricity",
      desc: "Pay electricity bills easily.",
      icon: <Globe />,
    },
    {
      title: "Pay TV",
      link: "/services/paytv",
      desc: "Cable TV subscriptions.",
      icon: <MessageCircle />,
    },
  ];

  return (

    <div className="min-h-screen bg-white text-gray-900">

      {/* Floating WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        <MessageCircle />
      </a>

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white p-10 md:p-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >

          <h1 className="text-4xl md:text-6xl font-bold">
            Summitlink Telecom LTD
          </h1>

          <p className="mt-4 text-lg md:text-xl">
            Connecting You. Empowering Possibilities.
          </p>

          <p className="mt-3 text-sm opacity-90">
            Bulk SMS • OTP • WhatsApp API • VTU Services
          </p>

          <div className="mt-6 flex gap-4 justify-center">

            <a href={whatsappLink} target="_blank">
              <Button className="bg-white text-green-700">
                Get Started
              </Button>
            </a>

            <a href="#contact">
              <Button
                variant="outline"
                className="border-white text-white"
              >
                Contact Sales
              </Button>
            </a>

          </div>

        </motion.div>

      </section>

      {/* SERVICES */}
      <section className="p-10 md:p-20 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {services.map((item, i) => (

            <Link
              key={i}
              href={item.link}
            >

              <Card className="rounded-2xl shadow-md hover:shadow-lg transition">

                <CardContent className="p-6">

                  <div className="text-green-600 mb-3">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    {item.desc}
                  </p>

                </CardContent>

              </Card>

            </Link>

          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="p-10 md:p-20 max-w-3xl mx-auto"
      >

        <h2 className="text-3xl font-bold text-center mb-6">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            className="w-full border p-3 rounded"
            placeholder="Your Name"
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            className="w-full border p-3 rounded"
            placeholder="Phone Number"
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
          />

          <textarea
            className="w-full border p-3 rounded"
            placeholder="Message"
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
          />

          <Button className="w-full bg-green-700 text-white">
            Send via WhatsApp
          </Button>

        </form>

      </section>

      {/* FOOTER */}
      <footer className="p-6 text-center text-sm text-gray-500">

        © {new Date().getFullYear()}
        {" "}
        Summitlink Telecom LTD

      </footer>

    </div>
  );
}
