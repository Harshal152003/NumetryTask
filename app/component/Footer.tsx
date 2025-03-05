import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import logo from "./assets/logo45.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo Section */}
        <div>
          <img src={logo} alt="Logo" className="h-10 w-10 mb-2" />
          <h1 className="text-xl font-bold">Brand</h1>
          <p className="text-sm text-gray-400 mt-2">
            Elevate your career with our platform.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
            <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Newsletter</h2>
          <p className="text-sm text-gray-400 mb-3">
            Subscribe to get updates & news.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-yellow-500 p-2 rounded-r-lg hover:bg-yellow-600">
              <Mail size={20} />
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400"><Facebook size={24} /></a>
            <a href="#" className="hover:text-gray-400"><Twitter size={24} /></a>
            <a href="#" className="hover:text-gray-400"><Instagram size={24} /></a>
            <a href="#" className="hover:text-gray-400"><Linkedin size={24} /></a>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-400 mt-8">
        © {new Date().getFullYear()} Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
