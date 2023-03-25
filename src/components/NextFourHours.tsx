import { FC } from 'react';
import cn from 'classnames';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { convertDate, getImageSrc, roundNum } from 'utils';

import styles from './NextFourHours.module.scss';
import SvgLine from './SvgLine';

const NextFourHours: FC = () => {
  const { currentWeather } = useTypedSelector((state) => state.weather);
  const { isDarkTheme } = useTypedSelector((state) => state.app);

  const slicedWeatherList = currentWeather?.list.slice(0, 4);

  return (
    <div className={cn(styles.next, { [styles.light]: !isDarkTheme })}>
      <div className={styles.blocks}>
        {slicedWeatherList?.map((item) => (
          <div className={styles.block} key={item.dt}>
            <img
              className={styles.image}
              src={getImageSrc(item.weather[0].icon)}
              alt="icon weather"
            />
            <p className={styles.temperature}>{roundNum(item.main.temp)}&#xB0;</p>
          </div>
        ))}
      </div>

      <SvgLine />

      <div className={styles.times}>
        {slicedWeatherList?.map((item, i) => (
          <p className={styles.time} key={item.dt}>
            {i === 0 ? 'Now' : convertDate(item.dt, 'H:M')}
          </p>
        ))}
      </div>
    </div>
  );
};

export default NextFourHours;
