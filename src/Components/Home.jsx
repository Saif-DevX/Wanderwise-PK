import { useState } from "react";
import { motion } from "framer-motion";
import Destinations from "../Pages/Destinations";

import Video1 from "../assets/bg-videos/video1.mp4";
import Video2 from "../assets/bg-videos/video2.mp4";
import Video3 from "../assets/bg-videos/video3.mp4";
import Video4 from "../assets/bg-videos/video4.mp4";
import Video5 from "../assets/bg-videos/video5.mp4";
import Video6 from "../assets/bg-videos/video6.mp4";
import Video7 from "../assets/bg-videos/video7.mp4";
import { NavLink } from "react-router-dom";
import Explore from "./Explore";

const Home = () => {
  const videoList = [Video1, Video2, Video3, Video4, Video5, Video6, Video7];
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center md:px-12 text-white px-10 overflow-hidden"
      >
        <video
          autoPlay
          loop={false}
          muted
          playsInline
          key={currentVideoIdx}
          onEnded={() =>
            setCurrentVideoIdx((prev) => (prev + 1) % videoList.length)
          }
          className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-1000 ease-in-out"
        >
          <source src={videoList[currentVideoIdx]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0  bg-gradient-to-b from-black/60 via-black/40 to-transparent z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative z-20 max-w-4xl mx-auto text-center justify-center lg:space-y-6 space-y-4"
          >
            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-extrabold leading-tight lg:mt-32 md:mt-32 sm:mt-32 mt-48">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 pr-2 via-blue-600 to-green-300">
                Wander the World
              </span>
              with WanderWise
            </h1>

            <p className="text-gray-100 max-w-2xl mx-auto text-xl px-4">
              Discover breathtaking destinations, plan your trips with ease, and
              experience unforgettable adventures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-10">
              <NavLink
                to="/Explore"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 hover:scale-105 cursor-pointer"
              >
                Explore Destinations
              </NavLink>
              <NavLink
                to="/Contact"
                className="bg-white/10 hover:bg-white/20 border border-white text-white px-6 py-3 rounded-full font-semibold transition duration-300 hover:scale-105 cursor-pointer"
              >
                Contact Us
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>

      <Destinations />

      <Explore />
    </>
  );
};

export default Home;
