// src/App.tsx
import { useEffect} from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';
import { motion } from 'framer-motion';


function App() {
  //const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.documentElement.lang = 'es';

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      document.querySelectorAll<HTMLElement>('.parallax').forEach((el) => {
        const speed = Number(el.dataset.speed) || 1;
        el.style.transform = `translateY(${scrollPosition / speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className="relative z-0 font-sans">
      {/* Fondo animado por gradiente */}
      <div className="fixed inset-0 -z-20 animate-gradient bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 bg-[length:200%_200%]" />

      {/* Figuras geométricas flotantes con parallax */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" id="parallax-layer">
        <span className="absolute w-24 h-24 bg-blue-300 dark:bg-blue-800 opacity-20 rounded-full top-10 left-10 parallax" data-speed="2" />
        <span className="absolute w-16 h-16 bg-pink-300 dark:bg-pink-800 opacity-20 rotate-45 top-1/3 left-2/3 parallax" data-speed="1" />
        <span className="absolute w-20 h-20 bg-purple-300 dark:bg-purple-800 opacity-10 top-2/3 left-1/4 parallax" data-speed="3" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10">
        <Navbar />
        <section id="home">
          <Home scrollToSection={scrollToSection} />
        </section>
        <motion.section id="about" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <About />
        </motion.section>
        <motion.section id="projects" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Projects />
        </motion.section>
        <motion.section id="contact" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Contact />
        </motion.section>
        <Footer />
      </div>
    </div>
  );
}
export default App;
