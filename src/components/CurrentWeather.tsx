import { FC } from 'react'
import { FaCloudRain, FaTint, FaWind } from 'react-icons/fa';
import {HiSun, HiCloud} from 'react-icons/hi'

import styles from './CurrentWeather.module.scss'

const CurrentWeather: FC = () => {
  return (
    <div className={styles.current}>
      <div className={styles.icons}>
        <HiSun className={styles.sun} />
        <HiCloud className={styles['first-cloud']} />
        <HiCloud className={styles['second-cloud']} />
        <HiCloud className={styles['third-cloud']} />
      </div>
      <h2 className={styles.status}>Mostly Cloudy</h2>
      <p className={styles.temperature}>
        22<span>&#xB0;</span>
      </p>
      <div className={styles.details}>
        <div className={styles.block}>
          <FaWind />
          <p className={styles.index}>7km/h</p>
          <p className={styles.title}>Wind</p>
        </div>
        <div className={styles.block}>
          <FaCloudRain />
          <p className={styles.index}>10%</p>
          <p className={styles.title}>Chance Of Rain</p>
        </div>
        <div className={styles.block}>
          <FaTint />
          <p className={styles.index}>25%</p>
          <p className={styles.title}>Humidity</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather