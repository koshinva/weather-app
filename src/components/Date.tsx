import { FC } from 'react';
import cn from 'classnames';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { convertDate } from 'utils';

import styles from './Date.module.scss';

const Date: FC = () => {
  const { currentWeather } = useTypedSelector((state) => state.weather);
  const { isDarkTheme } = useTypedSelector((state) => state.app);

  return (
    <div className={cn(styles.date, { [styles.light]: !isDarkTheme })}>
      <h1 className={styles.day}>Today</h1>
      <p className={styles['week-day']}>{convertDate(currentWeather?.list[0].dt!!, 'W,MD')}</p>
    </div>
  );
};

export default Date;
