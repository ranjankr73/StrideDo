import React from "react";
import { NavLink } from "react-router-dom";

const Pricing = ({ plans }) => {
  

  return (
    <section className="bg-[var(--background)] py-16 md:py-24 border-t border-[var(--border-color)]">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
          Simple <span className="text-[var(--primary-color)]">Pricing</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 rounded-xl bg-white ${
                plan.featured
                  ? "border-2 border-[var(--primary-color)] shadow-lg"
                  : "border border-[var(--border-color)]"
              }`}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)] mb-4">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                  ${plan.price}
                </span>
                {plan.name !== "Team" && (
                  <span className="text-[var(--text-secondary)]">/month</span>
                )}
              </div>
              <ul className="space-y-3 md:space-y-4 mb-6">
                {plan.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-start gap-2 text-[var(--text-secondary)]"
                  >
                    <svg
                      className="w-5 h-5 text-[var(--primary-color)] flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.7 7.3c.4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0l-3-3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3 6.3-6.3c.4-.4 1-.4 1.4 0z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <NavLink
                to={plan.name === 'Campus' ? '/contact' : '/signup'}
                className={`w-full block text-center py-2.5 md:py-3 rounded-full font-medium transition-colors ${
                  plan.featured
                    ? "bg-[var(--primary-color)] text-white hover:bg-[var(--primary-hover)]"
                    : "bg-[var(--background)] text-[var(--text-primary)] hover:bg-gray-50 border border-[var(--border-color)]"
                }`}
              >
                {plan.cta || "Get Started"}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;