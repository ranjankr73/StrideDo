import React from 'react'
import { FaCalendarAlt, FaUsers, FaEnvelopeOpenText } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaCalendarAlt />,
      title: "Event Scheduling",
      description: "Create and manage events with our intuitive calendar system"
    },
    {
      icon: <FaUsers />,
      title: "Guest Management",
      description: "Track RSVPs and manage guest lists effortlessly"
    },
    {
      icon: <FaEnvelopeOpenText />,
      title: "Smart Invitations",
      description: "Send automated reminders and updates via email/SMS"
    }
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-dark text-center mb-12">
          Our <span className="text-accent">Services</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-accent text-4xl mb-6">
                {service.icon}
              </div>
              <h3 className="font-montserrat text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="font-open-sans text-dark/80">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services