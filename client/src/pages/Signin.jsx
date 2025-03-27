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

    try {
      await signin({
        email,
        password
      });
      
      toast.success('Signed in successfully.');
    } catch (err) {
      error ? toast.error(error) : ''
    }
  }

  return (
    <section className="min-h-screen bg-primary/5 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Left Form Section */}
          <div className="p-8 md:p-12 lg:p-16">
            <NavLink 
              to="/" 
              className="font-montserrat text-2xl font-bold hover:text-accent transition-colors"
            >
              <span>atithi</span>
              <span className="text-accent">bhava</span>
            </NavLink>

            <form onSubmit={handleSubmit} className="mt-8 md:mt-12 space-y-6">
              <div className="text-center">
                <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-dark mb-2">
                  Welcome Back
                </h2>
                <p className="font-open-sans text-dark/80">
                  Sign in to manage your events
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="font-open-sans font-medium block ml-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-3 rounded-full border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-open-sans font-medium block ml-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-6 py-3 rounded-full border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <NavLink
                  to="/forgot-password"
                  className="text-sm text-accent hover:underline"
                >
                  Forgot Password?
                </NavLink>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-accent text-white rounded-full font-semibold hover:bg-accent/90 transition-colors"
              >
                {loading ? 'Processing...' : 'Sign In'}
              </button>

              <div className="text-center">
                <p className="font-open-sans text-dark/80">
                  Don't have an account?{' '}
                  <NavLink
                    to="/signup"
                    className="text-accent font-semibold hover:underline"
                  >
                    Sign up
                  </NavLink>
                </p>
              </div>
            </form>
          </div>

          {/* Right Image Section */}
          <div className="hidden md:block relative h-full min-h-[400px]">
            <img
              src="\images\Collaborative Workspace.jpeg"
              alt="Event planning session"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signin;