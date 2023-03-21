import { FC } from 'react';
import cn from 'classnames';

import { useTypedSelector } from 'hooks/useTypedSelector';
import { roundNum } from 'utils/roundNum.helpers';
import BlockWeather from './BlockWeather';

import styles from './CurrentWeather.module.scss';
import { convertDate } from 'utils/convertDate.helpers';
import { getImageSrc } from 'utils';



const CurrentWeather: FC = () => {
  const { currentWeather } = useTypedSelector((state) => state.weather);
  const today = currentWeather?.list[0];
  return (
    <div className={styles.current}>
      <div className={cn(styles.details, styles['top-details'])}>
        <BlockWeather
          icon="FiSunrise"
          title="Sunrise"
          extraStyle="up-level"
          value={convertDate(currentWeather?.city.sunrise!!, 'H:M')}
        />

        <img
          className={styles['image-status']}
          src={getImageSrc(today?.weather[0].icon!!)}
          alt="icon weather"
        />

        <BlockWeather
          icon="FiSunset"
          title="Sunset"
          extraStyle="up-level"
          value={convertDate(currentWeather?.city.sunset!!, 'H:M')}
        />
      </div>

      <h2 className={styles.status}>
        <span>{today?.weather[0].main}</span> ( {today?.weather[0].description} )
      </h2>

      <p className={styles.temperature}>{roundNum(today?.main.temp || 0)}&#xB0;</p>

      <p className={styles.minmax}>
        H: {roundNum(today?.main.temp_max || 0, 'ceil')}&#xB0; &nbsp;&nbsp;&nbsp; L:{' '}
        {roundNum(today?.main.temp_min || 0, 'floor')}
        &#xB0;
      </p>

      <div className={styles.details}>
        <BlockWeather icon="FaWind" title="Wind" value={`${roundNum(today?.wind.speed!!)}km/h`} />

        <BlockWeather icon="FaCloud" title="Cloudiness" value={`${today?.clouds.all!!}%`} />

        <BlockWeather icon="FaTint" title="Humidity" value={`${today?.main.humidity!!}%`} />
      </div>
    </div>
  );
};

export default CurrentWeather;
