import React from "react";
import { NavLink } from "react-router-dom";

const CTA = ({ title = "Ready to Boost Your Productivity?" }) => {
  return (
    <section className="bg-[var(--primary-color)] py-16 md:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="animate-pulse-slow absolute w-64 h-64 bg-white/20 rounded-full -top-32 -left-32" />
        <div className="animate-pulse-slow absolute w-64 h-64 bg-white/20 rounded-full -bottom-32 -right-32" />
      </div>

      <div className="container mx-auto px-4 md:px-8 text-center relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8">
            <NavLink 
              to="/signup" 
              className="px-6 py-2 md:px-8 md:py-3 bg-white text-[var(--primary-color)] rounded-full font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              Start Free Trial
            </NavLink>
            <NavLink
              to="/demo"
              className="px-6 py-2 md:px-8 md:py-3 border-2 border-white/80 text-white rounded-full font-medium hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Watch Demo
            </NavLink>
          </div>
          <p className="text-white/80 text-sm mt-6">
            No credit card required • 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;