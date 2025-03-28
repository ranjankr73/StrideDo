import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
  };

  return (
    <section className="min-h-screen bg-[var(--background)] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-xl shadow-lg overflow-hidden border border-[var(--border-color)]">
          {/* Left Form Section */}
          <div className="p-8 md:p-12 lg:p-16">
            <NavLink
              to="/"
              className="flex items-center text-2xl font-bold text-[var(--text-primary)] hover:text-[var(--primary-color)]"
            >
              <span>TODO</span>
              <span className="text-[var(--primary-color)]">ing</span>
            </NavLink>

            <div className="mt-8 md:mt-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                Contact Support
              </h2>
              <p className="text-[var(--text-secondary)] mb-8">
                Need help or have suggestions? Our productivity experts are here
                to assist you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[var(--text-primary)]">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)/20]"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[var(--text-primary)]">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)/20]"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[var(--text-primary)]">
                    How can we help?
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)/20]"
                    placeholder="Feature request or question"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[var(--text-primary)]">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)/20]"
                    placeholder="Describe your productivity needs..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[var(--primary-color)] text-white rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right Contact Info */}
          <div className="bg-[var(--background)] p-8 md:p-12 lg:p-16 border-l border-[var(--border-color)]">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                Connect With Us
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-[var(--primary-color)] text-xl mt-1">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--text-primary)]">
                      Campus Address
                    </p>
                    <p className="text-[var(--text-secondary)]">
                      MNNIT Allahabad Campus
                      <br />
                      Teliyarganj, Prayagraj
                      <br />
                      Uttar Pradesh 211004
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-[var(--primary-color)] text-xl mt-1">
                    <FaPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--text-primary)]">
                      Support
                    </p>
                    <p className="text-[var(--text-secondary)]">
                      +91 7301011273
                      <br />
                      (Mon-Fri, 9AM - 5PM IST)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-[var(--primary-color)] text-xl mt-1">
                    <FaEnvelope className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--text-primary)]">
                      Email
                    </p>
                    <p className="text-[var(--text-secondary)]">
                      support@todoing.com
                      <br />
                      feedback@todoing.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-[var(--border-color)]">
                <h4 className="font-semibold mb-4 text-[var(--text-primary)]">
                  Follow Our Journey
                </h4>
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional: Company Location */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-lg border border-[var(--border-color)]">
          <iframe
            title="MNNIT Allahabad Campus"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.256912514335!2d81.86353831501385!3d25.49122098380943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb8a0f23d3c1%3A0x696f6e76d242ab3a!2sMotilal%20Nehru%20National%20Institute%20of%20Technology%20Allahabad!5e0!3m2!1sen!2sin!4v1657798574899!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
