import { FC } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

import { useTypedSelector } from 'hooks/useTypedSelector';
import Icon from './ui/Icon';
import { divVariant, textVariant } from 'utils/motion';

import { TypeIcon } from 'types/icon.type';

import styles from './BlockWeather.module.scss';

interface IPropsBlock {
  icon: TypeIcon;
  title: string;
  value: string | number;
  extraStyle?: string;
}

const BlockWeather: FC<IPropsBlock> = ({ icon, title, value, extraStyle }) => {
  const { isDarkTheme } = useTypedSelector((state) => state.app);
  return (
    <motion.div
      className={cn(styles.block, styles[extraStyle || ''], { [styles.light]: !isDarkTheme })}
      initial={'hidden'}
      animate={'visible'}
      variants={divVariant}
    >
      <Icon icon={icon} />
      <p className={styles.index}>{value}</p>
      {title.split('').map((letter, i) => (
        <motion.p
          key={i}
          className={styles.title}
          variants={textVariant}
          initial="hidden"
          animate="show"
          custom={i}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default BlockWeather;
