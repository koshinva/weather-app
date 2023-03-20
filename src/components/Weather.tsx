import { FC } from 'react';
import CurrentWeather from './CurrentWeather';
import Date from './Date';
import Navbar from './Navbar';
import NextFourHours from './NextFourHours';

import styles from './Weather.module.scss';

const Weather: FC = () => {
  return (
    <div className={styles.weather}>
      <Navbar />
      <Date />
      <CurrentWeather />
      <NextFourHours />
    </div>
  );
};

export default Weather;
