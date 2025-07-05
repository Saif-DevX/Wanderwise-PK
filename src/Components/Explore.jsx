import { motion } from "framer-motion";
import { FaStar, FaMapMarkerAlt, FaHiking, FaUmbrellaBeach, FaLandmark, FaUsers, FaBinoculars } from "react-icons/fa";

const categories = [
  {
    icon: <FaHiking className="text-4xl text-cyan-500" />,
    title: "Adventure Trips",
    description: "Hike, climb, and explore thrilling terrains around the world.",
    rating: 4.8,
    mapUrl: "https://www.google.com/maps?q=mountains",
  },
  {
    icon: <FaUmbrellaBeach className="text-4xl text-yellow-400" />,
    title: "Beach Getaways",
    description: "Relax on the most serene and stunning beaches globally.",
    rating: 4.7,
    mapUrl: "https://www.google.com/maps?q=beaches",
  },
  {
    icon: <FaLandmark className="text-4xl text-red-400" />,
    title: "Cultural Tours",
    description: "Immerse yourself in rich history and vibrant cultures.",
    rating: 4.6,
    mapUrl: "https://www.google.com/maps?q=historical+places",
  },
  {
    icon: <FaUsers className="text-4xl text-green-500" />,
    title: "Family Holidays",
    description: "Fun and safe adventures for the whole family to enjoy.",
    rating: 4.9,
    mapUrl: "https://www.google.com/maps?q=family+destinations",
  },
  {
    icon: <FaBinoculars className="text-4xl text-purple-500" />,
    title: "Wildlife Safaris",
    description: "Get close to nature on guided wildlife expeditions.",
    rating: 4.8,
    mapUrl: "https://www.google.com/maps?q=wildlife+parks",
  },
];

const Explore = () => {
  return (
    <section
      id="explore"
      className="relative py-28 bg-gradient-to-b from-blue-50 via-white to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 md:px-12 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl animate-pulse -z-10" />

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
          Explore Experiences
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          Choose your adventure — from thrilling escapades to peaceful escapes.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {categories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative overflow-hidden bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-8 text-center border border-blue-100 dark:border-gray-700 hover:scale-[1.03] transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 dark:text-cyan-400 group-hover:underline">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
              {item.description}
            </p>

            {/* ⭐ Rating */}
            <div className="mt-4 flex justify-center items-center gap-1 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={i < Math.round(item.rating) ? "opacity-100" : "opacity-30"}
                />
              ))}
              <span className="ml-2 text-gray-700 dark:text-gray-300 text-sm">
                {item.rating.toFixed(1)}
              </span>
            </div>

            {/* 🗺️ Map Button */}
            <a
              href={item.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition shadow-md text-sm"
            >
              <FaMapMarkerAlt /> View on Map
            </a>

            {/* Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Explore;

