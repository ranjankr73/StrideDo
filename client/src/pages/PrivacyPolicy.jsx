import React from 'react'
import { NavLink } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <NavLink 
            to="/" 
            className="font-montserrat text-3xl font-bold hover:text-accent transition-colors"
          >
            <span className="text-dark">atithi</span>
            <span className="text-accent">bhava</span>
          </NavLink>
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-dark mt-8">
            Privacy Policy
          </h1>
          <p className="font-open-sans text-dark/80 mt-4">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-6">
              <h2 className="font-montserrat text-2xl font-bold text-dark">
                Introduction
              </h2>
              <p className="font-open-sans text-dark/80">
                At atithi bhava, we are committed to protecting your privacy. This policy outlines how we collect, 
                use, and safeguard your personal information through our event management platform.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-montserrat text-2xl font-bold text-dark">
                Information We Collect
              </h2>
              <ul className="space-y-4 font-open-sans text-dark/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>
                    <strong>Personal Information:</strong> Name, email address, phone number when you create an account
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>
                    <strong>Event Data:</strong> Guest lists, event details, preferences
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>
                    <strong>Usage Data:</strong> IP address, browser type, platform interactions
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="font-montserrat text-2xl font-bold text-dark">
                How We Use Your Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <h3 className="font-montserrat font-semibold mb-2">Service Delivery</h3>
                  <p className="font-open-sans text-sm text-dark/80">
                    Create and manage events, send invitations, track RSVPs
                  </p>
                </div>
                <div className="p-4 bg-primary/10 rounded-xl">
                  <h3 className="font-montserrat font-semibold mb-2">Communications</h3>
                  <p className="font-open-sans text-sm text-dark/80">
                    Event updates, service notifications, promotional offers
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-montserrat text-2xl font-bold text-dark">
                Data Sharing
              </h2>
              <p className="font-open-sans text-dark/80">
                We only share information with third-party vendors essential for service delivery (e.g., payment processors, 
                email service providers). We never sell your personal data.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-montserrat text-2xl font-bold text-dark">
                Your Rights
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl">
                  <div className="text-accent text-2xl">✓</div>
                  <p className="font-open-sans text-dark/80">
                    Access and download your data
                  </p>
                </div>
                <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl">
                  <div className="text-accent text-2xl">✎</div>
                  <p className="font-open-sans text-dark/80">
                    Update or correct information
                  </p>
                </div>
                <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl">
                  <div className="text-accent text-2xl">🗑️</div>
                  <p className="font-open-sans text-dark/80">
                    Request data deletion
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-montserrat text-2xl font-bold text-dark">
                Cookies
              </h2>
              <p className="font-open-sans text-dark/80">
                We use essential cookies for platform functionality. You can manage preferences in your browser settings.
              </p>
              <button className="px-4 py-2 bg-accent text-white rounded-full text-sm hover:bg-accent/90 transition-colors">
                Manage Cookie Preferences
              </button>
            </div>

            <div className="space-y-6">
              <h2 className="font-montserrat text-2xl font-bold text-dark">
                Policy Updates
              </h2>
              <p className="font-open-sans text-dark/80">
                We'll notify users of significant changes via email or platform notifications. 
                Continued use after changes constitutes acceptance.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-montserrat text-2xl font-bold text-dark">
                Contact Us
              </h2>
              <p className="font-open-sans text-dark/80">
                For privacy concerns or data requests:<br />
                <NavLink 
                  to="/contact" 
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  Contact our support team
                </NavLink>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <NavLink
            to="/"
            className="inline-block px-8 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
          >
            Return to Homepage
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy