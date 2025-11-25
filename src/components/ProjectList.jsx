import React from 'react';
import { motion } from 'framer-motion';

const ProjectList = () => {
  const projects = [
    {
      id: 1,
      name: 'Dashboard Têxtil (LIVE)',
      description: 'Dashboard inicial para gestão de briefing e estoque usando dados simulados',
      tags: ['Power BI', 'Dashboard', 'Gestão'],
    },
    {
      id: 2,
      name: 'Site Anônimo Restrito',
      description: 'Projeto com Python, HTML, CSS e JS para acesso restrito e seguro',
      tags: ['Python', 'Web', 'Segurança'],
    },
    {
      id: 3,
      name: 'LLia Bot',
      description: 'Bot de comunidade Discord com automações e ferramentas de moderação',
      tags: ['Discord', 'Bot', 'Automação'],
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border-2 border-transparent hover:border-primary-400 dark:hover:border-primary-600 transition-all"
        >
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
            {project.name}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectList;
