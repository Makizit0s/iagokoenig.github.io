import React from 'react';
import { motion } from 'framer-motion';

const Career = () => {
  const careerPath = [
    {
      id: 1,
      company: 'Montadora Progressul',
      role: 'Jovem Aprendiz',
      period: '',
      description: 'Atuação inicial na indústria eletroeletrônica, auxiliando em rotinas de montagem e processos. Desenvolvi disciplina, atenção aos detalhes e entendimento de processos industriais.',
      icon: '⚙️',
    },
    {
      id: 2,
      company: 'LIVE! – Empresa Têxtil',
      role: 'Jovem Aprendiz → Assistente de Planejamento',
      period: '',
      description: 'Fui promovido ao cargo de Assistente de Planejamento devido ao meu desempenho, domínio de Excel e criação de automações. Trabalhei com dados operacionais, controle de produção e otimização de rotinas usando ferramentas 365 e Python.',
      icon: '📊',
      highlight: true,
    },
  ];

  return (
    <div className="space-y-6">
      {careerPath.map((job, index) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          whileHover={{ x: 8 }}
          className={`relative pl-10 pb-6 border-l-4 ${
            job.highlight 
              ? 'border-primary-600 dark:border-primary-500' 
              : 'border-gray-300 dark:border-gray-600'
          }`}
        >
          <div className={`absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-xl ${
            job.highlight
              ? 'bg-primary-600 dark:bg-primary-700 shadow-lg shadow-primary-500/50'
              : 'bg-gray-300 dark:bg-gray-600'
          }`}>
            {job.icon}
          </div>

          <div className={`${
            job.highlight 
              ? 'bg-primary-50 dark:bg-primary-900/20 p-5 rounded-lg' 
              : ''
          }`}>
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  {job.company}
                </h4>
                <p className={`text-sm font-semibold ${
                  job.highlight 
                    ? 'text-primary-700 dark:text-primary-400' 
                    : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {job.role}
                </p>
              </div>
              {job.period && (
                <span className="text-sm text-gray-500 dark:text-gray-400 italic">
                  {job.period}
                </span>
              )}
            </div>
            
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              {job.description}
            </p>

            {job.highlight && (
              <div className="mt-3 flex items-center gap-2 text-sm font-medium text-primary-700 dark:text-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                Promoção por desempenho
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Career;
