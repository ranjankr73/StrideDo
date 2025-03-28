import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Martinez",
      role: "Product Manager",
      text: "TODOing transformed how our team manages projects. The intuitive interface and smart reminders keep everyone on track.",
      image: "/images/Professional Portrait of a Man.jpeg"
    },
    {
      name: "Priya Kapoor",
      role: "Freelance Developer",
      text: "I've tried countless todo apps, but TODOing's cross-device sync and priority management are game-changers.",
      image: "/images/Elegant Woman in Traditional Saree.jpeg"
    },
    {
      name: "James Wilson",
      role: "Startup Founder",
      text: "The analytics features helped us identify workflow bottlenecks we didn't even know existed. Essential for any team!",
      image: "/images/user3.jpg"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-[var(--background)] border-t border-[var(--border-color)]">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
          Loved by <span className="text-[var(--primary-color)]">Productive Teams</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              user={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials