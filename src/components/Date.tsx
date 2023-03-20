import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react'

import styles from './Date.module.scss'

const Date: FC = () => {
  const {date} = useTypedSelector((store) => store.weather)
  return (
    <div className={styles.date}>
      <h1 className={styles.day}>Today</h1>
      <p className={styles['week-day']}>{date}</p>
    </div>
  );
}

export default Date