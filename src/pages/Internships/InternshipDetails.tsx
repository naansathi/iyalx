import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, Briefcase, MapPin, CheckCircle, ArrowLeft, Users, Send } from 'lucide-react';
import { allInternships } from '../../data/internships';

const InternshipDetails = () => {
  const { id } = useParams<{ id: string }>();
  const internship = allInternships.find(i => i.id === Number(id));

  if (!internship) {
    return (
      <div className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Internship Not Found</h1>
        <p className="text-gray-400 mb-8">The internship position you are looking for does not exist or has been closed.</p>
        <Link to="/internships" className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/80 transition-colors">
          View All Internships
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{internship.title} Internship | IyalX</title>
        <meta name="description" content={internship.description} />
      </Helmet>

      <div className="pt-20 pb-16 min-h-screen">

        {/* Hero Banner */}
        <div className="relative pt-16 pb-24 border-b border-white/10 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r ${internship.gradient} opacity-20`} />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link to="/internships" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm font-medium">
              <ArrowLeft size={16} /> Back to all internships
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary border border-primary/30 rounded-full">
                    {internship.category}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins leading-tight">
                  {internship.title}
                </h1>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {internship.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-primary" />
                    <span className="font-medium text-white">{internship.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-secondary" />
                    <span className="font-medium text-white">{internship.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={18} className="text-emerald-400" />
                    <span className="font-medium text-white">{internship.stipend}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-orange-400" />
                    <span className="font-medium text-white">{internship.openings} Openings</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] transition-all flex items-center justify-center gap-2 text-lg">
                    Apply Now
                    <Send size={18} />
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10 aspect-video hidden lg:block"
              >
                <img src={internship.image} alt={internship.title} className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Details Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 font-poppins">Key Responsibilities</h2>
                <div className="glass rounded-2xl p-6 md:p-8 space-y-4">
                  {internship.responsibilities.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <CheckCircle className="text-primary shrink-0 mt-0.5" size={20} />
                      <p className="text-gray-300 text-lg leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-6 font-poppins">Requirements & Skills</h2>
                <div className="glass rounded-2xl p-6 md:p-8 space-y-4">
                  {internship.requirements.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <CheckCircle className="text-secondary shrink-0 mt-0.5" size={20} />
                      <p className="text-gray-300 text-lg leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Application Widget */}
            <div className="space-y-8">
              <div className="glass rounded-2xl p-6 border-t-2 border-primary/50 sticky top-28">
                <h3 className="text-xl font-bold text-white mb-4 font-poppins">Why Intern with IyalX?</h3>
                <p className="text-gray-400 text-sm mb-6">
                  We don't just assign tasks; we mentor you. Join a culture of innovation and kickstart your career.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Pre-Placement Offer (PPO) Opportunity",
                    "Certificate of Experience",
                    "Flexible Working Hours",
                    "Direct Mentorship from Experts"
                  ].map((perk, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                      <span className="text-gray-300 text-sm">{perk}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-primary transition-all flex items-center justify-center gap-2">
                  Share this Opening
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default InternshipDetails;
