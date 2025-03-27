import { FiEdit, FiTrash, FiCheck } from 'react-icons/fi';
import useTaskStore from '../../store/task';
import TaskForm from '../TaskForm';
import { useState } from 'react';

const TaskCard = ({ task }) => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const { deleteTask, toggleComplete } = useTaskStore();

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
        <div className="flex justify-between items-start mb-4">
          <span className={`px-2 py-1 text-sm rounded-full 
            ${task.priority === 'high' ? 'bg-red-100 text-red-700' :
              task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
              'bg-green-100 text-green-700'}`}>
            {task.priority}
          </span>
          <div className="flex gap-2">
            <button 
              onClick={() => setShowTaskForm(true)}
              className="text-gray-400 hover:text-indigo-600 transition-colors"
            >
              <FiEdit />
            </button>
            <button 
              onClick={() => deleteTask(task._id)}
              className="text-gray-400 hover:text-red-600 transition-colors"
            >
              <FiTrash />
            </button>
          </div>
        </div>
        
        <h3 className="font-semibold text-lg mb-2">{task.title}</h3>
        <p className="text-gray-600 mb-4">{task.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            Due: {new Date(task?.dueDate).toLocaleString('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false })}
          </span>
          <button
            onClick={() => toggleComplete(task._id, task.completed)}
            className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-colors
              ${task.completed 
                ? 'bg-green-100 text-green-700' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            <FiCheck className={task.completed ? 'text-green-500' : 'text-gray-400'} />
            {task.completed ? 'Completed' : 'Mark Complete'}
          </button>
        </div>
      </div>

      {showTaskForm && (
        <TaskForm 
          task={task} 
          onClose={setShowTaskForm}
        />
      )}
    </>
  );
};

export default TaskCard;