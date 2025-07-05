import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import aboutImg from "../assets/images/about.jpg";

const stats = [
  { label: "Trips Booked", value: 4800 },
  { label: "Happy Travelers", value: 3600 },
  { label: "Destinations", value: 120 },
];

const timeline = [
  { year: "2020", text: "Founded with a dream to make travel accessible." },
  { year: "2021", text: "Reached 1,000 bookings milestone." },
  { year: "2022", text: "Expanded to 20+ countries." },
  { year: "2023", text: "Launched mobile booking experience." },
];

const About = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartCount(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Layered background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 opacity-30 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 opacity-30 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Image and Intro Text Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row items-center gap-10 mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <img
              src={aboutImg}
              alt="About WanderWise"
              className="rounded-3xl shadow-2xl w-full object-cover border-4 border-blue-500 dark:border-cyan-500"
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-white">
              About WanderWise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
              WanderWise is your companion in exploring the world is most breathtaking destinations with ease and confidence.
            </p>
          </motion.div>
        </motion.div>

        {/* Animated stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-cyan-400">
                {startCount ? <CountUp end={stat.value} duration={2} /> : 0}+
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline cards */}
        <div className="mt-16 space-y-8">
          {timeline.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-blue-500 dark:border-cyan-500 text-left"
            >
              <h4 className="text-xl font-bold text-blue-700 dark:text-white">{event.year}</h4>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{event.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
