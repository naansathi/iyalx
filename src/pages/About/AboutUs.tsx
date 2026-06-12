import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Users, Award, Code2 } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '10+', icon: Award },
  { label: 'Students Placed', value: '2000+', icon: Users },
  { label: 'Projects Built', value: '500+', icon: Code2 },
  { label: 'Hiring Partners', value: '50+', icon: Target },
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Engineering',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Emily Davis',
    role: 'Lead UX Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop'
  }
];

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Iyal</title>
        <meta name="description" content="Learn more about Iyal, our mission, vision, and the team behind our world-class software training." />
      </Helmet>

      <div className="pt-24 pb-16 min-h-screen">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              Empowering the Next Generation of <span className="text-gradient">Developers</span>
            </h1>
            <p className="text-lg text-gray-400">
              At Iyal, we believe that quality tech education should be accessible, practical, and aligned with industry standards. We transform ambitious learners into professional software engineers.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#0A0F1C]/50 py-16 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="w-16 h-16 mx-auto glass rounded-2xl flex items-center justify-center mb-4 text-primary">
                    <stat.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-white font-poppins mb-1">{stat.value}</h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Founded in 2020, Iyal started with a simple mission: to bridge the gap between academic learning and industry expectations. We noticed that many graduates lacked the hands-on experience required by top tech companies.
                </p>
                <p>
                  Today, we've grown into a comprehensive software training and development company. We don't just teach code; we build real products. Our students work on live projects, interact with industry mentors, and graduate with a portfolio that speaks for itself.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl hidden md:block">
                <p className="text-2xl font-bold text-white mb-1">100%</p>
                <p className="text-sm text-gray-400">Commitment to Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-[#0A0F1C]/50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Meet Our Leadership</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Industry veterans dedicated to shaping the future of tech education.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <motion.div
                  key={idx}
                  className="glass p-6 rounded-2xl text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-2 border-primary/50 group-hover:border-secondary transition-colors">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 font-poppins">{member.name}</h3>
                  <p className="text-secondary text-sm font-medium">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default AboutUs;
