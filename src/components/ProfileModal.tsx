// src/components/ProfileModal.tsx
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modal = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } }
};

const ProfileModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={modal}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="bg-white dark:bg-gray-900 p-6 rounded-xl max-w-sm w-full shadow-lg text-center"
      >
        <img
          src="/images/profile-pic.png"
          alt="Foto de perfil"
          className="w-32 h-40 mx-auto object-cover rounded-[40%] border-2 border-blue-600 mb-4"
        />
        <a
          href="/docs/cv.pdf"
          download
          className="flex items-center justify-center gap-2 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          <FaDownload /> Descargar CV
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProfileModal;
