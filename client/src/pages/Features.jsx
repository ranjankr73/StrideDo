import React from 'react'
import { NavLink } from 'react-router-dom'
import Pricing from '../components/Pricing'
import CTA from '../components/CTA'

const Features = () => {

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
      price: "199",
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
    <section className="min-h-screen bg-[var(--background)] py-16 md:py-24">
      {/* Hero Section */}
      <div className="container my-40 mx-auto px-4 md:px-8 mb-16 md:mb-40">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Transform Your
            <span className="block text-[var(--primary-color)] mt-2">Productivity</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] md:text-xl">
            Powerful features designed to streamline your workflow and enhance task management
          </p>
        </div>
      </div>

      {/* Feature Categories */}
      <div className="bg-[var(--background)] border-y border-[var(--border-color)] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 md:p-8 rounded-xl bg-white border border-[var(--border-color)] hover:shadow-lg transition-all">
                <div className="text-[var(--primary-color)] text-3xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-[var(--text-secondary)]">
                      <svg 
                        className="w-5 h-5 text-[var(--primary-color)] flex-shrink-0 mt-0.5" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.7 7.3c.4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0l-3-3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3 6.3-6.3c.4-.4 1-.4 1.4 0z"/>
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 border border-[var(--border-color)] rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-[var(--primary-color)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--text-secondary)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <Pricing plans={plans}/>

      {/* CTA Section */}
      <CTA title="Ready to Supercharge Your Productivity?" />
    </section>
  )
}

// Todo-focused features data
const features = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
      </svg>
    ),
    title: "Smart Task Management",
    description: "Organize and prioritize tasks effortlessly",
    benefits: [
      "Drag-and-drop prioritization",
      "Custom categories & labels",
      "Quick entry with natural language",
      "Recurring tasks automation"
    ]
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
      </svg>
    ),
    title: "Project Organization",
    description: "Manage complex projects with ease",
    benefits: [
      "Subtasks & dependencies",
      "Progress tracking",
      "Collaborative workspaces",
      "File attachments & comments"
    ]
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Smart Reminders",
    description: "Never miss important deadlines",
    benefits: [
      "Customizable notifications",
      "Email/SMS reminders",
      "Location-based alerts",
      "Follow-up scheduling"
    ]
  }
]

const stats = [
  { value: "1M+", label: "Tasks Completed Daily" },
  { value: "98%", label: "User Satisfaction" },
  { value: "50K+", label: "Active Projects" },
  { value: "24/7", label: "Support Availability" }
]

export default Features