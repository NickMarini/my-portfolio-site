import React from 'react';
import Link from 'next/link';
import ScoreBlocks from './ScoreBlocks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`
        fixed top-0 left-0 h-full bg-navy text-white shadow-lg z-20
        w-64 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div className="sidebar-content flex flex-col h-full">
        {/* Toggle Button */}
        <button
          className="absolute -right-7 top-20 bg-navy p-2 rounded-r-lg shadow focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            )}
          </svg>
        </button>

        {/* Profile Section */}
        <div className="flex flex-col items-center pt-8 px-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-4 text-xl text-white font-bold text-center">Nicholas Marini</h2>

          {/* Social Links */}
          <div className="mt-4 flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/nicholasmarini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </Link>
            <Link
              href="https://github.com/NickMarini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 px-6">
          <div className="h-1 bg-white rounded-full opacity-50" />
        </div>

        {/* Domain Expertise Summary */}
        <div className="mt-8 px-6">
          <h3 className="text-xl font-bold text-white mb-1">Data Architecture</h3>
          <div className="flex space-x-1 mb-4">
            <ScoreBlocks count={9} />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">Data Engineering</h3>
          <div className="flex space-x-1 mb-4">
            <ScoreBlocks count={10} />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">Databases</h3>
          <div className="flex space-x-1 mb-4">
            <ScoreBlocks count={10} />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">Data Science</h3>
          <div className="flex space-x-1 mb-4">
            <ScoreBlocks count={9} />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">Data Analytics</h3>
          <div className="flex space-x-1 mb-4">
            <ScoreBlocks count={9} />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">ML Ops</h3>
          <div className="flex space-x-1 mb-4">
            <ScoreBlocks count={8} />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">Back-End Dev</h3>
          <div className="flex space-x-1 mb-4">
            <ScoreBlocks count={8} />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">Front-End Dev</h3>
          <div className="flex space-x-1 mb-4">
            <ScoreBlocks count={4} />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">Dev Ops</h3>
          <div className="flex space-x-1 mb-4">
            <ScoreBlocks count={6} />
          </div>
        </div>

        {/* Remove Navigation Section */}
      </div>
    </aside>
  );
};

export default Sidebar;
