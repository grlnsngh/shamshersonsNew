import React from 'react';
import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <p>Contact Us</p>
        <div>Phone: +123456789</div>
        <div>Email: example@example.com</div>
      </div>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;