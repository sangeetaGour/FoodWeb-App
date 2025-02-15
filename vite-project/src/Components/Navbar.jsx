import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);

  // Toggle menu in mobile view
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };



  

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-red-600 shadow-lg" : "bg-black"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center py-4">
        
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          🍔 Food<span className="text-yellow-400">Hub</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-semibold">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link to="/services" className="hover:text-yellow-400">Services</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>

        <div>
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-semibold">{user}</span>
              <button
                onClick={handleSignOut}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link
                to="/signin"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-3/4 bg-red-700 p-6 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <button onClick={toggleMenu} className="text-white text-3xl absolute right-6 top-4">
          <FiX />
        </button>
        <ul className="mt-12 space-y-6 text-white text-lg">
          <li><Link to="/" onClick={closeMenu} className="block py-2 hover:text-yellow-400">Home</Link></li>
          <li><Link to="/about" onClick={closeMenu} className="block py-2 hover:text-yellow-400">About</Link></li>
          <li><Link to="/services" onClick={closeMenu} className="block py-2 hover:text-yellow-400">Services</Link></li>
          <li><Link to="/contact" onClick={closeMenu} className="block py-2 hover:text-yellow-400">Contact</Link></li>
          <li>
            <Link to="/signin" onClick={closeMenu} className="block w-full py-2 bg-yellow-400 text-gray-900 text-center rounded-lg mt-4">Sign In</Link>
          </li>
          <li>
            <Link to="/signup" onClick={closeMenu} className="block w-full py-2 border border-yellow-400 text-white text-center rounded-lg mt-2 hover:bg-yellow-400 hover:text-gray-900 transition">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
