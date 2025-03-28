import React from 'react'
import { FaCheckCircle, FaProjectDiagram, FaBell } from 'react-icons/fa'

const Features = () => {
  const features = [
    {
      icon: <FaCheckCircle className="w-full h-full" />,
      title: "Task Management",
      description: "Create, organize, and prioritize tasks with intuitive drag-and-drop interface"
    },
    {
      icon: <FaProjectDiagram className="w-full h-full" />,
      title: "Project Organization",
      description: "Break down projects into subtasks and milestones with progress tracking"
    },
    {
      icon: <FaBell className="w-full h-full" />,
      title: "Smart Reminders",
      description: "Automated reminders and due date notifications across all your devices"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-[var(--background)]">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
          Powerful <span className="text-[var(--primary-color)]">Features</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[var(--background)] p-6 rounded-xl border border-[var(--border-color)] hover:shadow-lg transition-all"
            >
              <div className="text-[var(--primary-color)] text-4xl mb-4 w-12 h-12">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                {feature.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features