import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navLeft}>
        <span className={styles.name}>Nicholas Marini</span>
      </div>
      <nav className={styles.nav}>
        <Link href="/" legacyBehavior>
          <a className={styles.navLink}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={styles.navLink}>About</a>
        </Link>
      </nav>
      <div className={styles.navRight}>
        <input type="text" placeholder="Search..." className={styles.searchBar} />
      </div>
    </header>
  );
};

export default Header;