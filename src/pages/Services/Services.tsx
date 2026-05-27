import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Code, Smartphone, Layout, Megaphone, Presentation, MonitorPlay } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom, responsive, and high-performance web applications built with modern frameworks like React and Next.js.',
    icon: Code,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile experiences for iOS and Android using React Native and Flutter.',
    icon: Smartphone,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create intuitive, engaging, and beautiful digital experiences.',
    icon: Layout,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Digital Marketing & Branding',
    description: 'Data-driven marketing strategies to elevate your brand presence and drive measurable growth.',
    icon: Megaphone,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Corporate Training',
    description: 'Upskill your workforce with customized, instructor-led training programs in the latest technologies.',
    icon: Presentation,
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Internship Programs',
    description: 'Hands-on, project-based internship programs designed to make students industry-ready.',
    icon: MonitorPlay,
    gradient: 'from-indigo-500 to-blue-500'
  }
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | IyalX</title>
        <meta name="description" content="Explore IyalX services including web development, mobile apps, corporate training, and digital marketing." />
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
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-gray-400">
              We provide end-to-end IT solutions, from training the next generation of developers to building enterprise-grade software for our clients.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="glass p-8 rounded-2xl group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Background Glow */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />

                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.gradient} text-white shadow-lg`}>
                  <service.icon size={28} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 font-poppins">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6">
                  <a href="#" className="text-secondary text-sm font-medium hover:text-white transition-colors flex items-center gap-1 group/link">
                    Learn more
                    <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <motion.div
            className="glass p-12 rounded-3xl text-center relative overflow-hidden border border-primary/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">Ready to Start a Project?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Whether you need a full-stack application developed or want to upskill your team, we are here to help you achieve your goals.
              </p>
              <button className="px-8 py-4 rounded-full bg-white text-[#0A0F1C] font-bold hover:bg-gray-200 transition-colors">
                Contact Our Team
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </>
  );
};

export default Services;
