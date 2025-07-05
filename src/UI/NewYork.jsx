import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaArrowRight } from "react-icons/fa";

const newYorkSpots = [
  {
    title: "Central Park",
    image: "https://media.istockphoto.com/id/1758789989/photo/central-park-manhattan-and-autumn.webp?a=1&b=1&s=612x612&w=0&k=20&c=JSNioFIQfMxpuj-Ye0iK87KJ4kqkLfA8atZiKIFr7xw=",
    description:
      "Escape the urban jungle with a stroll through New York’s green heart, Central Park — a peaceful retreat in the middle of Manhattan.",
    details:
      "Central Park spans over 840 acres, featuring lakes, theaters, playgrounds, and beautiful walking paths. It's perfect for picnics, jogging, or boat rides in the summer.",
  },
  {
    title: "Times Square",
    image: "https://media.istockphoto.com/id/2192684074/photo/vibrant-night-scene-of-times-square-in-new-york-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=R-p6_aDYyQmR6iExlYBpSgTEbruPxDOmj4SVUKnym08=",
    description:
      "Experience the electric atmosphere of Times Square — glowing billboards, Broadway shows, and street performers bring it alive 24/7.",
    details:
      "Known as 'The Crossroads of the World,' Times Square is a must-visit for nightlife, entertainment, and shopping. Catch a Broadway show or just soak in the lights!",
  },
  {
    title: "Statue of Liberty",
    image: "https://plus.unsplash.com/premium_photo-1694475364942-b755ad751a40?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3RhdHVlJTIwb2YlMjBMaWJlcnR5fGVufDB8fDB8fHww",
    description:
      "Visit America’s most iconic symbol of freedom on Liberty Island. Boat rides and museum tours make it a memorable experience.",
    details:
      "The Statue of Liberty was a gift from France in 1886 and stands 305 feet tall. Climb up to the crown for stunning views of NYC skyline and harbor.",
  },
  {
    title: "Brooklyn Bridge",
    image: "https://images.unsplash.com/photo-1585163435462-7e7796fa4b9e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QnJvb2tseW4lMjBCcmlkZ2V8ZW58MHx8MHx8fDA%3D",
    description:
      "Walk or bike across this historic bridge and enjoy sweeping views of Manhattan and Brooklyn. A classic New York moment.",
    details:
      "Opened in 1883, the Brooklyn Bridge is one of the oldest suspension bridges in the U.S. Sunset walks here are magical for photographers and romantics alike.",
  },
];

const NewYorkCard = () => {
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
    <section className="mt-16 py-14 px-4 md:px-16 bg-gradient-to-br from-gray-100 to-blue-200 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-blue-700 dark:text-white">
          Explore New York City
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {newYorkSpots.map((spot, index) => (
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

export default NewYorkCard;
