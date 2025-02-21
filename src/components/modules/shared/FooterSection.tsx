"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { menuItems } from "./MenuItems";

const FooterSection = () => {

  return (
    <footer className=" pb-5">
      <div className="container mx-auto px-6 pb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center w-full">
          {/* Logo and Description */}
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
                className="text-2xl font-bold text-transparent bg-clip-text"
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
            <p className="mt-2 text-base">
              We provide innovative solutions that help businesses grow. Get in
              touch and let&apos;s build something amazing together!
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-2 grid grid-cols-2 lg:grid-cols-5">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-base hover:text-gray-400"
                >
                  {item.label}
                </Link>
              ))}
            </ul>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="mt-2 flex space-x-6">
              <Link href="#">
                <FaFacebook className="text-3xl" />
              </Link>
              <Link href="#">
                <FaTwitter className="text-3xl" />
              </Link>
              <Link href="#">
                <FaGithub className="text-3xl" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 py-5 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
