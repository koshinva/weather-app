import { FC } from 'react';
import cn from 'classnames';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { motion } from 'framer-motion';
import { convertDate, getImageSrc, roundNum } from 'utils';

import styles from './ListWeather.module.scss';
import { divVariant3 } from 'utils/motion';

const ListWeather: FC = () => {
  const { currentWeather } = useTypedSelector((state) => state.weather);
  const { isDarkTheme } = useTypedSelector((state) => state.app);
  return (
    <div className={cn(styles['list-weather'], { [styles.light]: !isDarkTheme })}>
      <ul className={styles.list}>
        {currentWeather?.list
          .slice(4)
          .filter((_, i) => i % 8 === 0)
          .slice(1)
          .map((item) => (
            <motion.li
              className={styles.item}
              key={item.dt}
              variants={divVariant3}
              initial="hidden"
              animate="visible"
            >
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
            </motion.li>
          ))}
      </ul>
    </div>
  );
};

export default ListWeather;
