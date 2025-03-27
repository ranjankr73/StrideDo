import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-primary/10 py-24 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-dark space-y-6">
              <div className="leading-tight">
                Plan{' '}
                <span className="text-accent block mt-4 md:mt-6">Unforgettable</span>
                <span className="block">Events</span>
              </div>
              <span className="block text-secondary mt-8 md:mt-12">Effortlessly</span>
            </h1>
            
            <p className="font-open-sans text-lg md:text-xl text-dark/80 mt-8">
              Create, manage, and perfect your events with our all-in-one platform
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <NavLink
                to="/signup"
                className="px-8 py-4 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors font-semibold"
              >
                Start Free Trial
              </NavLink>
              <NavLink
                to="/demo"
                className="px-8 py-4 bg-dark text-white rounded-full hover:bg-dark/90 transition-colors font-semibold flex items-center gap-2"
              >
                Watch Demo
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.7 9.3l-5-5c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3.3 3.3H2c-.6 0-1 .4-1 1s.4 1 1 1h11.6l-3.3 3.3c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l5-5c.4-.4.4-1 0-1.4z"/>
                </svg>
              </NavLink>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="\images\Neatly Organized Desk Setup_processed.png" 
              alt="Event management dashboard"
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero