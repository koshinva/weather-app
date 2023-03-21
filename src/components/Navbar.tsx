import { FC, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import cn from 'classnames';
import { FaSun, FaAngleDown, FaMoon, FaMapMarkerAlt } from 'react-icons/fa';

import Search from './Search';

import styles from './Navbar.module.scss';
import { useTypedSelector } from 'hooks/useTypedSelector';
import Icon from './ui/Icon';

const Navbar: FC = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const [isOpenSearch, setOpenSearch] = useState<boolean>(false);
  const { currentWeather } = useTypedSelector((state) => state.weather);
  const { pathname } = useLocation();

  const handleChangeTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        {pathname === '/' ? (
          <Icon icon="FaCloud" />
        ) : (
          <Link className={styles.link} to="/">
            <Icon icon="FaChevronLeft" />
          </Link>
        )}
      </div>

      <div className={styles.geo}>
        {pathname === '/' ? (
          <>
            <Icon icon="FaMapMarkerAlt" />
            <h2 className={styles.city}>{currentWeather?.city.name},</h2>
            <p className={styles.country}>{currentWeather?.city.country}</p>
            <button
              className={cn(styles.button, { [styles.active]: isOpenSearch })}
              type="button"
              onClick={() => setOpenSearch((prev) => !prev)}
            >
              <FaAngleDown />
            </button>

            <Search isOpenSearch={isOpenSearch} setOpenSearch={setOpenSearch} />
          </>
        ) : (
          <>
            <Icon icon='FaRegCalendarAlt' />
            <h2 className={styles.title}>Next 5 Days</h2>
          </>
        )}
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
