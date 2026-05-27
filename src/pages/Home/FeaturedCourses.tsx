import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: "MERN Stack Development",
    category: "Full Stack",
    rating: 4.9,
    reviews: 1240,
    duration: "6 Months",
    modules: 12,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    title: "Java Full Stack Development",
    category: "Full Stack",
    rating: 4.8,
    reviews: 980,
    duration: "5 Months",
    modules: 10,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 3,
    title: "Python Data Science & AI",
    category: "Data Science",
    rating: 4.9,
    reviews: 850,
    duration: "6 Months",
    modules: 14,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
    gradient: "from-green-500/20 to-emerald-500/20"
  }
];

const FeaturedCourses = () => {
  return (
    <section className="py-24 relative bg-[#0A0F1C]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-poppins">
              Explore Our <span className="text-gradient">Premium Programs</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Master the most in-demand tech skills with our industry-aligned curriculum and real-time project development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/courses"
              className="flex items-center gap-2 text-secondary hover:text-white transition-colors font-medium group"
            >
              View All Courses
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors duration-300"
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

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="text-yellow-400 fill-yellow-400" size={16} />
                  <span className="text-white font-medium">{course.rating}</span>
                  <span className="text-gray-400 text-sm">({course.reviews} reviews)</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 font-poppins group-hover:text-primary transition-colors">
                  {course.title}
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-6 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-secondary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-primary" />
                    <span>{course.modules} Modules</span>
                  </div>
                </div>

                <Link
                  to={`/courses/${course.id}`}
                  className="w-full py-3 rounded-xl bg-white/5 flex items-center justify-center gap-2 text-white font-medium hover:bg-primary transition-colors duration-300 group/btn"
                >
                  View Details
                  <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedCourses;
