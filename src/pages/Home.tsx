import { motion } from 'framer-motion';
import { FaArrowRight, FaPaperPlane } from 'react-icons/fa';

type HomeProps = {
  scrollToSection: (id: string) => void;
};

const Home = ({ scrollToSection }: HomeProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="flex flex-col items-center text-center gap-6">
        {/* Imagen de perfil */}
  <motion.div
      whileHover={{ scale: 1.08, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      className="relative transition-all duration-300 cursor-pointer group"
      onClick={() => window.open('/docs/cv.pdf', '_blank')}
>
  <img
      src="/images/profile-pic.png"
      alt="Foto de perfil"
      className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md group-hover:shadow-xl"
  />
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-blue-600 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
    <span className="inline-flex items-center gap-1">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0A9 9 0 1112 3a9 9 0 019 9z" />
      </svg>
      Ver CV
    </span>
  </div>
</motion.div>

        {/* Texto + botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            ¡Hola! Soy Luis Eduardo
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
          Ing. Luis Lopez, Egresado de la carrera de Ingenieria de software
          </p>
          <div className="flex gap-4 justify-center">
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition transform hover:scale-105"
              whileHover={{ x: 5 }}
            >
              Ver proyectos <FaArrowRight className="text-sm" />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 border border-blue-600 text-blue-600 px-5 py-2 rounded-full shadow hover:bg-blue-50 transition transform hover:scale-105"
              whileHover={{ y: -2 }}
            >
              Contáctame <FaPaperPlane className="text-sm" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
