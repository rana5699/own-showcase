import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ModeToggle } from "@/components/Theme/ModeToggle";
import ActiveNavlink from "./ActiveNavlink";

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
    AOS.refresh(); 
  }, []);

  return (
    <>
      {menuItems?.map((menuItem, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 + index * 0.1 }}
          data-aos="fade-up" 
        >
          <ActiveNavlink label={menuItem?.label} href={menuItem?.href} />
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        data-aos="fade-up" 
      >
        <ModeToggle />
      </motion.div>
    </>
  );
};

export default MenuItems;
