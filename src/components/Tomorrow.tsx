import { FC } from 'react';
import cn from 'classnames';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { getImageSrc, roundNum } from 'utils';
import BlockWeather from './BlockWeather';

import styles from './Tomorrow.module.scss';

const Tomorrow: FC = () => {
  const { currentWeather } = useTypedSelector((state) => state.weather);
  const { isDarkTheme } = useTypedSelector((state) => state.app);

  const tomorrowWeather = currentWeather?.list[4];

  return (
    <div className={cn(styles.tomorrow, {[styles.light]: !isDarkTheme})}>
      <div className={styles.main}>
        <img
          className={styles['image-status']}
          src={getImageSrc(tomorrowWeather?.weather[0].icon!!)}
          alt="icon weather"
        />
        <div className={styles.status}>
          <h3 className={styles.title}>Tomorrow</h3>
          <p className={styles.temperature}>{roundNum(tomorrowWeather?.main.temp!!)}&#xB0;</p>
          <p className={styles.description}>{tomorrowWeather?.weather[0].description}</p>
        </div>
      </div>
      <div className={styles.details}>
        <BlockWeather
          icon="FaWind"
          title="Wind"
          value={`${roundNum(tomorrowWeather?.wind.speed!!)}km/h`}
        />
        <BlockWeather
          icon="FaCloud"
          title="Cloudiness"
          value={`${tomorrowWeather?.clouds.all!!}%`}
        />
        <BlockWeather
          icon="FaTint"
          title="Humidity"
          value={`${tomorrowWeather?.main.humidity!!}%`}
        />
      </div>
    </div>
  );
};

export default Tomorrow;
