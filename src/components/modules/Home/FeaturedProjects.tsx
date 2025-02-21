"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCard from "../projects/ProjectCard";

// Dummy project data (Simulating API Fetch)
const fetchProjects = () =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            title: "Tourist Spot Management",
            description:
              "A system to manage tourist spots with admin and user roles.",
            image:
              "https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png",
            liveLink: "https://your-live-demo.com/ecommerce",
            repoLink: "https://github.com/yourgithub/ecommerce",
          },
          {
            id: 2,
            title: "Doctor Appointment System",
            description:
              "A booking system for scheduling doctor appointments online.",
            image:
              "https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png",
            liveLink: "https://your-live-demo.com/ecommerce",
            repoLink: "https://github.com/yourgithub/ecommerce",
          },
          {
            id: 3,
            title: "E-Commerce Website",
            description: "A modern and fully responsive e-commerce platform.",
            image:
              "https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png",
            liveLink: "https://your-live-demo.com/ecommerce",
            repoLink: "https://github.com/yourgithub/ecommerce",
          },
        ]),
      2000 // Simulate a 2s API delay
    )
  );

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Simulate API call
    fetchProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="py-5 mb-7">
      <div className="container mx-auto px-5">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-aos="fade-up"
        >
         Projects Showcase
        </motion.h2>
        <p className="text-center  mt-4">
          Explore some of my best projects built with modern web technologies.
        </p>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? // Show Skeleton Loader while fetching
              Array.from({ length: 3 }).map((_, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-300 dark:bg-gray-700 rounded-xl animate-pulse h-80"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                 
                </motion.div>
              ))
            : // Show projects when loaded
              projects.map((project, index) => (
                <div key={index}>
                <ProjectCard project={project} index={index}/>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
