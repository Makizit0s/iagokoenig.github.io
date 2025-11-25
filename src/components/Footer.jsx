import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mt-12 pt-6 border-t border-gray-300 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400 no-print"
    >
      <p>
        © {currentYear} Iago Braian Blasius Koenig. Todos os direitos reservados.
      </p>
      <p className="mt-2 text-xs">
        Design profissional com tema claro/escuro • Desenvolvido com React + Tailwind CSS + Framer Motion
      </p>
    </motion.footer>
  );
};

export default Footer;
