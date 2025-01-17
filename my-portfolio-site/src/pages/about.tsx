import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About Me" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>
        <p>Welcome to my portfolio! I am a passionate developer with experience in building web applications.</p>
        <p>Here you can find my projects and learn more about my skills and experiences.</p>
      </main>
    </div>
  );
};

export default About;