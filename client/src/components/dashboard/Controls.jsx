import { useState } from 'react';
import { FiSearch, FiFilter, FiCalendar, FiArrowUp, FiArrowDown, FiX } from 'react-icons/fi';
import useTaskStore from '../../store/task';

const Controls = () => {
    const [searchInput, setSearchInput] = useState('');
    const [selectedPriority, setSelectedPriority] = useState('all');
    const [sortBy, setSortBy] = useState('createdAt-asc');
    const { setFilter, setSearch } = useTaskStore();
    
    const handlePriorityChange = (priority) => {
        setSelectedPriority(priority);
        setFilter(priority);
    };
    
    const handleSortChange = (sortValue) => {
        setSortBy(sortValue);
        setFilter(sortValue);
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchInput(value);
        setSearch(value);
    };

    const clearFilters = () => {
        setSearchInput('');
        setSearch('');
        setSelectedPriority('all');
        setSortBy('createdAt-asc');
        setFilter('all');
    };

  return (
    <div className="fixed bottom-0 left-64 right-0 bg-[var(--background)] border-t border-[var(--border-color)] p-4 shadow-lg z-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search Input */}
          <div className="flex-1 w-full md:w-auto relative">
            <FiSearch className="absolute left-3 top-3.5 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchInput}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[var(--border-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] placeholder-[var(--text-secondary)]"
            />
          </div>

          {/* Priority Filter */}
          <div className="relative w-full md:w-auto">
            <FiFilter className="absolute left-3 top-3.5 text-[var(--text-secondary)]" />
            <select
              value={selectedPriority}
              onChange={(e) => handlePriorityChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[var(--border-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] appearance-none"
            >
              <option value="all">All Priorities</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="relative w-full md:w-auto">
            <FiCalendar className="absolute left-3 top-3.5 text-[var(--text-secondary)]" />
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[var(--border-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] appearance-none"
            >
              <option value="dueDate-asc">Due Date (Ascending)</option>
              <option value="dueDate-desc">Due Date (Descending)</option>
              <option value="priority-desc">Priority (High to Low)</option>
              <option value="createdAt-desc">Newest First</option>
              <option value="createdAt-asc">Oldest First</option>
            </select>
          </div>

          {/* Clear Button */}
          <button
            onClick={clearFilters}
            className="flex items-center gap-2 px-4 py-2.5 text-[var(--text-secondary)] hover:bg-[var(--background-hover)] rounded-lg transition-colors"
          >
            <FiX className="w-5 h-5" />
            <span className="hidden md:inline">Clear Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;