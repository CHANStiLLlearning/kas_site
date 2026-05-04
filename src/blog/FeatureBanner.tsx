import React from 'react';
import { motion } from 'motion/react';

export const FeatureBanner = () => {
  return (
    <section className="bg-[#003DA5] py-10 mb-16 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center px-6"
      >
        <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tight">
          Foundations of Global Success
        </h2>
      </motion.div>
    </section>
  );
};
