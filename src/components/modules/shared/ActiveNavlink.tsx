import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion"; // Import Framer Motion

const ActiveNavlink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }} 
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link
        href={href}
        className={`block px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out ${
          pathname === href
            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
            : "text-body-color dark:text-white hover:bg-blue-600 hover:text-white"
        }`}
      >
        {label}
      </Link>
    </motion.div>
  );
};

export default ActiveNavlink;
