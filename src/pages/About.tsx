import { motion } from 'framer-motion';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript,
  SiTailwindcss, SiGit, SiGithub, SiVite, SiPostgresql,
  SiNodedotjs
} from 'react-icons/si';

const techList = [
  { name: 'HTML5', icon: SiHtml5, color: '#e34c26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
  { name: 'JavaScript ES6+', icon: SiJavascript, color: '#f7df1e' },
  { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'Vite', icon: SiVite, color: '#646cff' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Git', icon: SiGit, color: '#f05032' },
  { name: 'GitHub',icon: SiGithub,color: 'currentColor',className: 'text-[#181717] dark:text-white' }
  
];

const About = () => {
  return (
    <motion.section className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">
        Sobre mí
      </h2>

      <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
        Soy un desarrollador frontend apasionado por construir interfaces intuitivas, accesibles y visualmente atractivas.
        Me formé de manera autodidacta y a través de cursos especializados, y disfruto combinar diseño con lógica para crear experiencias web fluidas.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
        Mi enfoque se centra en el uso de tecnologías modernas como <strong>React</strong>, <strong>TypeScript</strong> y <strong>TailwindCSS</strong>,
        junto con buenas prácticas de desarrollo como control de versiones con <strong>Git</strong>, estructura de componentes reutilizables
        y enfoque mobile-first.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-10">
        Además de lo técnico, me motiva el aprendizaje constante y colaborar en proyectos donde pueda aportar tanto código como ideas.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Tecnologías que uso:</h3>

      <ul className="flex flex-wrap gap-4">
        {techList.map(({ name, icon: Icon, color }) => (
          <motion.li
            key={name}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium shadow-sm hover:shadow-md cursor-pointer"
            style={{ backgroundColor: `${color}20`, color: color }}
          >
            <Icon className="text-lg" />
            {name}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default About;
