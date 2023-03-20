import { FC } from 'react';
import { FaCloud, FaCloudRain, FaCloudSunRain } from 'react-icons/fa';

import styles from './NextFourHours.module.scss';

const NextFourHours: FC = () => {
  return (
    <div className={styles.next}>
      <div className={styles.blocks}>
        <div className={styles.block}>
          <FaCloudRain className={styles.icon} />
          <p className={styles.temperature}>21&#xB0;</p>
        </div>
        <div className={styles.block}>
          <FaCloudRain className={styles.icon} />
          <p className={styles.temperature}>20&#xB0;</p>
        </div>
        <div className={styles.block}>
          <FaCloud className={styles.icon} />
          <p className={styles.temperature}>22&#xB0;</p>
        </div>
        <div className={styles.block}>
          <FaCloudSunRain className={styles.icon} />
          <p className={styles.temperature}>23&#xB0;</p>
        </div>
      </div>
      <svg width="752" height="60" xmlns="http://www.w3.org/2000/svg">
        <path
          d={'M0 30 130 25, 295 30, 455 20, 610 15, 752 30'}
          stroke="#7C7F85"
          fill="transparent"
          stroke-width="2"
        />

        <circle cx="130" cy="25" r="4" stroke="#F5D540" fill="#151D2A" stroke-width="1" />
        <circle cx="295" cy="30" r="4" stroke="#F5D540" fill="#151D2A" stroke-width="1" />
        <circle cx="455" cy="20" r="4" stroke="#F5D540" fill="#151D2A" stroke-width="1" />
        <circle cx="610" cy="15" r="4" stroke="#F5D540" fill="#151D2A" stroke-width="1" />
      </svg>
      <div className={styles.times}>
        <p className={styles.time}>Now</p>
        <p className={styles.time}>17:00</p>
        <p className={styles.time}>18:00</p>
        <p className={styles.time}>19:00</p>
      </div>
    </div>
  );
};

export default NextFourHours;
