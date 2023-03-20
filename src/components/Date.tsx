import { FC } from 'react'

import styles from './Date.module.scss'

const Date: FC = () => {
  return (
    <div className={styles.date}>
      <h1 className={styles.day}>Today</h1>
      <p className={styles['week-day']}>Mon,20 March</p>
    </div>
  );
}

export default Date