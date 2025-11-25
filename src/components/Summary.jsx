import React from 'react';
import { motion } from 'framer-motion';

const Summary = () => {
  const highlights = [
    {
      id: 1,
      icon: '🎯',
      title: 'Foco',
      description: 'Engenharia de Software, Dados e Sistemas',
    },
    {
      id: 2,
      icon: '🚀',
      title: 'Especialidade',
      description: 'Automatização de processos e análise de dados',
    },
    {
      id: 3,
      icon: '💡',
      title: 'Diferenciais',
      description: 'Soluções inteligentes e orientadas a resultados',
    },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-primary-50 via-primary-100 to-primary-50 dark:from-primary-900/30 dark:via-primary-800/30 dark:to-primary-900/30 p-6 rounded-xl border-2 border-primary-200 dark:border-primary-700"
      >
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          Profissional iniciante com <strong className="text-primary-700 dark:text-primary-400">experiência prática</strong> e 
          capacidade de <strong className="text-primary-700 dark:text-primary-400">automatizar processos</strong>, 
          estruturar dados e propor <strong className="text-primary-700 dark:text-primary-400">soluções inteligentes</strong>. 
          Busco evoluir na área de tecnologia com foco em engenharia de software, dados e sistemas.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((highlight, index) => (
          <motion.div
            key={highlight.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white dark:bg-gray-700 rounded-lg p-5 shadow-md border-l-4 border-primary-600 dark:border-primary-500"
          >
            <div className="text-4xl mb-3">{highlight.icon}</div>
            <h5 className="font-bold text-gray-900 dark:text-white mb-2">
              {highlight.title}
            </h5>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {highlight.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center pt-4"
      >
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          Disponível para projetos e oportunidades que envolvam tecnologia, dados e inovação.
        </p>
      </motion.div>
    </div>
  );
};

export default Summary;
