import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919489486597"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:bg-green-600 hover:scale-110 transition-all z-50 group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20 group-hover:opacity-40" />
      <FaWhatsapp size={32} className="relative z-10" />
      
      {/* Tooltip */}
      <div className="absolute right-16 bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Chat with us!
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-white" />
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
