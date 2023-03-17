import { FC } from 'react';

import { FaSun, FaCloud, FaSearchLocation, FaAngleDown } from 'react-icons/fa';

import styles from './Navbar.module.scss';


const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.menu}>
        <FaCloud />
      </div>
      <div className={styles.geo}>
        <FaSearchLocation />
        <h2 className={styles.city}>Arak,</h2>
        <p className={styles.country}>Markazi</p>
        <FaAngleDown />
      </div>
      <div className={styles.toggleTheme}>
        <label>
          <FaSun />
          <input type="checkbox" name="theme" id="theme" />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
