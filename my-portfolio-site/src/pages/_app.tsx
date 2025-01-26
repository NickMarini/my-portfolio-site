import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <header className="navbar">
        <nav className="nav-links">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/resume" className="nav-link">
            Resume
          </Link>
        </nav>
      </header>

      {/* Layout Container */}
      <div
        className={`app-container ${
          isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'
        } flex flex-row min-h-screen`}
      >
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <main className="main-content">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;