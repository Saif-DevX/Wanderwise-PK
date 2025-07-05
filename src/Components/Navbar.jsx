import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMobileLinkClick = () => setIsOpen(false);
  
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 shadow-md z-50 bg-white w-full transition-transform duration-300 dark:bg-gray-900 dark:text-white ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* left-content */}
          <h1 className="flex items-center gap-2 tracking-tight text-3xl font-extrabold select-none">
            <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent">
              Wander
            </span>

            <img
              width="40"
              height="40"
              className="w-10 h-10 select-none"
              src="https://img.icons8.com/emoji/48/airplane-emoji.png"
              alt="Plane"
            />

            <span className="text-sky-400">Wise</span>
          </h1>

          {/* right-content */}

          {/* Desktop-Nav */}
          <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-sky-400 underline" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-sky-400 underline" : ""
              }
            >
              About
            </NavLink>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                isActive ? "text-sky-400 underline" : ""
              }
            >
              Explore
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? "text-sky-400 underline" : ""
              }
            >
              Contact
            </NavLink>

            {/* Dropdown for Destinations */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition">
                Destinations{" "}
                <FaAngleDown className="flex items-center justify-center" />{" "}
              </button>

              <div className="absolute hidden group-hover:block  w-50 bg-white dark:bg-gray-900 shadow-lg rounded-lg z-50">
                <div className="flex flex-col gap-2">
                  <NavLink
                    className="block px-4 py-2 dark:hover:bg-gray-700 hover:bg-blue-200"
                    to="/paris"
                  >
                    Paris
                  </NavLink>
                  <NavLink
                    className="block px-4 py-2 dark:hover:bg-gray-700  hover:bg-blue-200"
                    to="/bali"
                  >
                    Bali
                  </NavLink>
                  <NavLink
                    className="block px-4 py-2 dark:hover:bg-gray-700  hover:bg-blue-200"
                    to="/newyork"
                  >
                    New York
                  </NavLink>
                  <NavLink
                    className="block px-4 py-2 dark:hover:bg-gray-700  hover:bg-blue-200"
                    to="/tokyo"
                  >
                    Tokyo
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl text-blue-700 transition duration-300"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Mobile Nav Links with Framer 
          Motion */}

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.6 }}
                className="md:hidden fixed top-[72px] right-0 w-[65%] dark:bg-gray-800 dark:text-white bg-white z-50 flex flex-col items-center shadow-2xl py-10 "
              >
                <nav className="flex flex-col space-y-6 dark:text-white text-gray-700 font-medium">
                  <NavLink
                    onClick={handleMobileLinkClick}
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-sky-400 underline" : ""
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    onClick={handleMobileLinkClick}
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "text-sky-400 underline" : ""
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    onClick={handleMobileLinkClick}
                    to="/explore"
                    className={({ isActive }) =>
                      isActive ? "text-sky-400 underline" : ""
                    }
                  >
                    Explore
                  </NavLink>
                  <NavLink
                    onClick={handleMobileLinkClick}
                    to="/Contact"
                    className={({ isActive }) =>
                      isActive ? "text-sky-400 underline" : ""
                    }
                  >
                    Contact
                  </NavLink>

                  <h1 className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition">
                    Destinations <FaAngleDown />
                  </h1>
                </nav>

                <div className="bg-white dark:bg-gray-800 mt-4 ml-20 border-l border-gray-700">
                  <div className="flex flex-col gap-2">
                    <NavLink
                      className="block px-4 py-2 dark:hover:bg-gray-700 hover:bg-blue-200"
                      to="/paris"
                      onClick={handleMobileLinkClick}
                    >
                      Paris
                    </NavLink>
                    <NavLink
                      className="block px-4 py-2 dark:hover:bg-gray-700  hover:bg-blue-200"
                      to="/bali"
                      onClick={handleMobileLinkClick}
                    >
                      Bali
                    </NavLink>
                    <NavLink
                      className="block px-4 py-2 dark:hover:bg-gray-700  hover:bg-blue-200"
                      to="/newyork"
                      onClick={handleMobileLinkClick}
                    >
                      New York
                    </NavLink>
                    <NavLink
                      className="block px-4 py-2 dark:hover:bg-gray-700  hover:bg-blue-200"
                      to="/tokyo"
                      onClick={handleMobileLinkClick}
                    >
                      Tokyo
                    </NavLink>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Navbar;
