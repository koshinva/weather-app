import { FC } from 'react'

import styles from './Date.module.scss'

const Date: FC = () => {
  return (
    <div className={styles.date}>
      <h1 className={styles.day}>Today</h1>
      <p className={styles['week-day']}>Thu, April 28</p>
    </div>
  );
}

export default Date