import { motion } from "framer-motion";

type TContainerProps = {
  title: string;
  description: string;
};

const TitleContainer: React.FC<TContainerProps> = ({ title, description }) => {
  return (
    <motion.div className="max-w-3xl mx-auto px-6 py-7 md:py-10 text-center ">
      <motion.h2
        className="text-3xl lg:text-5xl  md:text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        data-aos="fade-up"
      >
        {title}
      </motion.h2>
      <motion.p
        className="mt-4 text-lg "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        data-aos="fade-up"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default TitleContainer;
