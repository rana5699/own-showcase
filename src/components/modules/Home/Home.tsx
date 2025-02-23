"use client";
import { useEffect } from "react";
import FeaturedProjects from "./FeaturedProjects";
import HeroSection from "./HeroSection";
import AOS from "aos";
import "aos/dist/aos.css";
import TestimonialsSection from "./Testmonial/TestmonialSection";
import ServicesContainer from "./Services/ServicesContainer";

const Home = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out-cubic",
    });

    window.addEventListener("scroll", () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <div>
      <HeroSection />
      <FeaturedProjects />
      <ServicesContainer />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
