import React from "react";
import { NavLink } from "react-router-dom";

const CTA = ({ title }) => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="bg-accent rounded-3xl p-8 md:p-12 text-center">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <NavLink
          to="/signup"
          className="inline-block px-8 py-3 bg-white text-accent rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Start Your Free Trial
        </NavLink>
      </div>
    </div>
  );
};

export default CTA;
