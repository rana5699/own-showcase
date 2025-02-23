"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCard from "../projects/ProjectCard";
import TitleContainer from "@/components/utils/TitleContainer";
import { Button } from "@/components/ui/button";
import PrimaryBtn from "@/components/utils/PrimaryBtn";

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
              "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            liveLink: "https://your-live-demo.com/ecommerce",
            repoLink: "https://github.com/yourgithub/ecommerce",
          },
          {
            id: 2,
            title: "Doctor Appointment System",
            description:
              "A booking system for scheduling doctor appointments online.",
            image:
              "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            liveLink: "https://your-live-demo.com/ecommerce",
            repoLink: "https://github.com/yourgithub/ecommerce",
          },
          {
            id: 3,
            title: "E-Commerce Website",
            description: "A modern and fully responsive e-commerce platform.",
            image:
              "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <section className=" ">
      <div className="container mx-auto px-5">
        <TitleContainer
          title="Feature Projects"
          description="Explore some of my best projects built with modern web technologies."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
          {loading
            ? // Show Skeleton Loader while fetching
              Array.from({ length: 3 }).map((_, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl animate-pulse h-80"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                ></motion.div>
              ))
            : // Show projects when loaded
              projects.map((project, index) => (
                <div key={index}>
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
        </div>

        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          data-aos="fade-up"
        >
          <PrimaryBtn value="Show All"/>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
