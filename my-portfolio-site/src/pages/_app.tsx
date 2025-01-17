import { AppProps } from 'next/app';
import '../styles/globals.css';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;