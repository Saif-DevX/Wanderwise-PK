import { FaFacebookF, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-blue-100 to-white dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 px-6 md:px-12 pt-16 pb-10 ">
      {/* Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse" />

      {/* Content */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold text-blue-600 dark:text-cyan-400 mb-4">
            WanderWise
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Discover breathtaking destinations and travel with confidence.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3 text-blue-700 dark:text-white">
            Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#explore" className="hover:text-blue-500 transition">
                Explore
              </a>
            </li>
            <li>
              <a
                href="#destinations"
                className="hover:text-blue-500 transition"
              >
                Bookings
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3 text-blue-700 dark:text-white">
            Follow Us
          </h4>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3 text-blue-700 dark:text-white">
            Get in Touch
          </h4>
          <p className="text-sm">Email: support@wanderwise.com</p>
          <p className="text-sm">Phone: +92 300 1234567</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} WanderWise. All rights reserved.
        </p>
        <a
          href="#home"
          className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-md transition"
        >
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
