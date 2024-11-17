import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../features/user/authSlice";
import { isAsyncThunkAction } from "@reduxjs/toolkit";

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  
  const signup = async (data) => {
    dispatch(signupUser(data));
  };

  const handleInputBlur = async (fieldName) => {
    const isValid = await trigger(fieldName); // Validate a specific field
    if (!isValid && errors[fieldName]) {
      toast(errors[fieldName]?.message, {
        style: {
          backgroundColor: '#fd7f20' 
        }
      });
    }
  };

  useEffect(() => {
    if(isAuthenticated){
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return (
    <form
      onSubmit={handleSubmit(signup)}
      className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-700">
        Signup Form
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            {...register("firstName", {
              required: "First Name is required.",
            })}
            onBlur={() => handleInputBlur("firstName")}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-400"
            placeholder="John"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            {...register("lastName")}
            onBlur={() => handleInputBlur("lastName")}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-400"
            placeholder="Doe"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Enter a valid email address.",
            },
          })}
          onBlur={() => handleInputBlur("email")}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-400"
          placeholder="example@mail.com"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required.",
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
              message:
                "Password must be at least 8 characters long, with one uppercase letter, one lowercase letter, and one number.",
            },
          })}
          onBlur={() => handleInputBlur("password")}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-400"
          placeholder="********"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
      >
        {loading ? 'Signing up...' : 'Sign Up'}
      </button>
    </form>
  );
};
