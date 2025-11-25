import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children, delay = 0 }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mb-6 print-break-avoid"
    >
      <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-3 border-b-2 border-primary-200 dark:border-primary-800 pb-2">
        {title}
      </h3>
      <div className="text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
