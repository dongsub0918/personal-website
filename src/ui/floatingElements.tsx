"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
}

export default function FloatingElement({
  children,
  delay = 0,
}: FloatingElementProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}
