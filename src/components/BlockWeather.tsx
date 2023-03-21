import { FC } from 'react'
import { TypeIcon } from 'types/icon.type';
import cn from 'classnames';
import styles from './BlockWeather.module.scss'
import Icon from './ui/Icon';

interface IPropsBlock {
  icon: TypeIcon;
  title: string;
  value: string | number;
  extraStyle?: string;
}

const BlockWeather: FC<IPropsBlock> = ({icon, title, value, extraStyle}) => {
  return (
    <div className={cn(styles.block, styles[extraStyle || ''])}>
      <Icon icon={icon} />
      <p className={styles.index}>{value}</p>
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default BlockWeather