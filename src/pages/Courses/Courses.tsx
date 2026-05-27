import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Star, Clock, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { allCourses } from '../../data/courses';

const categories = ["All", "Software Development", "AI & Data", "Cybersecurity", "Cloud & DevOps", "Digital Marketing", "Testing"];

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = allCourses.filter(course => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Courses | IyalX</title>
        <meta name="description" content="Browse our premium software training courses in Full Stack Development, Data Science, AI, and more." />
      </Helmet>

      <div className="pt-24 pb-16 min-h-screen">

        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Accelerate Your Career with <span className="text-gradient">Industry-Led Courses</span>
            </h1>
            <p className="text-lg text-gray-400">
              Master the skills that top tech companies are looking for. Learn from experts and build real-world projects.
            </p>
          </motion.div>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 glass p-4 rounded-2xl">

            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <Filter size={20} className="text-gray-400 mr-2 hidden md:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeCategory === cat
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0A0F1C] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
              <Search className="absolute left-3 top-3 text-gray-500" size={18} />
            </div>

          </div>
        </div>

        {/* Courses Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredCourses.map((course) => (
                <motion.div
                  layout
                  key={course.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-2xl overflow-hidden flex flex-col group hover:border-primary/50"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-t ${course.gradient} mix-blend-overlay z-10`} />
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-md rounded-full text-white border border-white/10">
                        {course.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                      <span className="text-white font-medium">{course.rating}</span>
                      <span className="text-gray-400 text-sm">({course.reviews})</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 font-poppins group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-secondary mb-4">{course.level}</p>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6 border-y border-white/10 py-4 mt-auto">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-primary" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen size={16} className="text-secondary" />
                        <span>{course.modules} Modules</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-white font-poppins">{course.price}</span>
                      <Link
                        to={`/courses/${course.id}`}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-2"
                      >
                        Enroll
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400">No courses found matching your criteria.</p>
            </div>
          )}
        </div>

      </div>
    </>
  );
};

export default Courses;
