import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Demo from '../components/Demo'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Full Width */}
      <Hero />

      {/* Services Section - Contained Width */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <Services />
        </div>
      </section>

      {/* Demo Section - Full Width with Background */}
      <section className="bg-accent-light/30">
        <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
          <Demo />
        </div>
      </section>

      {/* Pricing Section - Contained Width */}
        <Pricing backgroundColor='primary/5'/>

      {/* Testimonials Section - Contained Width */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <Testimonials />
        </div>
      </section>
    </div>
  )
}

export default Home