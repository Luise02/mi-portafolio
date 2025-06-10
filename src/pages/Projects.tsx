import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';

const Projects = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">Mis Proyectos</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
        Actualmente en mantenimiento. Estamos preparando algo especial para ti.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-6 py-4 rounded-xl shadow-md flex items-center gap-3"
      >
        <motion.span
          animate={{ rotate: [0, 20, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-2xl"
        >
          <FaTools />
        </motion.span>
        🚧 Próximamente: Nuevos proyectos en camino...
      </motion.div>
    </section>
  );
};

export default Projects;
