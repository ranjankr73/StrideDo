import { FiPlus } from 'react-icons/fi';
import useTaskStore from '../../store/task';
import { useState } from 'react';
import TaskForm from '../TaskForm';
import { appName } from '../../constant';

const Header = () => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const { stats } = useTaskStore();
  const currentStats = stats();

  return (
    <header className="bg-[var(--primary-color)] shadow-sm fixed w-full top-0 z-50 border-b border-[var(--border-color)] font-montserrat">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white">{appName.first}</span>
          <span className="text-2xl font-bold text-gray-800">{appName.second}</span>
        </div>

        {/* Stats */}
        <div className="md:flex items-center gap-6">
          <StatItem label="Active" value={currentStats.active} />
          <div className="h-6 w-px bg-white/20" />
          <StatItem label="Completed" value={currentStats.completed} />
          <div className="h-6 w-px bg-white/20" />
          <StatItem label="Overdue" value={currentStats.overdue} />
        </div>

        {/* New Task Button */}
        <button
          onClick={() => setShowTaskForm(true)}
          className="bg-white/90 hover:bg-white text-[var(--primary-color)] px-4 py-2.5 rounded-lg
          flex items-center gap-2 transition-all shadow-sm hover:shadow-md"
        >
          <FiPlus className="text-lg" />
          <span className="font-medium">Add Task</span>
        </button>
      </div>

      {showTaskForm && <TaskForm onClose={() => setShowTaskForm(false)} />}
    </header>
  );
};

const StatItem = ({ label, value }) => (
  <div className="flex items-center gap-2 text-white/90">
    <span className="font-medium">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

export default Header;