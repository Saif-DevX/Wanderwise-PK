import { motion } from "framer-motion";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import destinations from "../data/destination";
import { useState } from "react";

const PopularDestinations = () => {
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState("all");

  const categories = [
    { name: "All", value: "all" },
    { name: "Pakistan", value: "Pakistan" },
    { name: "Nature", value: "Nature" },
    { name: "Countries", value: "Countries" },
  ];

  const toggleFavorite = (title) => {
    setFavorites((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const filteredDestinations =
    filter === "all"
      ? destinations
      : destinations.filter((place) => place.category === filter);

  return (
    <section
      
      className="py-20 px-4 md:px-12 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-white">
          Explore Popular Destinations
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg md:text-xl">
          Discover breathtaking places around the world.
        </p>
      </div>

      <div className="flex justify-center mb-8 focus:outline-none">
         <div className="flex justify-center group w-[150px] pr-4  rounded-full bg-white dark:bg-gray-700 text-blue-600 cursor-pointer dark:text-white font-semibold shadow-md focus:outline-none">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-5 py-2 rounded-full w-[150px] cursor-pointer border-none outline-none focus:ring-0"
        >
          {categories.map((cat) => (
            <option className="cursor-pointer" key={cat.value} value={cat.value}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      </div>

      {/* Card Slider */}
      <div className="relative overflow-hidden">
        <div className="overflow-x-auto overflow-y-hidden flex gap-6 md:gap-8 lg:gap-10 px-1 md:px-2 scrollbar-hide scroll-smooth snap-x snap-mandatory">
          {filteredDestinations.map((place, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group snap-start w-[85%] sm:w-[340px] md:w-[380px] lg:w-[400px] flex-shrink-0 rounded-xl overflow-hidden bg-white/90 dark:bg-gray-800/60 shadow-lg hover:shadow-2xl border-blue-100 dark:border-gray-700 transition-all duration-300"
            >
              {/* Image */}
              <div
                className="relative cursor-pointer"
                onClick={() => window.alert("🖼️ Preview Coming Soon!")}
              >
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />
                {/* Heart Favorite */}
                <button
                  className="absolute top-3 right-3 bg-white/80 dark:bg-gray-800 p-2 rounded-full shadow-md hover:scale-110 transition cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(place.title);
                  }}
                >
                  <FaHeart
                    className={`text-xl ${
                      favorites.includes(place.title)
                        ? "text-red-600"
                        : "text-gray-400 dark:text-gray-500"
                    }`}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-blue-800 dark:text-white">
                  {place.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {place.description}
                </p>
                <button
                  onClick={() => alert("🔔 Booking coming soon!")}
                  className="inline-flex items-center gap-2 mt-3 bg-blue-600 cursor-pointer  hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition"
                >
                  Book Now <FaArrowRight className="text-sm" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;