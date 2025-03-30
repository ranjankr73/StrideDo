import React from 'react'
import { NavLink } from 'react-router-dom'
import Pricing from '../components/Pricing'
import CTA from '../components/CTA'
import { FaUsers, FaShieldAlt, FaMobileAlt, FaCheckCircle } from 'react-icons/fa'

const PricingPage = () => {
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
          price: "29",
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

  const faqs = [
    {
      question: "Is there a discount for MNNIT students?",
      answer: "Yes! MNNIT students get 50% off on Pro plan with valid college ID"
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Absolutely! You can upgrade/downgrade anytime from your dashboard"
    },
    {
      question: "How secure is my data?",
      answer: "We use enterprise-grade security with servers located in India"
    },
    {
      question: "What payment methods do you accept?",
      answer: "All UPI methods, credit/debit cards, and net banking"
    }
  ]

  return (
    <div className="bg-[var(--background)]">
      {/* Modified Pricing Component */}
      <Pricing plans={plans} />

      {/* Campus Benefits Section */}
      <section className="bg-[var(--primary-color)/5] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
            Special <span className="text-[var(--primary-color)]">MNNIT</span> Benefits
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <FaUsers className="w-12 h-12 text-[var(--primary-color)] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Campus-wide License</h3>
              <p className="text-[var(--text-secondary)]">Free access for all students & faculty</p>
            </div>
            
            <div className="text-center p-6">
              <FaShieldAlt className="w-12 h-12 text-[var(--primary-color)] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Data Sovereignty</h3>
              <p className="text-[var(--text-secondary)]">Indian servers with GDPR compliance</p>
            </div>
            
            <div className="text-center p-6">
              <FaMobileAlt className="w-12 h-12 text-[var(--primary-color)] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Mobile First</h3>
              <p className="text-[var(--text-secondary)]">Optimized for campus wifi networks</p>
            </div>
            
            <div className="text-center p-6">
              <FaCheckCircle className="w-12 h-12 text-[var(--primary-color)] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Skill Development</h3>
              <p className="text-[var(--text-secondary)]">Free productivity workshops</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-[var(--border-color)] hover:border-[var(--primary-color)] transition-colors"
            >
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">{faq.question}</h3>
              <p className="text-[var(--text-secondary)]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA title="Start Your Productivity Journey Today" />
    </div>
  )
}

export default PricingPage