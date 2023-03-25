import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { useTypedSelector } from 'hooks/useTypedSelector';
import styles from './Navigation.module.scss';

const Navigation: FC = () => {
  const { isDarkTheme } = useTypedSelector((state) => state.app);

  return (
    <div className={cn(styles.navigation, {[styles.light]: !isDarkTheme})}>
      <p className={styles.today}>Today</p>
      <Link className={styles.link} to="/next-days">
        Next 5 Days &nbsp;&rarr;
      </Link>
    </div>
  );
};

export default Navigation;
