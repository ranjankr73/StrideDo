import React from "react";
import { useForm } from "react-hook-form";
import { toaster } from "@/components/ui/toaster";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const navigate = useNavigate();
  
  const login = async (data) => {

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        data,
        { withCredentials: true }
      );
      toaster.create({
        title: res.data.msg,
        type: "success",
      });
      if (res.status === 200) {
        navigate("/home");
      }
    } catch (error) {
      toaster.create({
        title: error.response.data.msg,
        type: "error",
      });
    }
  };

  const handleInputBlur = async (fieldName) => {
    const isValid = await trigger(fieldName);
    if (!isValid && errors[fieldName]) {
      toaster.create({
        title: errors[fieldName]?.message,
        type: "warning",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(login)}
      className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-700">
        Login Form
      </h2>

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
                "Password must be valid.",
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
        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
      >
        Log In
      </button>
    </form>
  );
};
