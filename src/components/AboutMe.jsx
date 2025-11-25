import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Sou <span className="font-semibold text-primary-700 dark:text-primary-400">Iago Braian Blasius Koenig</span>, 
          19 anos, de Santa Catarina – Brasil.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-5 rounded-lg border-l-4 border-primary-600"
      >
        <p className="leading-relaxed text-gray-800 dark:text-gray-200">
          <strong className="text-primary-700 dark:text-primary-400">Estudante de Engenharia de Software</strong>, 
          com especialização paralela em <strong>Análise de Dados com Python</strong> e{' '}
          <strong>Desenvolvimento Back-End com Java</strong>. Minha trajetória combina tecnologia, 
          operações e melhoria contínua, com foco na criação de soluções eficientes, automatizadas e 
          orientadas a dados.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Desenvolvo projetos envolvendo <strong className="text-primary-600 dark:text-primary-400">Python</strong>,{' '}
          <strong className="text-primary-600 dark:text-primary-400">SQL</strong>,{' '}
          <strong className="text-primary-600 dark:text-primary-400">Power BI</strong> e{' '}
          <strong className="text-primary-600 dark:text-primary-400">automação de processos</strong>. 
          Tenho experiência tanto em ambiente industrial quanto corporativo.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
