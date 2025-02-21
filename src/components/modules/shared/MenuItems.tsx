import Link from "next/link";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ModeToggle } from "@/components/Theme/ModeToggle";

export const menuItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Contact", href: "/contact" },
  ];

const MenuItems = () => {


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {menuItems?.map((menuItem, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 + index * 0.1 }}
          data-aos="fade-up" // Add AOS fade-up effect
        >
          <Link
            href={menuItem?.href}
            className="text-base text-body-color dark:text-white hover:text-primary"
          >
            {menuItem?.label}
          </Link>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        data-aos="fade-up" // Add AOS fade-up effect
      >
        <ModeToggle />
      </motion.div>
    </>
  );
};

export default MenuItems;
