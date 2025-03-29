import { FiEdit, FiTrash, FiCheck } from 'react-icons/fi';
import useTaskStore from '../../store/task';
import TaskForm from '../TaskForm';
import { useState } from 'react';
import toast from 'react-hot-toast';

const TaskCard = ({ task }) => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const { deleteTask, toggleComplete, error } = useTaskStore();

  const handleToggleComplete = async () => {
    await toggleComplete(task._id, task.completed);
    if(!task.completed){
      toast.success("Marked as completed.");
    }else{
      toast.success("Marked as incomplete.");
    }
  };

  const handleDelete = async () => {
    const response = await deleteTask(task._id);
    if(response){
      toast.success("Task deleted successfully.");
    }else{
      error && toast.error(error);
    }
  };

  return (
    <>
      <div className="container bg-white rounded-xl border border-[var(--border-color)] shadow-sm hover:shadow-md transition-all p-5 font-montserrat">
        <div className="flex justify-between items-start mb-3">
          <span className={`px-2.5 py-1 text-xs font-medium rounded-full 
            ${task.priority === 'high' ? 'bg-[var(--primary-color)/20] text-[var(--primary-color)]' :
              task.priority === 'medium' ? 'bg-amber-100 text-amber-700' :
              'bg-emerald-100 text-emerald-700'}`}>
            {task.priority}
          </span>
          <div className="flex gap-1">
            <button 
              onClick={() => setShowTaskForm(true)}
              className="p-2 rounded-full text-[var(--text-secondary)] hover:bg-[var(--background-hover)] hover:text-[var(--primary-color)] transition-colors"
            >
              <FiEdit className="w-4 h-4" />
            </button>
            <button 
              onClick={handleDelete}
              className="p-2 rounded-full text-[var(--text-secondary)] hover:bg-red-100 hover:text-red-600 transition-colors"
            >
              <FiTrash className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <h3 className="font-semibold text-[var(--text-primary)] mb-1.5">{task.title}</h3>
        <p className="text-sm text-[var(--text-secondary)] mb-3 whitespace-pre-wrap break-words">{task.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-[var(--text-secondary)]">
            Due: {new Date(task?.dueDate).toLocaleString('en-IN', { 
              year: 'numeric', 
              month: '2-digit', 
              day: '2-digit', 
              hour: '2-digit', 
              minute: '2-digit', 
              hour12: false 
            })}
          </span>
          <button
            onClick={handleToggleComplete}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-sm transition-colors
              ${task.completed 
                ? 'bg-emerald-100 text-emerald-700' 
                : 'bg-[var(--primary-color)/10] text-[var(--primary-color)] hover:bg-[var(--primary-color)/20]'}`}
          >
            <FiCheck className={`w-4 h-4 ${task.completed ? 'text-emerald-500' : 'text-[var(--primary-color)]'}`} />
            {task.completed ? 'Completed' : 'Mark Complete'}
          </button>
        </div>
      </div>

      {showTaskForm && (
        <TaskForm 
          task={task} 
          onClose={() => setShowTaskForm(false)}
        />
      )}
    </>
  );
};

export default TaskCard;