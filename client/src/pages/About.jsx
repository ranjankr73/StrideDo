import React from 'react'
import { NavLink } from 'react-router-dom'
import CTA from '../components/CTA'

const About = () => {
  return (
    <section className="min-h-screen bg-[var(--background)] py-16 md:py-24">
      {/* Hero Section */}
      <div className="container my-40 mx-auto px-4 md:px-8 mb-16 md:mb-40">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              Revolutionizing
              <span className="block text-[var(--primary-color)] mt-3">Productivity</span>
              <span className="block text-[var(--text-secondary)] text-3xl mt-4">
                One Task at a Time
              </span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)]">
              Born from late-night coding sessions and countless productivity experiments, 
              TODOing empowers individuals and teams to achieve more with intelligent task 
              management that adapts to your workflow.
            </p>
          </div>
          <img 
            src="/images/dashboard-screenshot.png" 
            alt="App interface preview"
            className="rounded-xl border border-[var(--border-color)] shadow-lg"
          />
        </div>
      </div>

      {/* Core Values */}
      <section className="bg-[var(--background)] border-y border-[var(--border-color)] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
            Our <span className="text-[var(--primary-color)]">Principles</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-xl bg-white border border-[var(--border-color)] hover:shadow-lg transition-all">
                <div className="text-[var(--primary-color)] text-3xl mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
          Our <span className="text-[var(--primary-color)]">Journey</span>
        </h2>
        <div className="space-y-12 max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-[var(--primary-color)]">
              <div className="absolute w-4 h-4 bg-[var(--primary-color)] rounded-full -left-[9px] top-1" />
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                {item.year} — {item.title}
              </h3>
              <p className="text-[var(--text-secondary)] mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
            Building <span className="text-[var(--primary-color)]">Tomorrow's Tools</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {team.map((member, index) => (
              <div key={index} className="text-center max-w-xs">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-6 border-4 border-[var(--primary-color)/20]"
                />
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">{member.name}</h3>
                <p className="text-[var(--text-secondary)] mb-4">{member.role}</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Join Our Productivity Revolution" />
    </section>
  )
}

// Updated Content
const values = [
  {
    icon: '🚀',
    title: "Efficiency First",
    description: "Designed by productivity nerds to eliminate friction in task management"
  },
  {
    icon: '🧠',
    title: "Smart Automation",
    description: "AI-powered features that learn from your workflow patterns"
  },
  {
    icon: '🔒',
    title: "Privacy Focused",
    description: "Your data stays yours - encrypted and never sold"
  }
]

const timeline = [
  {
    year: "2023",
    title: "Concept Born",
    description: "Created during a hackathon to solve personal productivity struggles"
  },
  {
    year: "2024",
    title: "Beta Launch",
    description: "First release to 500+ early adopters from tech communities"
  },
  {
    year: "2025",
    title: "AI Integration",
    description: "Launched smart task prioritization and auto-scheduling"
  }
]

const team = [
  {
    image: "/images/ranjan-kumar.JPG",
    name: "Ranjan Kumar",
    role: "Founder & Lead Developer",
    bio: "Full-stack developer passionate about productivity systems and minimalist design"
  }
]

export default About