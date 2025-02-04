import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
Transformation des informations et Des Données à           <br />
            <span className="text-primary-500 dark:text-primary-400">des  Recommandations et Leviers Stratégiques 
            </span>
          </h1>

          <div className="mb-8 text-xl text-gray-600 dark:text-gray-400">
            <TypeAnimation
              sequence={[
                'Je suis Ramzi Anass, Je maitrise  ',
                2000,
                'la Veille Stratégique',
                2000,
                'Market & Competitive Intelligence',
                2000,
                'Visualisation des informations et la Cartographie',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
         <b> Manager De l'information , Chargé de Veille Strategique / Competitve Intelligence Analyste, et Data Analyst.</b>
           <br></br>EX DN Investor,EX POD Designer, EX Data Evaluator.

          </p>

          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-white transition-colors hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700"
          >
            Mes Projets
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;