import { FC, useState } from 'react';
import cn from 'classnames';
import { FaSun, FaCloud, FaAngleDown, FaMoon, FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

import styles from './Navbar.module.scss';

const Navbar: FC = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const [isOpenSearch, setOpenSearch] = useState<boolean>(false);

  const handleChangeTheme = () => {
     setDarkTheme((prev) => !prev);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <FaCloud />
      </div>
      <div className={styles.geo}>
        <FaMapMarkerAlt />
        <h2 className={styles.city}>Arak,</h2>
        <p className={styles.country}>Markazi</p>
        <button
          className={cn(styles.button, { [styles.active]: isOpenSearch })}
          type="button"
          onClick={() => setOpenSearch((prev) => !prev)}
        >
          <FaAngleDown />
        </button>
        <form className={cn(styles.form, { [styles.active]: isOpenSearch })}>
          <button type="submit">
            <FaSearch />
          </button>
          <input
            className={styles.search}
            type="text"
            name="search"
            id="search"
            placeholder="Search city..."
          />
        </form>
      </div>
      <div className={styles.toggleTheme}>
        <label className={cn(styles.label, { [styles.active]: darkTheme })}>
          <FaSun fill={!darkTheme ? '#FDFDFD' : '#7C7F85'} />
          <FaMoon fill={darkTheme ? '#FDFDFD' : '#7C7F85'} />
          <input
            type="checkbox"
            name="theme"
            id="theme"
            onChange={handleChangeTheme}
            checked={darkTheme}
          />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
