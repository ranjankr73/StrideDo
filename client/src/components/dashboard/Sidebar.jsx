import React from 'react';
import { FiMoon, FiSun, FiLogOut, FiGrid, FiCheckCircle, FiClock, FiZap, FiHash } from 'react-icons/fi';
import useTaskStore from '../../store/task';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/auth';
// import useThemeStore from '../../store/theme';
import toast from 'react-hot-toast';

const Sidebar = () => {
  const { currentUser, logout } = useAuthStore();
  const { tasksToDisplay, setFilter, labels, currentLabel, setCurrentLabel } = useTaskStore();
  const [ darkMode, setDarkMode] = useState(false);
  // const { darkMode, toggleDarkMode } = useThemeStore();
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // document.documentElement.classList.toggle('dark');
  };

  const handleLogout = async () => {
    const response = await logout();
    if(response){
      toast.success("Logout successfully.");
    }else{
      toast.error("Try again!");
    }
    
    navigate('/signin');
  }

  const filters = [
    { id: 'all', label: 'All Tasks', icon: <FiGrid /> },
    { id: 'active', label: 'Active', icon: <FiZap /> },
    { id: 'completed', label: 'Completed', icon: <FiCheckCircle /> },
    { id: 'overdue', label: 'Overdue', icon: <FiClock /> },
  ];

  const handleDisplayTasks = (type, value) => {
    if(type === "filter"){
      setCurrentLabel("");
      setFilter(value);
    }else{
      setFilter("");
      setCurrentLabel(value);
    }
  }
  return (
    <nav className="w-64 bg-[var(--background)] border-r border-[var(--border-color)] fixed h-full flex flex-col font-montserrat z-40">
      <div className="p-4 py-24 flex-1">
        <h2 className="text-lg font-semibold text-[var(--text-primary)] px-3 py-4 border-b border-[var(--border-color)]">
          Hello, {currentUser.fullName}
        </h2>
        
        <div className="space-y-4 mt-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleDisplayTasks("filter", filter.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors
                ${tasksToDisplay === filter.id 
                  ? 'bg-[var(--primary-color)/20] text-[var(--primary-color)] border-l-2 border-[var(--primary-color)]'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--background-hover)]'}`
              }
            >
              {React.cloneElement(filter.icon, {
                className: `w-5 h-5 ${tasksToDisplay === filter.id ? 'text-[var(--primary-color)]' : 'text-[var(--text-secondary)]'}`
              })}
              <span className={`text-sm ${tasksToDisplay === filter.id ? 'font-semibold' : 'font-medium'}`}>
                {filter.label}
              </span>
            </button>
          ))}
        </div>

        <div className="space-y-1 mt-4">
          {labels.map((label, index) => (
            <button
              key={index}
              onClick={() => handleDisplayTasks("label", label)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors
                ${currentLabel === label 
                  ? 'text-[var(--primary-color)]'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--background-hover)]'}`
              }
            >
              <FiHash className={`w-5 h-5 ${currentLabel === label ? 'text-[var(--primary-color)]' : 'text-[var(--text-secondary)]'}`}/>
              <span className={`text-sm ${currentLabel === label ? 'font-semibold' : 'font-medium'}`}>
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="fixed z-10 left-4 bottom-3 p-4 border-t border-[var(--border-color)] space-y-4 bg-white">
        <button
          onClick={toggleTheme}
          className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors
            ${darkMode 
              ? 'bg-[var(--primary-color)/10] text-[var(--primary-color)]'
              : 'bg-[var(--background-hover)] text-[var(--text-secondary)] hover:bg-[var(--background-hover)]'}`}
        >
          {darkMode ? (
            <FiSun className="w-5 h-5" />
          ) : (
            <FiMoon className="w-5 h-5" />
          )}
          <span className="text-base font-semibold">{darkMode ? 'Light Theme' : 'Dark Theme'}</span>
        </button>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
        >
          <FiLogOut className="w-5 h-5" />
          <span className="text-base font-semibold">Log Out</span>
        </button>
      </div> 
    </nav>
  );
};

export default Sidebar;