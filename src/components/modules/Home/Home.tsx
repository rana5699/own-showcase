"use client"
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
      duration: 1000, // Set animation duration
      once: false, // Make it work every time you scroll into view
      easing: "ease-out-cubic", // Add easing to the animations
    });

    // Reinitialize AOS when component re-renders
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
      <ServicesContainer/>
      <TestimonialsSection/>
    </div>
  );
};

export default Home;
