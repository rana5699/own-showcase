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
    <section className="px-5 container mx-auto ">
      {/* Text Section */}
      <TitleContainer
        title="My Professional Services"
        description="Crafting user-friendly, fully responsive websites that adapt seamlessly across devices for a smooth browsing experience."
      />

      {/* Service Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center"
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
    </section>
  );
};

export default ServicesContainer;
