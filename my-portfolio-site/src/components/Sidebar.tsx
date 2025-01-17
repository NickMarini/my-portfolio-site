import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        <img src="/profile.jpg" alt="Profile Picture" className={styles.profileImage} />
        <h2 className={styles.name}>Nicholas Marini</h2>
      </div>
      <div className={styles.socialIcons}>
        <Link href="https://www.linkedin.com/in/nicholasmarini" target="_blank" rel="noopener noreferrer" passHref>
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </Link>
        <Link href="https://github.com/NickMarini" target="_blank" rel="noopener noreferrer" passHref>
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </Link>
      </div>
      <div className={styles.navRight}>
        <input type="text" placeholder="Search..." className={styles.searchBar} />
      </div>
      <div className={styles.separator}></div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/resume" className={styles.navLink}>
          Resume
        </Link>
        <Link href="/projects" className={styles.navLink}>
          Projects
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;