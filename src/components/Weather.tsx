import { FC } from 'react';
import CurrentWeather from './CurrentWeather';
import Date from './Date';
import Navbar from './Navbar';

import styles from './Weather.module.scss';

const Weather: FC = () => {
  return (
    <div className={styles.weather}>
      <Navbar />
      <Date />
      <CurrentWeather />
    </div>
  );
};

export default Weather;
