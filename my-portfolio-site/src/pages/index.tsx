import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio site" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.description}>
          This is a simple portfolio site showcasing my work and projects.
        </p>
        <h1 className={styles.title}>About Me</h1>
        <p>Welcome to my portfolio! I am a passionate developer with experience in building web applications.</p>
        <p>Here you can find my projects and learn more about my skills and experiences.</p>
      </main>
    </div>
  );
};

export default Home;