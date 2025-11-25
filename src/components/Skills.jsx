import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      category: 'Data & Analytics',
      icon: '📊',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 'pandas, numpy, automações' },
        { name: 'Power BI', level: 'DAX, ETL, dashboards' },
        { name: 'Excel', level: 'intermediário/avançado' },
        { name: 'SQL', level: 'consultas e modelagem' },
      ],
    },
    {
      id: 2,
      category: 'Desenvolvimento',
      icon: '💻',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Java', level: 'back-end' },
        { name: 'Python', level: 'scripts e automações' },
        { name: 'React', level: 'iniciante' },
        { name: 'Git/GitHub', level: 'controle de versão' },
      ],
    },
    {
      id: 3,
      category: 'Ferramentas',
      icon: '🛠️',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Microsoft 365', level: 'produtividade' },
        { name: 'AppScript', level: 'automações Google' },
        { name: 'Windows / Linux', level: 'sistemas operacionais' },
      ],
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skillCategories.map((category, catIndex) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: catIndex * 0.1 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-primary-400 dark:hover:border-primary-600 transition-all"
        >
          <div className={`bg-gradient-to-r ${category.color} p-4 text-white`}>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{category.icon}</span>
              <h4 className="text-lg font-bold">{category.category}</h4>
            </div>
          </div>

          <div className="p-5 space-y-3">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                className="group"
              >
                <div className="flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-1 group-hover:scale-125 transition-transform">
                    ▸
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
