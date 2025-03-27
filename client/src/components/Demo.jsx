import React from 'react'

const Demo = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl" />
            <img 
              src="\images\dashboard.webp" 
              alt="Platform demo" 
              className="relative z-10 rounded-xl shadow-xl"
            />
          </div>
          
          <div className="space-y-8">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-dark">
              See It <span className="text-accent">In Action</span>
            </h2>
            
            <ul className="space-y-6">
              {['Real-time updates', 'Drag-and-drop interface', 'Multi-platform sync', 'Advanced analytics'].map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.7 7.3c.4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0l-3-3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3 6.3-6.3c.4-.4 1-.4 1.4 0z"/>
                    </svg>
                  </div>
                  <span className="font-open-sans text-lg text-dark/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demo