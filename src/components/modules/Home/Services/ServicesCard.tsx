import { motion } from "framer-motion";
import Image from "next/image";
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
      className=" rounded-xl border border-b-0 flex-shrink-0 px-8 py-6  mx-auto"
      style={{
        background:
          "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
        <p className="  leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
