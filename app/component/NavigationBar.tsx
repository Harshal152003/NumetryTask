import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import logo from "./assets/logo45.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Brand</h1>
        </div>
        
        {/* Search Bar - Visible on Desktop */}
        <div className="hidden md:flex flex-grow justify-center">
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <Search className="absolute right-2 top-2 text-gray-400" size={20} />
          </div>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/services" className="hover:text-gray-400">Services</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 bg-gray-800 p-4 rounded-lg">
          {/* Search Bar for Mobile */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
            />
            <Search className="absolute right-2 top-2 text-gray-400" size={20} />
          </div>
          <Link to="/" className="block hover:text-gray-400">Home</Link>
          <Link to="/about" className="block hover:text-gray-400">About</Link>
          <Link to="/services" className="block hover:text-gray-400">Services</Link>
          <Link to="/contact" className="block hover:text-gray-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
