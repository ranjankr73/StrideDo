// Header.jsx
import { FiPlus } from 'react-icons/fi';
import useTaskStore from '../../store/task';
import { useState } from 'react';
import TaskForm from '../TaskForm';

const Header = () => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const { stats } = useTaskStore();
  const currentStats = stats();

  return (
    <header className="bg-gradient-to-r from-indigo-900 to-indigo-800 shadow-xl fixed w-full top-0 z-20">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="font-montserrat font-bold text-2xl text-white tracking-tight">
          TODO<span className="text-indigo-300">ing</span>
        </div>
        
        <div className="flex gap-5">
          <StatItem 
            label="Active" 
            value={currentStats.active} 
            iconColor="text-blue-400" 
            bgColor="bg-blue-100/20" 
          />
          <StatItem 
            label="Completed" 
            value={currentStats.completed} 
            iconColor="text-green-400" 
            bgColor="bg-green-100/20" 
          />
          <StatItem 
            label="Overdue" 
            value={currentStats.overdue} 
            iconColor="text-red-400" 
            bgColor="bg-red-100/20" 
          />
        </div>

        <button
          onClick={() => setShowTaskForm(true)}
          className="bg-indigo-400 hover:bg-indigo-300 text-indigo-900 px-6 py-3 rounded-xl
          flex items-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          <FiPlus className="text-xl" />
          <span className="font-semibold">New Task</span>
        </button>
      </div>

      {showTaskForm && <TaskForm onClose={() => setShowTaskForm(false)} />}
    </header>
  );
};

const StatItem = ({ label, value, iconColor, bgColor }) => (
  <div className={`${bgColor} px-5 py-3 rounded-xl flex items-center gap-3 backdrop-blur-sm`}>
    <span className={`text-sm font-medium text-white/90`}>{label}</span>
    <span className={`text-xl font-bold ${iconColor}`}>{value}</span>
  </div>
);

export default Header;