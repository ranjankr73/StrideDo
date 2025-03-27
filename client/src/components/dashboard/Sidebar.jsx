import { FiMoon, FiSun, FiLogOut, FiGrid, FiCheckCircle, FiClock, FiZap } from 'react-icons/fi';
import useTaskStore from '../../store/task';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/auth';

const Sidebar = () => {
  const { logout } = useAuthStore();
  const { selectedFilter, setFilter } = useTaskStore();
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleLogout = async () => {
    await logout();
    navigate('/signin');
  }

  const filters = [
    { id: 'all', label: 'All Tasks', icon: <FiGrid className="w-5 h-5" /> },
    { id: 'active', label: 'Active', icon: <FiZap className="w-5 h-5" /> },
    { id: 'completed', label: 'Completed', icon: <FiCheckCircle className="w-5 h-5" /> },
    { id: 'overdue', label: 'Overdue', icon: <FiClock className="w-5 h-5" /> },
  ];

  return (
    <nav className="w-64 bg-gradient-to-b from-indigo-900 to-indigo-800 fixed h-full flex flex-col">
      <div className="p-6 pt-8 flex-1">
        <h2 className="text-xl font-bold text-white mb-8 px-4">Task Manager</h2>
        
        <div className="space-y-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setFilter(filter.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                ${selectedFilter === filter.id 
                  ? 'bg-indigo-100/10 text-white border-l-4 border-white'
                  : 'text-indigo-100/70 hover:bg-indigo-100/5 hover:text-white'}`
              }
            >
              {filter.icon}
              <span className="font-medium">{filter.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-indigo-100/10">
        <button
          onClick={toggleTheme}
          className="w-full flex items-center gap-3 px-4 py-3 text-indigo-100 hover:bg-indigo-100/5 rounded-lg transition-colors"
        >
          {darkMode ? (
            <FiSun className="w-5 h-5 text-amber-400" />
          ) : (
            <FiMoon className="w-5 h-5 text-indigo-200" />
          )}
          <span>{darkMode ? 'Light Theme' : 'Dark Theme'}</span>
        </button>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-red-100 hover:bg-red-100/10 rounded-lg transition-colors mt-2"
        >
          <FiLogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;