// src/components/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 mt-20">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center space-y-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Luis Eduardo Lopez Blas. Todos los derechos reservados.</p>

        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/Luise02"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/luis-lopez-218460328/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:luiselopezb06@gmail.com"
            className="hover:text-blue-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
