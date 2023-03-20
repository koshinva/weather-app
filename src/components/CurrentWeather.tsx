import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react'
import { FaTint, FaWind, FaCloud } from 'react-icons/fa';
import {HiSun, HiCloud} from 'react-icons/hi'

import styles from './CurrentWeather.module.scss'

const CurrentWeather: FC = () => {
  const {currentWeather} = useTypedSelector((state) => state.weather)
  
  return (
    <div className={styles.current}>
      <div className={styles.icons}>
        <HiSun className={styles.sun} />
        <HiCloud className={styles['first-cloud']} />
        <HiCloud className={styles['second-cloud']} />
        <HiCloud className={styles['third-cloud']} />
      </div>
      <h2 className={styles.status}>{currentWeather ? currentWeather.description : ''}</h2>
      <p className={styles.temperature}>
        {currentWeather ? Math.round(currentWeather.temp) : 0}&#xB0;
      </p>
      <div className={styles.details}>
        <div className={styles.block}>
          <FaWind />
          <p className={styles.index}>
            {currentWeather ? Math.round(currentWeather.windSpeed) : 0}km/h
          </p>
          <p className={styles.title}>Wind</p>
        </div>
        <div className={styles.block}>
          <FaCloud />
          <p className={styles.index}>{currentWeather ? Math.round(currentWeather.clouds) : 0}%</p>
          <p className={styles.title}>Cloudiness</p>
        </div>
        <div className={styles.block}>
          <FaTint />
          <p className={styles.index}>
            {currentWeather ? Math.round(currentWeather.humidity) : 0}%
          </p>
          <p className={styles.title}>Humidity</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather