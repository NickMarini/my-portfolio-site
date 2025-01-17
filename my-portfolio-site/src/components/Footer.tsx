import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <Link href="https://www.linkedin.com/in/nicholasmarini" target="_blank" passHref>
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </Link>
        <Link href="https://github.com/NickMarini" target="_blank" passHref>
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;