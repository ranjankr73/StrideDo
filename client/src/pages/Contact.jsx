import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic
  }

  return (
    <section className="min-h-screen bg-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Left Form Section */}
          <div className="p-8 md:p-12 lg:p-16">
            <NavLink 
              to="/" 
              className="font-montserrat text-2xl font-bold hover:text-accent transition-colors"
            >
              <span>atithi</span>
              <span className="text-accent">bhava</span>
            </NavLink>

            <div className="mt-8 md:mt-12">
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-dark mb-4">
                Get in Touch
              </h2>
              <p className="font-open-sans text-dark/80 mb-8">
                Have questions? Our team is ready to help you create unforgettable events.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="font-open-sans font-medium">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-open-sans font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-open-sans font-medium">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-open-sans font-medium">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right Contact Info */}
          <div className="bg-primary/10 p-8 md:p-12 lg:p-16">
            <div className="space-y-8">
              <h3 className="font-montserrat text-2xl font-bold text-dark">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-accent text-xl mt-1">📍</div>
                  <div>
                    <p className="font-open-sans font-semibold">Office Address</p>
                    <p className="font-open-sans text-dark/80">
                      123 Event Street<br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-accent text-xl mt-1">📞</div>
                  <div>
                    <p className="font-open-sans font-semibold">Phone Number</p>
                    <p className="font-open-sans text-dark/80">
                      +91 12345 67890<br />
                      (Mon-Sat, 10AM - 7PM IST)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-accent text-xl mt-1">✉️</div>
                  <div>
                    <p className="font-open-sans font-semibold">Email Address</p>
                    <p className="font-open-sans text-dark/80">
                      support@atithibhava.com<br />
                      events@atithibhava.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-dark/20">
                <h4 className="font-montserrat font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-6">
                  {['📘', '📷', '💼'].map((icon, index) => (
                    <button
                      key={index}
                      className="text-2xl hover:text-accent transition-colors"
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-xl">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.213484447031!2d72.8242143153775!3d18.93846876054594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e801f6b3eb%3A0x6b4d7e9d746854c1!2sGateway%20of%20India!5e0!3m2!1sen!2sin!4v1624963257593!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact