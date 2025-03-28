import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagram, FaPhone } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border-color)] mt-24">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <NavLink to="/" className="flex items-center">
              <span className="text-xl font-bold text-[var(--primary-color)]">
                TODO
              </span>
              <span className="text-xl font-bold text-[var(--text-primary)]">
                ing
              </span>
            </NavLink>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Your simple, powerful task management solution. Stay organized and 
              productive with intuitive todo management.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
              Product
            </h3>
            <nav className="space-y-2">
              <NavLink to="/features" className="block text-sm text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                Features
              </NavLink>
              <NavLink to="/pricing" className="block text-sm text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                Pricing
              </NavLink>
              <NavLink to="/download" className="block text-sm text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                Download
              </NavLink>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
              Resources
            </h3>
            <nav className="space-y-2">
              <NavLink to="/blog" className="block text-sm text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                Blog
              </NavLink>
              <NavLink to="/support" className="block text-sm text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                Support
              </NavLink>
              <NavLink to="/documentation" className="block text-sm text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                Documentation
              </NavLink>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[var(--text-primary)]">
              Contact
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                <IoMail className="flex-shrink-0" />
                <span>support@todoing.app</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4 text-[var(--text-secondary)]">
              <FaTwitter className="hover:text-[var(--primary-color)] cursor-pointer" />
              <FaLinkedin className="hover:text-[var(--primary-color)] cursor-pointer" />
              <FaInstagram className="hover:text-[var(--primary-color)] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--border-color)] my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-[var(--text-secondary)]">
            © {new Date().getFullYear()} TODOing. All rights reserved.
          </p>
          <div className="flex gap-6">
            <NavLink to="/privacy" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
              Privacy
            </NavLink>
            <NavLink to="/terms" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
              Terms
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer