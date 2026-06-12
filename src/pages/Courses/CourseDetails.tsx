import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star, Clock, BookOpen, CheckCircle, ArrowLeft, Download, PlayCircle } from 'lucide-react';
import { allCourses } from '../../data/courses';

const CourseDetails = () => {
  const { id } = useParams<{ id: string }>();
  const course = allCourses.find(c => c.id === Number(id));

  if (!course) {
    return (
      <div className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Course Not Found</h1>
        <p className="text-gray-400 mb-8">The course you are looking for does not exist or has been removed.</p>
        <Link to="/courses" className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/80 transition-colors">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{course.title} | Iyal</title>
        <meta name="description" content={course.description} />
      </Helmet>

      <div className="pt-20 pb-16 min-h-screen">

        {/* Hero Banner */}
        <div className="relative pt-16 pb-24 border-b border-white/10 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r ${course.gradient} opacity-20`} />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link to="/courses" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm font-medium">
              <ArrowLeft size={16} /> Back to all courses
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary border border-primary/30 rounded-full">
                    {course.category}
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 text-gray-300 rounded-full">
                    {course.level}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins leading-tight">
                  {course.title}
                </h1>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
                  <div className="flex items-center gap-2">
                    <Star className="text-yellow-400 fill-yellow-400" size={18} />
                    <span className="text-white font-medium text-base">{course.rating}</span>
                    <span>({course.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={18} className="text-secondary" />
                    <span>{course.modules} Modules</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] transition-all flex items-center justify-center gap-2 text-lg">
                    Enroll Now - {course.price}
                  </button>
                  <button className="px-8 py-4 rounded-xl glass border border-white/10 text-white font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                    <Download size={20} />
                    Syllabus
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10 group aspect-video"
              >
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors cursor-pointer">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <PlayCircle size={40} className="ml-1" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Course Details Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left Column - Curriculum & Skills */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 font-poppins">Skills you will master</h2>
                <div className="flex flex-wrap gap-3">
                  {course.skills.map((skill, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-6 font-poppins">Curriculum Highlights</h2>
                <div className="glass rounded-2xl p-6 md:p-8 space-y-6">
                  {course.curriculum.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">{item}</h4>
                        <p className="text-gray-400 text-sm">Includes hands-on exercises, assignments, and real-time project integration.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Features Widget */}
            <div className="space-y-8">
              <div className="glass rounded-2xl p-6 border-t-2 border-primary/50 sticky top-28">
                <h3 className="text-xl font-bold text-white mb-6 font-poppins">Course Features</h3>
                <ul className="space-y-4">
                  {[
                    "100% Job Placement Assistance",
                    "Live Interactive Classes",
                    "Real-time Industry Projects",
                    "1-on-1 Mentorship",
                    "Global Certification",
                    "Lifetime Access to Materials"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-secondary shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default CourseDetails;
