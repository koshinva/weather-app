import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react';
import { convertDate } from 'utils';

import styles from './Date.module.scss';

const Date: FC = () => {
  const { currentWeather } = useTypedSelector((state) => state.weather);

  return (
    <div className={styles.date}>
      <h1 className={styles.day}>Today</h1>
      <p className={styles['week-day']}>{convertDate(currentWeather?.list[0].dt!!, 'W,MD')}</p>
    </div>
  );
};

export default Date;
