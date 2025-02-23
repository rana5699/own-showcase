"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="relative   pt-[120px]  lg:pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              {/* Framer Motion for fade-in animation */}
              <motion.h1
                className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                data-aos="fade-up"
              >
                Building the Future of Web Development
              </motion.h1>

              {/* Framer Motion for fade-in animation */}
              <motion.p
                className="mb-5 max-w-[480px] text-base text-body-color "
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                data-aos="fade-up"
              >
                As a passionate junior web developer, I specialize in creating
                responsive and user-friendly websites. With a solid foundation
                in the MERN stack, Tailwind CSS, and React, I build efficient
                and visually stunning web applications that help businesses and
                individuals thrive online.
              </motion.p>

              <div className="clients pt-5">
                <h6 className="mb-5 flex items-center text-xs font-normal text-body-color ">
                  Featured Projects & Clients
                  <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                </h6>

                <div className="flex flex-col md:flex-row items-center space-x-4">
                  {/* AOS for scroll animation and Framer Motion for fade-in */}
                  <div data-aos="fade-up" data-aos-delay="300">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <Image
                        width={500}
                        height={500}
                        alt="Project 1"
                        src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                      />
                    </motion.div>
                  </div>

                  {/* AOS for scroll animation and Framer Motion for fade-in */}
                  <div data-aos="fade-up" data-aos-delay="400">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <Image
                        width={500}
                        height={500}
                        alt="Project 2"
                        src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                      />
                    </motion.div>
                  </div>

                  {/* AOS for scroll animation and Framer Motion for fade-in */}
                  <div data-aos="fade-up" data-aos-delay="500">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <Image
                        width={500}
                        height={500}
                        alt="Project 3"
                        src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image section with Framer Motion and AOS */}
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              {/* Framer Motion for zoom-in and AOS for scroll animation */}
              <motion.div
                className="relative z-10 inline-block pt-11 lg:pt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                data-aos="zoom-in" // AOS zoom-in animation
              >
                <Image
                  src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                  alt="hero"
                  width={600}
                  height={400}
                  className="max-w-full md:ml-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
