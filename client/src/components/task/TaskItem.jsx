import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

export const TaskItem = ({ _id, title, dueDate, description, priority, status, onStatusChange }) => {
  // Priority-based background colors
  const priorityColors = {
    High: "bg-red-100 border-red-500",
    Medium: "bg-yellow-100 border-yellow-500",
    Low: "bg-green-100 border-green-500",
  };

  const formattedDate = dueDate
    ? new Date(dueDate.includes("T") ? dueDate : `${dueDate}T00:00`).toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : "No due date";

  const [date, time] = formattedDate.split(", ");

  // Task completion state
  const [isCompleted, setIsCompleted] = useState(status === "completed");

  // Handle checkbox toggle
  const handleCheckboxChange = () => {
    const newStatus = !isCompleted;
    console.log(`Task ${_id}: status changed to`, newStatus ? "completed" : "pending"); // Debugging log
    setIsCompleted(newStatus);
    onStatusChange(newStatus);
  };

  return (
    <div
      className={`border rounded-lg w-full max-w-md p-4 space-y-3 shadow-lg transition-all duration-300 ${
        priorityColors[priority] || "bg-gray-100 border-gray-300"
      } ${isCompleted ? "bg-gray-200 opacity-50" : ""}`}
    >
      {/* Title and Checkbox */}
      <div className="flex justify-between items-center">
        <h1
          className={`text-xl font-bold text-gray-800 ${
            isCompleted ? "line-through text-gray-500" : ""
          }`}
        >
          {title}
        </h1>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            className="appearance-none h-5 w-5 border-2 border-gray-500 rounded-md checked:bg-green-500 checked:border-green-500 transition-all"
            checked={isCompleted}
            onChange={handleCheckboxChange}
          />
          <span className="hidden">Mark Complete</span>
        </label>
      </div>

      {/* Completed Tag */}
      {isCompleted && (
        <div className="text-sm text-green-500 bg-green-100 px-2 py-1 rounded-full w-max">
          Completed
        </div>
      )}

      {/* Due Date */}
      <div className="flex items-center gap-2 text-gray-700">
        <FaCalendarAlt className="text-gray-500" />
        <div className="text-lg">
          <span className="block font-medium">{date}</span>
          {time && <span className="text-sm text-gray-600">{time}</span>}
        </div>
      </div>

      {/* Description */}
      <div className="text-gray-600 text-sm">
        {description || "No description available"}
      </div>
    </div>
  );
};
