import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

const skills = [
  
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-12 text-center text-4xl font-bold">Description</h2>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-semibold">Résumé Professionnelle</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
               Diplômé d'un Master en Management de l'Information de l’École des Sciences de l'Information de Rabat, avec une Licence en Gestion de la FP de Béni Mellal. en plus des expériences Pro , Stage En veille Stratégique et Analyse de données, Freelance (Commerce du Nom de domaines, POD, Data Annotation & Evaluation)
              </p>

              <div className="mb-6">
                <h4 className="mb-2 text-xl font-semibold">Education</h4>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
                  <li>Master spécialisé en Management de l'information - Ecole des Sciences de linformation à Rabat  </li>
                  <li>Licence Fondamentale en Sciences économiques et Gestion - FP Béni Mellal</li>
                  <li>Baccaluréat Scientifique - Lycée Zerktouni Béni Mellal</li>
                </ul>
              </div>

              

              <a
                href=""
                className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-white transition-colors hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700"
              >
                <FileDown className="h-5 w-5" />
           Télechargez CV
              </a>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;