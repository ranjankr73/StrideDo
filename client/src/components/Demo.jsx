import React from 'react'

const Demo = () => {
  return (
    <section className="py-16 md:py-24 bg-[var(--background)] border-t border-[var(--border-color)]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-last md:order-first">
            <div className="rounded-xl overflow-hidden border border-[var(--border-color)] shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/images/todo-interface-demo.png" 
                alt="TODOing app interface" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
            </div>
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
              Experience 
              <span className="block text-[var(--primary-color)] mt-2">Productivity Boost</span>
            </h2>
            
            <ul className="space-y-4 md:space-y-6">
              {[
                'Instant task creation & organization',
                'Drag-and-drop priority management',
                'Cross-device synchronization',
                'Smart due date reminders',
                'Progress tracking & analytics'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 flex-shrink-0 mt-1 text-[var(--primary-color)]">
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.7 7.3c.4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0l-3-3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3 6.3-6.3c.4-.4 1-.4 1.4 0z"/>
                    </svg>
                  </div>
                  <span className="text-[var(--text-secondary)] text-base md:text-lg">
                    {feature}
                  </span>
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