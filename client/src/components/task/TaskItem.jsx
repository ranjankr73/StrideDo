import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

export const TaskItem = ({ _id, title, dueDate, description, priority, status }) => {
  
  const priorityColors = {
    High: "bg-red-100 border-red-500",
    Medium: "bg-yellow-100 border-yellow-500",
    Low: "bg-green-100 border-green-500",
  };

  return (
    <div
      className={`border rounded-lg w-full max-w-md p-4 space-y-3 shadow-lg transition-all duration-300 ${
        priorityColors[priority] || "bg-gray-100 border-gray-300"
      }`}
    >
      <div className="flex justify-between items-center">
        <h1
          className={`text-xl font-bold text-gray-800 `}
        >
          {title && title.length > 20 ? title.slice(0, 20) + "..." : title}
        </h1>
      </div>

      {/* Due Date */}
      <div className="flex items-center gap-2 text-gray-700">
        <FaCalendarAlt className="text-gray-500" />
        <div className="text-lg">
          <span className="block font-medium">{dueDate}</span>
        </div>
      </div>

      {/* Description */}
      <div className="text-gray-600 text-sm">
        {description && description.length > 30 ? description.slice(0, 30) + '...' : description  || "No description available"}
      </div>
    </div>
  );
};
