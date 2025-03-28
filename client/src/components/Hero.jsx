import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-[var(--background)] py-16 md:py-24 lg:py-32 border-b border-[var(--border-color)]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)]">
              <div className="leading-tight">
                Organize Your
                <span className="block mt-4 text-[var(--primary-color)]">Tasks &amp; Projects</span>
              </div>
              <span className="block text-[var(--text-secondary)] text-3xl md:text-4xl mt-6">
                Achieve More Everyday
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--text-secondary)] mt-6">
              Streamline your workflow with smart task management, priority sorting, 
              and intuitive project organization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <NavLink
                to="/signup"
                className="px-6 py-3 bg-[var(--primary-color)] text-white rounded-full hover:bg-[var(--primary-hover)] transition-colors font-medium text-sm md:text-base"
              >
                Start Free Trial
              </NavLink>
              <NavLink
                to="/demo"
                className="px-6 py-3 bg-white text-[var(--text-primary)] rounded-full hover:bg-[var(--background)] transition-colors font-medium border border-[var(--border-color)] text-sm md:text-base flex items-center gap-2"
              >
                Watch Demo
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.7 9.3l-5-5c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3.3 3.3H2c-.6 0-1 .4-1 1s.4 1 1 1h11.6l-3.3 3.3c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l5-5c.4-.4.4-1 0-1.4z"/>
                </svg>
              </NavLink>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="relative rounded-xl overflow-hidden bg-white p-4">
              <img 
                src="\images\Neatly Organized Desk Setup_processed.png" 
                alt="TODOing app interface"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero