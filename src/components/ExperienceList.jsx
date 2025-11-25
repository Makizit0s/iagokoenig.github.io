import React from 'react';
import { motion } from 'framer-motion';

const ExperienceList = () => {
  const experiences = [
    {
      id: 1,
      title: 'Assistente de Planejamento',
      company: 'LIVE! – Empresa Têxtil',
      description: 'Promovido de Jovem Aprendiz a Assistente de Planejamento. Trabalho com dados operacionais, controle de produção e otimização de rotinas usando ferramentas 365 e Python',
    },
    {
      id: 2,
      title: 'Jovem Aprendiz',
      company: 'Montadora Progressul',
      description: 'Atuação na indústria eletroeletrônica, auxiliando em rotinas de montagem e processos industriais',
    },
    {
      id: 3,
      title: 'Desenvolvedor & Criador',
      company: 'LLia Bot',
      description: 'Desenvolvimento de bot para comunidade Discord com automações e ferramentas de moderação',
    },
  ];

  return (
    <ul className="space-y-4">
      {experiences.map((exp, index) => (
        <motion.li
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ x: 5 }}
          className="pl-4 border-l-4 border-primary-400 dark:border-primary-600"
        >
          <div className="font-semibold text-gray-900 dark:text-white">
            {exp.title}
          </div>
          <div className="text-sm text-primary-600 dark:text-primary-400 font-medium">
            {exp.company}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {exp.description}
          </p>
        </motion.li>
      ))}
    </ul>
  );
};

export default ExperienceList;
