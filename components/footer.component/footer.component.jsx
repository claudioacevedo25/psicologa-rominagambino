import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lic. Romina Gambino{' '}
        <span className={styles.logo}>
          <Image src="/img/psicologia.png" alt="psicologia Logo" width={30} height={20} />
        </span>
      </a>
    </footer>
  )
}

export default Footer;