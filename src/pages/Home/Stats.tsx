import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCard = ({ end, label, suffix = '+' }: { end: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;
      const duration = 2000; // 2 seconds

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;

        // Easing function (easeOutQuart)
        const easeOut = 1 - Math.pow(1 - progress / duration, 4);

        if (progress < duration) {
          setCount(Math.min(Math.floor(end * easeOut), end));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [end, isInView]);

  return (
    <motion.div
      ref={ref}
      className="glass p-8 rounded-2xl flex flex-col items-center justify-center border-t-2 border-t-primary/50 relative overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-poppins relative z-10">
        {count}{suffix}
      </h3>
      <p className="text-gray-400 font-medium text-center relative z-10">{label}</p>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    { end: 5000, label: "Students Trained" },
    { end: 50, label: "Premium Courses" },
    { end: 10, label: "Expert Trainers" },
    { end: 200, label: "Placements" },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} end={stat.end} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
