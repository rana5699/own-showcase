import { motion } from "framer-motion";
import Image from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css";

type TServices = {
  service: {
    title: string;
    description: string;
    icon: string;
  };
};
const ServicesCard = ({ service }: TServices) => {
  return (
    <motion.div
      className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow flex flex-col items-center text-center"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      data-aos="fade-up"
    >
      {/* Image Section */}
      <div className="relative w-20 h-20  p-4 rounded-full flex items-center justify-center mb-4">
        <Image
          src={service.icon}
          alt={service.title}
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>

      {/* Text Section */}
      <div>
        <h3 className="text-xl font-semibold leading-tight mb-2">
          {service.title}
        </h3>
        <p className="text-sm  leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
