import React from 'react';
import Link from 'next/link';
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
        fixed top-0 left-0 h-full 
        bg-navy bg-opacity-95 
        w-64 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      {/* Toggle Button */}
      <button
        className="absolute -right-10 top-4 bg-navy p-2 rounded-r-lg focus:outline-none"
        onClick={toggleSidebar}
      >
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
          )}
        </svg>
      </button>

      {/* Profile Section */}
      <div className="flex flex-col items-center pt-8">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
          <img 
            src="/profile.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="mt-4 text-xl font-bold text-white">Nicholas Marini</h2>
        
        {/* Social Links */}
        <div className="mt-4 flex space-x-6">
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

      {/* Navigation */}
      <nav className="mt-8 px-6">
        <Link 
          href="/" 
          className="block py-3 text-white text-lg hover:bg-white/10 rounded-lg transition-colors px-4 mb-2"
        >
          Home
        </Link>
        <Link 
          href="/resume" 
          className="block py-3 text-white text-lg hover:bg-white/10 rounded-lg transition-colors px-4"
        >
          Resume
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;