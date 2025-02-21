"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const techStack = [
  {
    name: "React",
    img: "/tech/react.svg",
    level: 90,
    color: "from-blue-500 to-blue-300",
  },
  {
    name: "Next.js",
    img: "/tech/nextjs.svg",
    level: 85,
    color: "from-gray-800 to-gray-500",
  },
  {
    name: "Node.js",
    img: "/tech/nodejs.svg",
    level: 80,
    color: "from-green-500 to-green-300",
  },
  {
    name: "MongoDB",
    img: "/tech/mongodb.svg",
    level: 75,
    color: "from-green-700 to-green-400",
  },
  {
    name: "Tailwind CSS",
    img: "/tech/tailwind.svg",
    level: 95,
    color: "from-cyan-500 to-cyan-300",
  },
  {
    name: "Firebase",
    img: "/tech/firebase.svg",
    level: 70,
    color: "from-yellow-500 to-yellow-300",
  },
];

const TechStack = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          data-aos="fade-up"
        >
          My Tech Stack & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              data-aos="fade-up"
            >
              {/* Tech Icon & Name */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={tech.img}
                    alt={tech.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-xl font-semibold">{tech.name}</h3>
              </div>

              {/* Animated Progress Bar */}
              <div className="mt-4">
                <div className="w-full  h-2 rounded-full relative">
                  <motion.div
                    className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${tech.color} shadow-md`}
                    style={{ width: "0%" }}
                    initial={{ width: "0%" }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.3,
                      ease: "easeOut",
                    }}
                  />
                </div>
                <p className="text-sm  mt-2">{tech.level}% Expertise</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
