import React from 'react'
import { NavLink } from 'react-router-dom'
import CTA from '../components/CTA'

const About = () => {
  return (
    <section className="min-h-screen bg-primary/5 py-32">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-dark space-y-6">
              Crafting <span className="text-accent">Unforgettable</span> 
              <span className="block text-secondary">Event Experiences</span>
            </h1>
            <p className="font-open-sans text-lg text-dark/80">
              At Atithi Bhava, we believe every event tells a story. Born from a passion for seamless celebrations, 
              our platform bridges tradition with technology, helping you create moments that linger in memories 
              long after the last guest departs.
            </p>
          </div>
          <img 
            src="\images\Collaborative Work Session.jpeg" 
            alt="Team collaborating on event planning"
            className="rounded-xl shadow-xl"
          />
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-dark text-center mb-12">
            Our <span className="text-accent">Guiding Principles</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors">
                <div className="text-accent text-3xl mb-4">{value.icon}</div>
                <h3 className="font-montserrat text-xl font-semibold mb-4">
                  {value.title}
                </h3>
                <p className="font-open-sans text-dark/80">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-dark text-center mb-12">
          Our <span className="text-accent">Journey</span>
        </h2>
        <div className="space-y-12 max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-accent">
              <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-1" />
              <h3 className="font-montserrat text-xl font-semibold text-dark">
                {item.year} — {item.title}
              </h3>
              <p className="font-open-sans text-dark/80 mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-dark text-center mb-12">
            Meet the <span className="text-accent">Visionaries</span>
          </h2>
          <div className="flex justify-center items-center gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
                />
                <h3 className="font-montserrat text-xl font-semibold">{member.name}</h3>
                <p className="font-open-sans text-dark/80 mb-4">{member.role}</p>
                <p className="font-open-sans text-dark/80 text-sm max-w-xs mx-auto">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTA title='Ready to Revolutionize Your Events?' />
      
    </section>
  )
}

// Placeholder Data
const values = [
  {
    icon: '🎯',
    title: "Precision Planning",
    description: "Military-grade organization meets creative flair in every event blueprint"
  },
  {
    icon: '🤝',
    title: "Guest First Approach",
    description: "Every feature designed around attendee experience and host convenience"
  },
  {
    icon: '🚀',
    title: "Continuous Innovation",
    description: "Pioneering tools that stay ahead of event trends"
  }
]

const timeline = [
  // {
  //   year: "2022",
  //   title: "Foundation Laid",
  //   description: "Conceptualized during a chaotic wedding planning experience"
  // },
  // {
  //   year: "2023",
  //   title: "Beta Launch",
  //   description: "First version released to 50+ early adopters"
  // },
  // {
  //   year: "2024",
  //   title: "Platform Revolution",
  //   description: "Integrated AI-powered guest management system"
  // }

  {
      year: "2025",
      title: "Foundation Laid",
      description: "Conceptualized during a chaotic wedding planning experience"
    }
]

const team = [
  // {
  //   image: "/images/founder1.jpg",
  //   name: "Aarav Sharma",
  //   role: "CEO & Founder",
  //   bio: "Event tech enthusiast with decade of experience in hospitality management"
  // },
  // {
  //   image: "/images/tech-lead.jpg",
  //   name: "Neha Gupta",
  //   role: "CTO",
  //   bio: "Full-stack wizard passionate about simplifying complex workflows"
  // },
  // {
  //   image: "/images/designer.jpg",
  //   name: "Rohan Mehta",
  //   role: "Lead Designer",
  //   bio: "Creates interfaces that feel like second nature to users"
  // },
  {
    image: "public/images/DSC_0393.jpg",
    name: "Ranjan Kumar",
    role: "Founder",
    bio: "Creates product for experimenting his ideas."
  }
]

export default About