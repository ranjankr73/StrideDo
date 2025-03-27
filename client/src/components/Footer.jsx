import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagram, FaPhone } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-primary text-dark mt-24">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-6">
            <NavLink to="/" className="flex items-center group">
              <span className="text-3xl font-bold text-dark font-montserrat tracking-tight">
                atithi
              </span>
              <span className="text-3xl font-bold text-accent font-montserrat tracking-tight">
                bhava
              </span>
            </NavLink>
            <p className="font-open-sans text-dark/80 text-sm leading-relaxed">
              Revolutionizing event management through seamless organization 
              and guest coordination.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-montserrat text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="font-open-sans space-y-3">
              <NavLink to="/about" className="block hover:text-accent transition-colors">
                About Us
              </NavLink>
              <NavLink to="/services" className="block hover:text-accent transition-colors">
                Services
              </NavLink>
              <NavLink to="/contact" className="block hover:text-accent transition-colors">
                Contact
              </NavLink>
              <NavLink to="/blog" className="block hover:text-accent transition-colors">
                Blog
              </NavLink>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-montserrat text-lg font-semibold mb-4">Legal</h3>
            <nav className="font-open-sans space-y-3">
              <NavLink to="/privacy" className="block hover:text-accent transition-colors">
                Privacy Policy
              </NavLink>
              <NavLink to="/terms" className="block hover:text-accent transition-colors">
                Terms of Service
              </NavLink>
              <NavLink to="/security" className="block hover:text-accent transition-colors">
                Security
              </NavLink>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="font-montserrat text-lg font-semibold">Connect With Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 hover:text-accent transition-colors">
                <FaPhone className="flex-shrink-0" />
                <span>+91 730 101 1273</span>
              </div>
              <div className="flex items-center gap-3 hover:text-accent transition-colors">
                <IoMail className="flex-shrink-0" />
                <span>support@atithibhava.com</span>
              </div>
            </div>
            <div className="flex gap-4 mt-6 text-xl">
              <FaTwitter className="hover:text-accent cursor-pointer transition-colors" />
              <FaLinkedin className="hover:text-accent cursor-pointer transition-colors" />
              <FaInstagram className="hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark/20 my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="font-open-sans text-dark/80">
            © {new Date().getFullYear()} Atithi Bhava. All rights reserved.
          </p>
          <div className="flex gap-6">
            <NavLink to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </NavLink>
            <NavLink to="/cookies" className="hover:text-accent transition-colors">
              Cookie Policy
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer