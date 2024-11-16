import React, { useEffect, useState } from "react";
import axios from "axios";
import { HomeNavbar } from "../components/navbar/HomeNavbar.jsx";
import { TaskItem } from "../components/task/TaskItem.jsx";
import { AddTodoBar } from "../components/navbar/AddTodoBar.jsx";

export const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/task/all-tasks",
        { withCredentials: true }
      );
      setTasks(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="relative bg-gray-100 min-h-screen">
      <HomeNavbar />
      {/* Task Grid Container */}
      <div className="mx-auto my-16 px-8 max-w-7xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 py-6">Your Tasks</h2>

        {/* Grid for displaying tasks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tasks.length === 0 ? (
            <div className="col-span-full text-center text-gray-600">
              <p>No tasks added yet...</p>
            </div>
          ) : (
            tasks.map((task) => (
              <TaskItem
                key={task._id}
                _id={task._id}
                title={task.title}
                dueDate={task.dueDate}
                description={task.description}
                priority={task.priority}
                status={task.status}
                onStatusChange={(isCompleted) => updateTaskStatus(task._id, isCompleted)}
              />
            ))
          )}
        </div>
      </div>

      {/* AddTodoBar at the bottom */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full px-8">
        <AddTodoBar />
      </div>
    </div>
  );
};
