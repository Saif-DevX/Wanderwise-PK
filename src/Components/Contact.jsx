import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    formRef.current.reset();
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 px-6 md:px-12 overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-10 left-0 w-80 h-80 bg-cyan-300/30 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-300/30 blur-3xl rounded-full -z-10 animate-pulse" />

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-cyan-400 dark:to-blue-500">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-xl mx-auto">
          Have questions or ready to start your journey? Drop us a message.
        </p>
      </div>

      {/* Form + Contact Info */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg space-y-6"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-5 py-3 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-sm text-gray-800 dark:text-white"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-5 py-3 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-sm text-gray-800 dark:text-white"
          />
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Your Message"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-sm text-gray-800 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            Send Message
          </button>
          {sent && (
            <p className="text-green-600 dark:text-green-400 text-sm pt-2 cursor-pointer">
              ✅ Message processed (demo only).
            </p>
          )}
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-gray-700 dark:text-gray-300"
        >
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-600 text-xl" />
            <span>Example999@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-blue-600 text-xl" />
            <span>+92 312 3456789</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-600 text-xl" />
            <span>Punjab, Pakistan</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

