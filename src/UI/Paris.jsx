import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaArrowRight } from "react-icons/fa";

const parisSpots = [
  {
    title: "Eiffel Tower",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrP2C722PAWVqObYqtchSJqMZL5GKHIPQNcvtiKoWoALsM1-cj8zRYBFRPX-qPuwsWl2fJ0d0t9CpIUjPFnrm15geusn49q9CI08oriX0Lh=w270-h312-n-k-no",
    description:
      "The Eiffel Tower is Paris' most iconic landmark, offering breathtaking views of the city. Enjoy a romantic evening with the tower illuminated under the stars.",
    details:
      "Constructed in 1889, the Eiffel Tower stands at 300 meters tall. It has three observation decks, restaurants, and is visited by over 7 million tourists annually.",
  },
  {
    title: "Louvre Museum",
    image: "https://images.unsplash.com/photo-1567942585146-33d62b775db0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TG91dnJlJTIwTXVzZXVtfGVufDB8fDB8fHww",
    description:
      "Home to the Mona Lisa and thousands of historic art pieces, the Louvre is the world's largest and most visited museum. A paradise for art lovers.",
    details:
      "The Louvre contains more than 380,000 objects and displays 35,000 works of art. It was originally a royal palace before becoming a public museum in 1793.",
  },
  {
    title: "Montmartre",
    image: "https://media.istockphoto.com/id/1876742292/photo/aerial-view-of-montmartre-hill-with-basilique-du-sacre-coeur-in-paris-during-sunset-paris.webp?a=1&b=1&s=612x612&w=0&k=20&c=SULvxIrbAD5h-gvBWuCITrvWrB0o_8k8whJX4ksh7S8=",
    description:
      "Montmartre is known for its artistic history and stunning views of Paris from the steps of the Sacré-Cœur. Enjoy street art, cozy cafés, and music-filled corners.",
    details:
      "Montmartre was once home to artists like Picasso and Van Gogh. It's a hilltop village with cobblestone streets and one of the best sunset views in Paris.",
  },
  {
    title: "Seine River Cruise",
    image: "https://plus.unsplash.com/premium_photo-1664297923131-2ecb1758c2bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2VpbmUlMjBSaXZlciUyMENydWlzZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "A boat cruise on the Seine River lets you explore the beauty of Paris from the water — passing by the Notre-Dame, bridges, and hidden gems along the riverbank.",
    details:
      "The Seine River flows through the heart of Paris, offering scenic cruises especially beautiful at sunset. It is lined with iconic bridges and UNESCO World Heritage sites.",
  },
];

const ParisCard = () => {
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
    <section className="py-12 mt-16 px-4 md:px-12 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-700 dark:text-white">
          Discover Paris
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {parisSpots.map((spot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border dark:border-gray-700"
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
                <h3 className="text-2xl font-semibold text-blue-700 dark:text-white">
                  {spot.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {spot.description}
                </p>
                <button
                  onClick={() => setSelectedSpot(spot)}
                  className="inline-flex items-center gap-2 mt-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition"
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
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
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
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
                  className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium"
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

export default ParisCard;
