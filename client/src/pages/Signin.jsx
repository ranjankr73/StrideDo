import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import useAuthStore from '../store/auth';

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { currentUser, signin, loading, error } = useAuthStore();

  useEffect(() => {
    if(currentUser){
      navigate('/dashboard');
    }
  }, [currentUser, navigate]);
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    const response = await signin({ email, password });
    if(response){
      toast.success('Signed in successfully');
    }else{
      error && toast.error(error);
    }
  }

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
              <span>TODO</span>
              <span className="text-[var(--primary-color)]">ing</span>
            </NavLink>

            <form onSubmit={handleSubmit} className="mt-8 md:mt-12 space-y-6">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-2">
                  Welcome Back
                </h2>
                <p className="text-[var(--text-secondary)]">
                  Sign in to manage your tasks
                </p>
              </div>

              <div className="space-y-4">
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

              <div className="flex justify-between items-center">
                <NavLink
                  to="/forgot-password"
                  className="text-sm text-[var(--primary-color)] hover:underline"
                >
                  Forgot Password?
                </NavLink>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[var(--primary-color)] text-white rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-colors"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>

              <div className="text-center">
                <p className="text-[var(--text-secondary)]">
                  Don't have an account?{' '}
                  <NavLink
                    to="/signup"
                    className="text-[var(--primary-color)] font-medium hover:underline"
                  >
                    Create Account
                  </NavLink>
                </p>
              </div>
            </form>
          </div>

          {/* Right Image Section */}
          <div className="hidden md:block relative h-full min-h-[400px] bg-[var(--primary-color)/5]">
            <img
              src="\images\Collaborative Workspace.jpeg"
              alt="Productivity dashboard"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signin