import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Terminal, Monitor, Layout, Database, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background via-background to-[#050811] opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-secondary text-sm font-medium mb-6">
              🚀 Premium Software Training
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Build Your <br />
            <span className="text-gradient">Tech Career</span> <br />
            with IyalX
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform from a learner to a professional developer. Real-time projects, industry mentors, and 100% placement support.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/courses"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Courses
            </Link>
            <Link
              to="/internships"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all duration-300"
            >
              Join Internship
            </Link>
          </motion.div>
        </div>

        {/* Floating Graphics Content */}
        <motion.div
          className="flex-1 w-full relative h-[400px] sm:h-[500px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Main central glass card */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 glass rounded-2xl flex items-center justify-center flex-col gap-4 border border-white/20 shadow-[0_0_50px_rgba(0,212,255,0.15)] z-20"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Code size={48} className="text-secondary" />
            <span className="font-poppins font-semibold text-lg text-white">Full Stack Mastery</span>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-[10%] left-[10%] p-4 glass rounded-xl z-10"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
          >
            <Layout className="text-primary" />
          </motion.div>

          <motion.div
            className="absolute bottom-[20%] left-[5%] p-4 glass rounded-xl z-30"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
          >
            <Terminal className="text-accent" />
          </motion.div>

          <motion.div
            className="absolute top-[15%] right-[10%] p-4 glass rounded-xl z-10"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }}
          >
            <Database className="text-emerald-400" />
          </motion.div>

          <motion.div
            className="absolute bottom-[25%] right-[5%] p-4 glass rounded-xl z-30"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 0.8 }}
          >
            <Cpu className="text-secondary" />
          </motion.div>

          <motion.div
            className="absolute -bottom-[5%] left-1/2 -translate-x-1/2 p-4 glass rounded-xl z-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.2 }}
          >
            <Monitor className="text-indigo-400" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
