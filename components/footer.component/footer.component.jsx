import React from 'react';
import SocialMedia from './socialMedia';
import Address from './address';
import styles from './footer.module.css';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Typography variant='h5'> {`Lic. Romina Gambino`} </Typography>
      <Address />
      <SocialMedia />
    </footer>
  )
}

export default Footer;