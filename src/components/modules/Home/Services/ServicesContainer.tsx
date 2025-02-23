"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import TitleContainer from "@/components/utils/TitleContainer";
import ServicesCard from "./ServicesCard";
import Image from "next/image";

const services = [
  {
    title: "Responsive Web Design",
    description:
      "Crafting user-friendly, fully responsive websites that adapt seamlessly across devices for a smooth browsing experience.",
    icon: "/services/responsive-web.svg",
  },
  {
    title: "Full-Stack Web Development",
    description:
      "Building robust, scalable web applications using the latest technologies such as React, Node.js, MongoDB, and more.",
    icon: "/services/web-development.svg",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive interfaces that focus on user experience and interface aesthetics, ensuring an engaging and interactive website.",
    icon: "/services/ux-web.svg",
  },
  {
    title: "API Development & Integration",
    description:
      "Developing and integrating APIs to enhance functionality and provide seamless communication between different systems.",
    icon: "/services/api-development.svg",
  },
  {
    title: "E-Commerce Development",
    description:
      "Building feature-rich e-commerce platforms with integrated payment solutions, inventory management, and user-friendly interfaces.",
    icon: "/services/e-commerce.svg",
  },
];

const ServicesContainer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <TitleContainer
          title="My Professional Services"
          description="Crafting user-friendly, fully responsive websites that adapt seamlessly across devices for a smooth browsing experience."
        />

        <div className="flex flex-col md:flex-row h-screen items-center justify-center">
          <div>
            <div className="relative w-20 h-20  p-4 rounded-full flex items-center justify-center mb-4">
              <Image
                src="/services/e-commerce.svg"
                alt="title"
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
            </div>

            {/* Text Section */}
            <div>
              <h3 className="text-xl font-semibold leading-tight mb-2">
                API Development & Integration
              </h3>
              <p className="text-sm  leading-relaxed">
                Developing and integrating APIs to enhance functionality and
                provide seamless communication between different systems.
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {/* Service Card */}
            {services.map((service, index) => (
              <ServicesCard key={index} service={service} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesContainer;
