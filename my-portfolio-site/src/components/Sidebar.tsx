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
    <aside className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64`}>
      <button
        className="absolute top-4 right-[-20px] bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
      <div className="flex flex-col items-center mt-8">
        <img src="/profile.jpg" alt="Profile Picture" className="w-24 h-24 rounded-full" />
        <h2 className="mt-4 text-xl font-bold text-white">Nicholas Marini</h2>
        <div className="mt-4 flex justify-center space-x-4">
          <Link href="https://www.linkedin.com/in/nicholasmarini" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </Link>
          <Link href="https://github.com/NickMarini" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          </Link>
        </div>
      </div>
      <div className="mt-8 w-full px-4">
        <hr className="border-t-4 border-gray-600 rounded-full" />
      </div>
      <nav className="mt-8 flex flex-col items-center w-full">
        <Link href="/" className="block py-2 text-lg w-full text-center hover:bg-gray-700 transition-colors">
          Home
        </Link>
        <Link href="/resume" className="block py-2 text-lg w-full text-center hover:bg-gray-700 transition-colors">
          Resume
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;