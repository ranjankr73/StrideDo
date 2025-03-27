import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import useAuthStore from "../store/auth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser } = useAuthStore();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "about" },
    { name: "Services", path: "services" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
      {/* Desktop Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center group">
            <span className="text-3xl font-bold text-primary font-montserrat tracking-tight">
              atithi
            </span>
            <span className="text-3xl font-bold text-accent font-montserrat tracking-tight group-hover:text-primary transition-colors">
             bhava
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-colors ${
                    isActive ? "text-accent" : "text-dark hover:text-accent"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Auth Buttons */}
          {currentUser ? <div className="hidden md:flex items-center gap-4">
            <NavLink
              to="/dashboard"
              className="px-6 py-2 rounded-full bg-accent text-white hover:bg-accent/90 transition-colors"
            >
              Dashboard
            </NavLink>
          </div> : <div className="hidden md:flex items-center gap-4">
            <NavLink
              to="/signin"
              className="px-6 py-2 rounded-full bg-accent text-white hover:bg-accent/90 transition-colors"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Sign Up
            </NavLink>
          </div>}

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-dark hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 transition-opacity
        ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`absolute right-0 top-20 w-64 bg-white h-[calc(100vh-5rem)]
          transform transition-transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `p-3 rounded-lg hover:bg-primary/10 text-dark hover:text-accent
                  ${isActive ? "bg-primary/10 text-accent" : ""}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            {currentUser ? <div className="border-t pt-4 mt-4"><NavLink
                to="/dashboard"
                className="block w-full p-3 text-center rounded-lg bg-accent text-white hover:bg-accent/90 mb-4"
              >
                Dashboard
              </NavLink></div> : <div className="border-t pt-4 mt-4">
              <NavLink
                to="/signin"
                className="block w-full p-3 text-center rounded-lg bg-accent text-white hover:bg-accent/90 mb-4"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signup"
                className="block w-full p-3 text-center rounded-lg bg-primary text-white hover:bg-primary/90"
              >
                Sign Up
              </NavLink>
            </div>}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
