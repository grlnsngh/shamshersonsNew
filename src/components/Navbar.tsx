import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

interface NavLink {
  label: string;
  path: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  // { label: 'Enquiry', path: '/enquiry' },
  // { label: 'News & Articles', path: '/news' },
  // { label: 'About Pianos', path: '/about-pianos' },
  // { label: 'Contact Us', path: '/contact' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        Shamshersons
      </div>
      <div className={styles.center}>
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li className={styles.navItem} key={link.path}>
              <Link
                className={`${styles.navLink} ${
                  location.pathname === link.path
                    ? styles.active
                    : ''
                }`}
                to={link.path}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.right}>
        {/* Placeholder for social media icons */}
        <a href="#" className={styles.socialIcon}>
        <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className={styles.socialIcon}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>

      </div>

    </nav>
  );
};

export default Navbar;