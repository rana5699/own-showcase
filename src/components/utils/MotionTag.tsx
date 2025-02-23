"use client";
import { motion, MotionProps } from "framer-motion";
import React, { JSX } from "react";

interface MotionTagProps extends MotionProps {
  tag: keyof JSX.IntrinsicElements; // Restrict to valid HTML elements
  text: string;
}

const MotionTag: React.FC<MotionTagProps> = ({ tag, text, ...props }) => {
  const MotionComponent = motion[
    tag as keyof typeof motion
  ] as React.ElementType;

  return (
    <MotionComponent
      className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      data-aos="fade-up"
      {...props}
    >
      {text}
    </MotionComponent>
  );
};

export default MotionTag;
