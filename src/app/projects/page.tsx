"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProjectCard from "@/components/modules/projects/ProjectCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsPage = () => {
  // Sample projects with categories
  const projects = Array.from({ length: 10 }, (_, idx) => ({
    id: idx + 1,
    title: `Project ${idx + 1}`,
    description: `This is the description for project ${idx + 1}.`,
    category:
      idx % 3 === 0 ? "Web App" : idx % 3 === 1 ? "Mobile App" : "Design",
    image:
      "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveLink: `https://your-live-demo.com/project-${idx + 1}`,
    repoLink: `https://github.com/yourgithub/project-${idx + 1}`,
  }));

  const categories = ["All", "Web App", "Mobile App", "Design"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen container  p-8">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>

      {/* Category Tabs */}
      <Tabs defaultValue="All" className="w-full">
        <TabsList className="flex justify-center gap-4  p-2 rounded-full shadow-md mb-8">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              onClick={() => setSelectedCategory(category)}
              className={`capitalize px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                  : "text-body-color dark:text-white hover:bg-blue-600 hover:text-white"
              }`}
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Animated Project Cards */}
        <TabsContent value={selectedCategory}>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            layout
          >
            <AnimatePresence>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard index={idx} project={project} />
                  </motion.div>
                ))
              ) : (
                <motion.p
                  className="text-center col-span-3 text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  No projects found in this category.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectsPage;
