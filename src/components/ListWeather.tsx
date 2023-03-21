import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react';
import { convertDate, getImageSrc, roundNum } from 'utils';

import styles from './ListWeather.module.scss';

const ListWeather: FC = () => {
  const { currentWeather } = useTypedSelector((state) => state.weather);

  return (
    <div className={styles['list-weather']}>
      <ul className={styles.list}>
        {currentWeather?.list
          .slice(4)
          .filter((item, i) => i % 8 === 0)
          .slice(1)
          .map((item) => (
            <li className={styles.item} key={item.dt}>
              <h4 className={styles.day}>{convertDate(item.dt)}</h4>
              <p className={styles.description}>{item.weather[0].description}</p>
              <img
                className={styles['image-status']}
                src={getImageSrc(item?.weather[0].icon!!)}
                alt="icon weather"
              />
              <div className={styles.minmax}>
                <p>{roundNum(item.main.temp_min, 'floor')}&#xB0;</p>
                <p>{roundNum(item.main.temp_max, 'ceil')}&#xB0;</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListWeather;
