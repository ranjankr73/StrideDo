import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import useAuthStore from '../store/auth';
import { appName } from '../constant';

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser, signup, loading, error } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if(currentUser){
      navigate('/dashboard');
    }
  }, [currentUser, navigate]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    const response = await signup({ fullName, email, password });
    if(response){
      toast.success('Account created successfully');
    }else{
      error && toast.error(error);
    }
  };

  return (
    <section className="min-h-screen bg-[var(--background)] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-xl shadow-lg overflow-hidden border border-[var(--border-color)]">
          {/* Left Form Section */}
          <div className="p-8 md:p-12 lg:p-16">
            <NavLink 
              to="/" 
              className="flex items-center text-2xl font-bold text-[var(--text-primary)] hover:text-[var(--primary-color)]"
            >
              <span>{appName.first}</span>
              <span className="text-[var(--primary-color)]">{appName.second}</span>
            </NavLink>

            <form onSubmit={handleSubmit} className="mt-8 md:mt-12 space-y-6">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-2">
                  Start Organizing Today
                </h2>
                <p className="text-[var(--text-secondary)]">
                  Get 14 days free access to premium features
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[var(--text-primary)]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Alex Johnson"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)/20]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[var(--text-primary)]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)/20]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[var(--text-primary)]">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)/20]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[var(--primary-color)] text-white rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-colors"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>

              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                <p className="text-[var(--text-secondary)]">
                  Already have an account?{' '}
                  <NavLink
                    to="/signin"
                    className="text-[var(--primary-color)] font-medium hover:underline"
                  >
                    Sign in
                  </NavLink>
                </p>
                <NavLink
                  to="/privacy-policy"
                  className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
                >
                  Privacy Policy
                </NavLink>
              </div>
            </form>
          </div>

          {/* Right Image Section */}
          <div className="hidden md:block relative h-full min-h-[400px] bg-[var(--primary-color)/5]">
            <img
              src="\images\Café Gathering.jpeg"
              alt="Productivity dashboard preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup