import { motion } from "framer-motion";
import Image from "next/image"; // Assuming you're using Next.js image optimization

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      className="p-6 max-w-lg mx-auto  rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        delay: index * 0.3, 
        ease: "easeOut",
        repeat: Infinity, 
        repeatType: "loop", 
        repeatDelay: 0,
      }}
      data-aos="fade-up" // Optional, AOS fade-up effect
    >
      <div className="flex items-center mb-4">
        {/* Testimonial Image */}
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={50}
          height={50}
          className="rounded-full mr-4"
        />
        <div>
          {/* Testimonial Name & Role */}
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm ">{testimonial.role}</p>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="italic">{testimonial.text}</p>
    </motion.div>
  );
};

export default TestimonialCard;
