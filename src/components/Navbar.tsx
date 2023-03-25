import { FC } from 'react';
import { useLocation, Link } from 'react-router-dom';
import cn from 'classnames';
import {motion} from "framer-motion";

import { useActions } from 'hooks/useActions';
import { FaSun, FaAngleDown, FaMoon } from 'react-icons/fa';
import { useTypedSelector } from 'hooks/useTypedSelector';

import Icon from './ui/Icon';
import Search from './Search';

import styles from './Navbar.module.scss';
import { divVariant2 } from 'utils/motion';

const Navbar: FC = () => {
  const { currentWeather } = useTypedSelector((state) => state.weather);
  const {isOpenSearch, isDarkTheme} = useTypedSelector((state) => state.app);
  const {toggleOpenSearch, toggleDarkTheme } = useActions();
  const { pathname } = useLocation();

  return (
    <motion.div className={cn(styles.navbar, {[styles.light]: !isDarkTheme})} variants={divVariant2} initial='hidden' animate='visible'>
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
              onClick={() => toggleOpenSearch()}
            >
              <FaAngleDown />
            </button>

            <Search />
          </>
        ) : (
          <>
            <Icon icon="FaRegCalendarAlt" />
            <h2 className={styles.title}>Next 5 Days</h2>
          </>
        )}
      </div>
      <div className={styles.toggleTheme}>
        <label className={cn(styles.label, { [styles.active]: isDarkTheme })}>
          <FaSun fill={!isDarkTheme ? '#FDFDFD' : '#7C7F85'} />
          <FaMoon fill={isDarkTheme ? '#FDFDFD' : '#7C7F85'} />
          <input
            type="checkbox"
            name="theme"
            id="theme"
            onChange={() => toggleDarkTheme()}
            checked={isDarkTheme}
          />
        </label>
      </div>
    </motion.div>
  );
};

export default Navbar;
