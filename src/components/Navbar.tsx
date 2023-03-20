import { FC, useState } from 'react';
import cn from 'classnames';
import { FaSun, FaCloud, FaAngleDown, FaMoon, FaMapMarkerAlt } from 'react-icons/fa';

import Search from './Search';

import styles from './Navbar.module.scss';
import { useTypedSelector } from 'hooks/useTypedSelector';

const Navbar: FC = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const [isOpenSearch, setOpenSearch] = useState<boolean>(false);
  const { currentWeather } = useTypedSelector((state) => state.weather);

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
        <h2 className={styles.city}>{currentWeather?.name},</h2>
        <p className={styles.country}>{currentWeather?.sys.country}</p>
        <button
          className={cn(styles.button, { [styles.active]: isOpenSearch })}
          type="button"
          onClick={() => setOpenSearch((prev) => !prev)}
        >
          <FaAngleDown />
        </button>

        <Search isOpenSearch={isOpenSearch} setOpenSearch={setOpenSearch} />
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
