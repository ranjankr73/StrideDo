import React from 'react'
import { NavLink } from 'react-router-dom'
import Pricing from '../components/Pricing'
import CTA from '../components/CTA'

const Services = () => {
  return (
    <section className="min-h-screen bg-primary/5 py-32">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-dark mb-6">
            Elevate Your <span className="text-accent">Event Experience</span>
          </h1>
          <p className="font-open-sans text-lg text-dark/80 mb-8">
            Comprehensive solutions for seamless event management from conception to execution
          </p>
        </div>
      </div>

      {/* Service Categories */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors">
                <div className="text-accent text-4xl mb-6">{service.icon}</div>
                <h3 className="font-montserrat text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="font-open-sans text-dark/80 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 font-open-sans text-dark/80">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.7 7.3c.4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0l-3-3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3 6.3-6.3c.4-.4 1-.4 1.4 0z"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-dark text-center mb-12">
          Why <span className="text-accent">Atithi Bhava?</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-accent text-4xl font-bold mb-4">{stat.value}</div>
              <h3 className="font-open-sans font-semibold text-dark/80">{stat.label}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <Pricing backgroundColor='white'/>

      {/* CTA Section */}
      <CTA title='Ready to Transform Your Events?'/>
      
    </section>
  )
}

// Placeholder Data
const services = [
  {
    icon: '🎉',
    title: "Full Event Planning",
    description: "End-to-end management for stress-free celebrations",
    features: [
      "Venue selection & booking",
      "Vendor coordination",
      "Timeline management",
      "Budget tracking"
    ]
  },
  {
    icon: '📋',
    title: "Guest Management",
    description: "Streamlined attendee coordination solutions",
    features: [
      "RSVP tracking",
      "Seating arrangements",
      "Dietary preferences",
      "Digital invitations"
    ]
  },
  {
    icon: '💰',
    title: "Budget Planning",
    description: "Financial control for perfect events",
    features: [
      "Cost estimation",
      "Expense tracking",
      "Vendor payments",
      "Real-time analytics"
    ]
  }
]

const stats = [
  { value: "10K+", label: "Successful Events" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Premium Venues" },
  { value: "24/7", label: "Support Available" }
]



export default Services