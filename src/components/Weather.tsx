import { FC } from 'react';
import Navbar from './Navbar';

import styles from './Weather.module.scss';

const Weather: FC = () => {
  return (
    <div className={styles.weather}>
      <Navbar />
    </div>
  );
};

export default Weather;
