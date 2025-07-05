import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaArrowRight } from "react-icons/fa";

const baliSpots = [
  {
    title: "Ubud Rice Terraces",
    image: "https://media.istockphoto.com/id/515480864/photo/beautiful-rice-terraces-ubud-bali-indonesia.webp?a=1&b=1&s=612x612&w=0&k=20&c=G1jveaZiwb40wlH8-MEl7c3X45odvdZMVu78hpQ0XsU=",
    description:
      "Explore the famous rice paddies of Ubud — serene landscapes, quiet nature walks, and traditional Balinese culture await you.",
    details:
      "The Tegallalang Rice Terraces in Ubud offer some of the most iconic views in Bali. Visitors enjoy scenic treks, local food stalls, and swing rides overlooking the lush greenery.",
  },
  {
    title: "Uluwatu Temple",
    image: "https://media.istockphoto.com/id/2152950328/photo/balinese-uluwatu-temple-aerial-view-at-sunset-from-drone.webp?a=1&b=1&s=612x612&w=0&k=20&c=4PQjSRP3KiuBNfylhnd2c7mXaQOrV875XeUAOxH5Ufc=",
    description:
      "Perched on a cliff above the ocean, Uluwatu Temple is known for its stunning sunsets and the traditional Kecak fire dance at dusk.",
    details:
      "Built in the 11th century, Uluwatu Temple is a Balinese sea temple. Its dramatic location on a steep cliff makes it a must-visit. Watch the monkeys — they like sunglasses!",
  },
  {
    title: "Seminyak Beach",
    image: "https://media.istockphoto.com/id/668140194/photo/double-six-beach-view-after-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=16KBjIC-VCDgfINLWIulxyq_YTrLcnJxGGWbBqFlfXI=",
    description:
      "Seminyak is known for its luxury resorts, beach clubs, and upscale shopping. A great mix of relaxation and nightlife by the sea.",
    details:
      "This beach town has become Bali's trendy hotspot with sunset cocktails, music events, and spa escapes. Chill at Potato Head Beach Club or take a surfing lesson!",
  },
  {
    title: "Tirta Empul Temple",
    image: "https://media.istockphoto.com/id/2193352084/photo/the-pond-at-tirta-empul-temple-in-bali-indonesia.webp?a=1&b=1&s=612x612&w=0&k=20&c=frZdIRa9XKZ10ybwzDiYRmheK3Fjtyc4LZa9owJOH8k=",
    description:
      "A sacred water temple where locals and tourists take part in traditional cleansing rituals in holy spring waters.",
    details:
      "Tirta Empul was founded in 962 A.D. and is dedicated to Vishnu, the Hindu god of water. Visitors can partake in the purifying ritual by bathing in its crystal-clear springs.",
  },
];

const BaliCard = () => {
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
    <section className="mt-16 py-14 px-4 md:px-16 bg-gradient-to-br from-yellow-50 to-green-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-green-700 dark:text-white">
          Discover Bali
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {baliSpots.map((spot, index) => (
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
                <h3 className="text-2xl font-semibold text-green-700 dark:text-white">
                  {spot.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {spot.description}
                </p>
                <button
                  onClick={() => setSelectedSpot(spot)}
                  className="inline-flex items-center gap-2 mt-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-medium transition"
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
                <h3 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">
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
                  className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium"
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

export default BaliCard;
