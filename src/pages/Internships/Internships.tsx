import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allInternships } from '../../data/internships';

const Internships = () => {
  return (
    <>
      <Helmet>
        <title>Internship Programs | Iyal</title>
        <meta name="description" content="Kickstart your career with Iyal internship programs in web development, data science, and UI/UX design." />
      </Helmet>

      <div className="pt-24 pb-16 min-h-screen">

        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Launch Your Career with <span className="text-gradient">Real Experience</span>
            </h1>
            <p className="text-lg text-gray-400">
              Stop learning in a silo. Join our internship programs, work on live industry projects, and gain the hands-on experience top tech companies demand.
            </p>
          </motion.div>
        </div>

        {/* Internships Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allInternships.map((internship, index) => (
              <motion.div
                key={internship.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden flex flex-col group hover:border-primary/50 transition-colors duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t ${internship.gradient} mix-blend-overlay z-10`} />
                  <img
                    src={internship.image}
                    alt={internship.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-md rounded-full text-white border border-white/10">
                      {internship.category}
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-primary/80 backdrop-blur-md rounded-full text-white border border-primary/50">
                      {internship.openings} Openings
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4 font-poppins group-hover:text-primary transition-colors">
                    {internship.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-6 border-b border-white/10 pb-6">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-secondary" />
                      <span>{internship.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-emerald-400" />
                      <span>{internship.stipend}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-8 flex-grow">
                    {internship.description.length > 120 ? internship.description.substring(0, 120) + '...' : internship.description}
                  </p>

                  <div className="mt-auto">
                    <Link
                      to={`/internships/${internship.id}`}
                      className="w-full py-3 rounded-xl bg-white/5 flex items-center justify-center gap-2 text-white font-medium hover:bg-primary transition-colors duration-300 group/btn"
                    >
                      View Details & Apply
                      <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default Internships;
