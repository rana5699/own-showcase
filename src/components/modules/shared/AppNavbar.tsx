"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/Theme/ModeToggle";
import { CrossIcon, MenuIcon } from "lucide-react";
import MenuItems, { menuItems } from "./MenuItems";

const AppNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white  dark:bg-[#020817] fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-screen-2xl mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            data-aos="fade-up"
          >
            <Link
              href="/"
              className="text-2xl font-bold text-dark dark:text-white"
            >
              <motion.div
                className="text-5xl font-bold text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #3B82F6, #9333EA)", // Gradient using #3B82F6 and two complementary colors
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                data-aos="fade-up"
              >
                RANA
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <MenuItems /> {/* is customized menuItems from /src/shared */}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-body-color dark:text-white"
            initial={false}
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              transition: { duration: 0.3 },
            }}
          >
            <div
              className={`transition-all ${
                isMenuOpen ? "transform rotate-45" : "transform rotate-0"
              }`}
            >
              {isMenuOpen ? (
                <CrossIcon aria-label="Close Menu" /> // Accessible close icon
              ) : (
                <MenuIcon aria-label="Open Menu" /> // Accessible hamburger menu icon
              )}
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4">
          {menuItems?.map((menuItem, index) => (
            <motion.div
              className="mt-1"
              key={index}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 + index * 0.1 }}
              data-aos="fade-up"
            >
              <Link
                href={menuItem?.href}
                className="text-base text-body-color dark:text-white hover:text-primary "
              >
                {menuItem?.label}
              </Link>
            </motion.div>
          ))}

          <motion.div className="my-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            data-aos="fade-up" // Add AOS fade-up effect
          >
            <ModeToggle />
          </motion.div>
        </div>
      )}
    </header>
  );
};

export default AppNavbar;
