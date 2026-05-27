import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allBlogs } from '../../data/blogs';

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Blog | IyalX</title>
        <meta name="description" content="Read the latest insights, tutorials, and news from the IyalX team on software development, tech careers, and design." />
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
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-white">
              Insights & <span className="text-gradient">Knowledge</span>
            </h1>
            <p className="text-lg text-gray-300">
              Stay updated with the latest trends in technology, career advice for developers, and deep dives into modern software engineering.
            </p>
          </motion.div>
        </div>

        {/* Blogs Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden flex flex-col group hover:border-primary/50 transition-colors duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-md rounded-full text-white border border-white/10">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-primary" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-secondary" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-poppins group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-gray-200 dark:border-white/10 pt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">
                        {blog.author.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-white">{blog.author}</span>
                    </div>
                    <Link
                      to={`/blogs/${blog.id}`}
                      className="text-primary text-sm font-medium hover:text-secondary transition-colors flex items-center gap-1 group/link"
                    >
                      Read More
                      <ArrowRight size={14} className="transform group-hover/link:translate-x-1 transition-transform" />
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

export default Blogs;
