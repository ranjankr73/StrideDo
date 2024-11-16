import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { RiAddLargeFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";

export const AddTodoBar = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddTodo = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    reset();
  };

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/task/create-task",
        data,
        { withCredentials: true }
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
    handleCloseModal();
  };

  return (
    <div className="h-[100vh]">
      {/* Add Todo Bar */}
      <div className="fixed bottom-0 left-0 w-full flex justify-center items-center gap-4 bg-gray-100 p-4 shadow-lg">
        <div className="bg-slate-600 flex justify-center items-center p-2 h-14 rounded-full text-lg w-1/3">
          <input
            type="text"
            placeholder="Search tasks..."
            className="outline-none bg-transparent w-full text-white placeholder-gray-400 ml-4 mr-2"
          />
          <div className="rounded-full hover:bg-slate-400 flex justify-center items-center p-2">
            <IoSearch style={{ fontSize: "26px", color: "white" }} />
          </div>
        </div>
        <button
          className="flex justify-center items-center text-xl font-bold px-4 py-2 h-14 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg hover:scale-105 transition-transform duration-300 gap-x-2"
          onClick={handleAddTodo}
        >
          <RiAddLargeFill style={{ fontSize: "24px" }} /> Add Task
        </button>
      </div>

      {/* Modal for creating a new todo */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate__animated animate__fadeIn">
          <div className="bg-white p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-auto shadow-lg animate__animated animate__zoomIn">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
              Create New Task
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Title Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("title", { required: "Title is required" })}
                  placeholder="Enter todo title"
                  className={`w-full p-2 border rounded ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring focus:ring-green-300`}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Description Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Description
                </label>
                <textarea
                  {...register("description")}
                  placeholder="Enter todo description"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
                />
              </div>

              {/* Due Date Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Due Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  {...register("dueDate", { required: "Due Date is required" })}
                  className={`w-full p-2 border rounded ${
                    errors.dueDate ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring focus:ring-green-300`}
                />
                {errors.dueDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.dueDate.message}
                  </p>
                )}
              </div>

              {/* Priority Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Priority <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("priority", {
                    required: "Priority is required",
                  })}
                  className={`w-full p-2 border rounded ${
                    errors.priority ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring focus:ring-green-300`}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select priority
                  </option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
                {errors.priority && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.priority.message}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition-colors"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-transform hover:scale-105"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
