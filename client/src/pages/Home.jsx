import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Demo from '../components/Demo'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import CTA from '../components/CTA'

const Home = () => {

  const plans = [
    {
      name: "Student",
      price: "0",
      features: [
        "Basic task management",
        "Up to 3 projects",
        "Mobile app access",
        "1GB storage",
        "MNNIT email verification"
      ],
      cta: "Get Started"
    },
    {
      name: "Pro",
      price: "29",
      featured: true,
      features: [
        "Unlimited projects",
        "Smart reminders",
        "Priority support",
        "10GB storage",
        "Team collaboration",
        "Advanced analytics"
      ],
      cta: "Go Pro"
    },
    {
      name: "Campus",
      price: "Custom",
      features: [
        "Customized for MNNIT",
        "Unlimited users",
        "Dedicated support",
        "SSO integration",
        "API access",
        "Training & workshops"
      ],
      cta: "Contact Us"
    }
  ]

  return (
    <div className="flex flex-col font-montserrat">
      {/* Hero Section - Full Width */}
      <Hero />

      {/* Services Section - Contained Width */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <Features />
        </div>
      </section>

      {/* Demo Section - Full Width with Background */}
      <section className="bg-accent-light/30">
        <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
          <Demo />
        </div>
      </section>

      {/* Pricing Section - Contained Width */}
        <Pricing plans={plans}/>

      {/* Testimonials Section - Contained Width */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <Testimonials />
        </div>
      </section>

      <CTA/>
    </div>
  )
}

export default Home