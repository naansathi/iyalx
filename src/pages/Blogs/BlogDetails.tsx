import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { allBlogs } from '../../data/blogs';
import Markdown from 'react-markdown';

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const blog = allBlogs.find(b => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
        <p className="text-gray-400 mb-8">The article you are looking for does not exist or has been removed.</p>
        <Link to="/blogs" className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/80 transition-colors">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} | IyalX</title>
        <meta name="description" content={blog.excerpt} />
      </Helmet>

      <div className="pt-24 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link to="/blogs" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm font-medium">
            <ArrowLeft size={16} /> Back to all articles
          </Link>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full flex items-center gap-1">
                <Tag size={12} />
                {blog.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-poppins leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 pb-8 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                  {blog.author.charAt(0)}
                </div>
                <span className="font-medium text-gray-300">{blog.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} className="text-primary" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} className="text-secondary" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-xl border border-white/10"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="prose prose-lg prose-invert max-w-none text-gray-300 font-inter prose-headings:text-white prose-p:text-gray-300 prose-a:text-primary prose-strong:text-white"
          >
            <Markdown>{blog.content}</Markdown>
          </motion.div>

          {/* Footer CTA */}
          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4 font-poppins">Ready to accelerate your career?</h3>
            <p className="text-gray-400 mb-6">Join our premium courses and learn from industry experts.</p>
            <Link to="/courses" className="inline-flex px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold hover:shadow-lg hover:shadow-primary/30 transition-all items-center gap-2">
              Explore Courses
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default BlogDetails;
