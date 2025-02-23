"use client";

import { TProject } from "@/components/types";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  project,
  index,
}: {
  project: TProject;
  index: number;
}) => {
  return (
    <motion.div
      className="shadow-lg rounded-xl overflow-hidden"
      transition={{ duration: 0.8, delay: index * 0.2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-aos="fade-up"
    >
      {/* Project Image with Hover Animation */}
      <motion.div
        className="relative h-56 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={project.image}
          alt={project.title}
          height={500}
          width={500}


          // layout="fill"
          // objectFit="cover"
          // className="rounded-t-xl"
        />
      </motion.div>

      {/* Project Content */}
      <div className="p-5">
        <h3 className="text-2xl font-semibold ">{project.title}</h3>
        <p className="mt-2">{project.description}</p>

        {/* View Project Button */}
        {/* View Project Buttons */}
        <div className="mt-4 flex flex-wrap gap-4">
          {/* Live Demo */}
          <Link href={project.liveLink} target="_blank">
            <Button> Live Demo 🚀</Button>
          </Link>

          {/* GitHub Repo */}
          <Link href={project.repoLink} target="_blank">
            <Button variant="outline">GitHub 🔗</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
