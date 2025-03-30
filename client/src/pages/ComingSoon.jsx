import { NavLink } from 'react-router-dom';
import { FiTool, FiArrowLeft } from 'react-icons/fi';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md space-y-6 flex flex-col items-center justify-center">
        <div className="text-[var(--primary-color)] text-6xl mx-auto">
          <FiTool />
        </div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)]">
          Exciting Things Are Coming!
        </h1>
        <p className="text-[var(--text-secondary)]">
          We're working hard to bring you this amazing feature. Stay tuned for updates!
        </p>
        <NavLink
          to="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-hover)] transition-colors"
        >
          <FiArrowLeft className="w-5 h-5" />
          Back to Home
        </NavLink>
      </div>
    </div>
  );
};

export default ComingSoon;