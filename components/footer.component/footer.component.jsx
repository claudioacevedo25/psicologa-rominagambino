import React from 'react';
import SocialMedia from './socialMedia';
import Address from './address';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        {`Lic. Romina Gambino`}
      </a>
      <Address/>
      <SocialMedia />
    </footer>
  )
}

export default Footer;