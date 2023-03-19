import { FC } from 'react';
import Date from './Date';
import Navbar from './Navbar';

import styles from './Weather.module.scss';

const Weather: FC = () => {
  return (
    <div className={styles.weather}>
      <Navbar />
      <Date />
    </div>
  );
};

export default Weather;
