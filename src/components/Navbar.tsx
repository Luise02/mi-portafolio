import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css'; // Asegúrate de tener este archivo para animación

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const NavbarLinks = ({ closeMenuAndScroll, isDarkMode, toggleDarkMode, setMenuOpen }: any) => (
  <>
    <li>
      <a href="#home" onClick={(e) => closeMenuAndScroll(e, '#home')} className="hover:text-blue-500 transition-colors">Inicio</a>
    </li>
    <li>
      <a href="#about" onClick={(e) => closeMenuAndScroll(e, '#about')} className="hover:text-blue-500 transition-colors">Sobre mí</a>
    </li>
    <li>
      <a href="#projects" onClick={(e) => closeMenuAndScroll(e, '#projects')} className="hover:text-blue-500 transition-colors">Proyectos</a>
    </li>
    <li>
      <a href="#contact" onClick={(e) => closeMenuAndScroll(e, '#contact')} className="hover:text-blue-500 transition-colors">Contáctame</a>
    </li>
    <li>
      <button
        onClick={() => {
          toggleDarkMode();
          setMenuOpen(false);
        }}
        className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        {isDarkMode ? '🌙' : '☀️'}
      </button>
    </li>
  </>
);

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenuAndScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full shadow-md fixed top-0 left-0 z-50 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="w-full max-w-[90rem] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <div className="text-2xl font-bold">Mi Portafolio</div>

        <div className="block sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none transition-transform duration-300 transform hover:scale-110"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <ul
          className={`
            ${isMobile
              ? `absolute top-full left-0 w-full bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out overflow-hidden flex-col gap-4 items-start p-4 z-40 transform origin-top animate-mobile-open ${menuOpen ? 'flex' : 'hidden'}`
              : 'hidden sm:flex gap-6 items-center'}
          `}
        >
          <NavbarLinks 
            closeMenuAndScroll={closeMenuAndScroll} 
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode} 
            setMenuOpen={setMenuOpen} 
          />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
