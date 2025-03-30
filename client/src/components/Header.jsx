import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import useAuthStore from "../store/auth";
import { appName } from "../constant";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser } = useAuthStore();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "features" },
    { name: "Pricing", path: "pricing" },
    { name: "About", path: "about" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm border-b border-[var(--border-color)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <span className="text-2xl font-bold text-[var(--primary-color)]">
              {appName.first}
            </span>
            <span className="text-2xl font-bold text-[var(--text-primary)]">
              {appName.second}
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-[var(--primary-color)] ${
                    isActive ? "text-[var(--primary-color)]" : "text-[var(--text-secondary)]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {currentUser ? (
              <NavLink
                to="/dashboard"
                className="px-4 py-2 rounded-full bg-[var(--primary-color)] text-white hover:bg-[var(--primary-hover)] transition-colors text-sm"
              >
                Dashboard
              </NavLink>
            ) : (
              <>
                <NavLink
                  to="/signin"
                  className="px-4 py-2 rounded-full text-[var(--primary-color)] hover:bg-[var(--background)] transition-colors text-sm"
                >
                  Sign In
                </NavLink>
                <NavLink
  to="/signup"
  className="px-4 py-2 rounded-full bg-[var(--primary-color)] text-white hover:bg-[var(--primary-hover)] transition-colors text-sm"
>
  Get Started
</NavLink>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[var(--text-primary)] hover:text-[var(--primary-color)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 transition-opacity ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`absolute right-0 top-16 w-64 bg-white h-[calc(100vh-4rem)] transform transition-transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `p-3 rounded-lg text-sm ${
                    isActive
                      ? "bg-[var(--primary-color)/10] text-[var(--primary-color)]"
                      : "text-[var(--text-secondary)] hover:bg-[var(--background)]"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="border-t pt-4 mt-2">
              {currentUser ? (
                <NavLink
                  to="/dashboard"
                  className="block w-full p-3 text-center rounded-lg bg-[var(--primary-color)] text-white hover:bg-[var(--primary-hover)] text-sm"
                >
                  Dashboard
                </NavLink>
              ) : (
                <>
                  <NavLink
                    to="/signin"
                    className="block w-full p-3 text-center rounded-lg text-[var(--primary-color)] hover:bg-[var(--background)] mb-2 text-sm"
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="block w-full p-3 text-center rounded-lg bg-[var(--primary-color)] text-white hover:bg-[var(--primary-hover)] text-sm"
                  >
                    Get Started
                  </NavLink>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
