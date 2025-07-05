import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaArrowRight } from "react-icons/fa";

const tokyoSpots = [
  {
    title: "Shibuya Crossing",
    image: "https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2hpYnV5YSUyMENyb3NzaW5nfGVufDB8fDB8fHww",
    description:
      "Experience the world's busiest pedestrian crossing — a symbol of Tokyo’s fast-paced lifestyle and urban beauty.",
    details:
      "Shibuya Crossing is famous for its organized chaos. With giant screens, neon signs, and people from every direction, it’s a must-see attraction in Tokyo.",
  },
  {
    title: "Tokyo Tower",
    image: "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VG9reW8lMjBUb3dlcnxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Get panoramic views of the Tokyo skyline from this iconic red-and-white communications tower inspired by the Eiffel Tower.",
    details:
      "Standing 333 meters tall, Tokyo Tower is one of the best observation spots in the city. It also hosts museums and light shows at night.",
  },
  {
    title: "Asakusa Temple",
    image: "https://images.unsplash.com/photo-1706813253696-10ee6332edd3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXNha3VzYSUyMFRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Step into traditional Japan at Senso-ji, Tokyo’s oldest and most colorful Buddhist temple.",
    details:
      "Located in the historic Asakusa district, Senso-ji offers a spiritual experience surrounded by shops selling street food, kimonos, and souvenirs.",
  },
  {
    title: "Shinjuku Gyoen",
    image: "https://images.unsplash.com/photo-1603039066999-7b318f3a5dad?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hpbmp1a3UlMjBHeW9lbnxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Relax in one of Tokyo’s most beautiful gardens, blending Japanese, French, and English styles.",
    details:
      "Shinjuku Gyoen is an oasis in the city — perfect for cherry blossom viewing in spring or quiet walks all year round.",
  },
];

const TokyoCard = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState(null);

  const toggleFavorite = (title) => {
    setFavorites((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <section className="mt-16 py-14 px-4 md:px-16 bg-gradient-to-br from-pink-100 to-rose-200 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-pink-700 dark:text-white">
          Explore Tokyo
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {tokyoSpots.map((spot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transform transition"
            >
              <div
                className="relative cursor-pointer"
                onClick={() => setSelectedSpot(spot)}
              >
                <img
                  src={spot.image}
                  alt={spot.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(spot.title);
                  }}
                  className="absolute top-4 right-4 bg-white/90 dark:bg-gray-700 p-3 rounded-full shadow-md hover:scale-110 transition"
                >
                  <FaHeart
                    className={`text-2xl ${
                      favorites.includes(spot.title)
                        ? "text-red-600"
                        : "text-gray-400 dark:text-gray-500"
                    }`}
                  />
                </button>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold text-pink-700 dark:text-white">
                  {spot.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {spot.description}
                </p>
                <button
                  onClick={() => setSelectedSpot(spot)}
                  className="inline-flex items-center gap-2 mt-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full font-medium transition"
                >
                  Book Now <FaArrowRight className="text-sm" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for More Info */}
        <AnimatePresence>
          {selectedSpot && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpot(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-xl w-full shadow-2xl text-gray-800 dark:text-white"
              >
                <h3 className="text-2xl font-bold mb-4 text-pink-600 dark:text-pink-400">
                  {selectedSpot.title}
                </h3>
                <img
                  src={selectedSpot.image}
                  alt={selectedSpot.title}
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <p className="text-sm leading-relaxed">
                  {selectedSpot.details}
                </p>
                <button
                  onClick={() => setSelectedSpot(null)}
                  className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full font-medium"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TokyoCard;
