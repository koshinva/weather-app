import { FC, useEffect } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { roundNum } from 'utils';
import { drawVariant } from 'utils/motion';

import styles from './SvgLine.module.scss';

const xCoordCircle = [130, 290, 455, 610];

const SvgLine: FC = () => {
  const { svgCoordinates, currentWeather } = useTypedSelector((state) => state.weather);
  const { isDarkTheme } = useTypedSelector((state) => state.app);
  const { setSvgCoordinates } = useActions();

  useEffect(() => {
    if (currentWeather) {
      const coordinates: number[] = [];
      currentWeather.list.slice(0, 4).map((item) => coordinates.push(roundNum(item?.main.temp)));
      setSvgCoordinates(coordinates);
    }
  }, [currentWeather, setSvgCoordinates]);

  return (
    <motion.svg
      className={cn(styles.line, { [styles.light]: !isDarkTheme })}
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d={`M0 30 130 ${svgCoordinates[0]}, 295 ${svgCoordinates[1]}, 455 ${svgCoordinates[2]}, 610 ${svgCoordinates[3]}, 752 30`}
        variants={drawVariant}
        custom={1}
      />
      {xCoordCircle.map((xCoord, index) => (
        <motion.circle
          cx={xCoord}
          cy={svgCoordinates[index]}
          r="4"
          variants={drawVariant}
          custom={index + 1}
        />
      ))}
    </motion.svg>
  );
};

export default SvgLine;
