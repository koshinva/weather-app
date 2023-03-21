import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation: FC = () => {
  return (
    <div className={styles.navigation}>
      <p className={styles.today}>Today</p>
      <Link className={styles.link} to="/next-days">
        Next 5 Days &nbsp;&rarr;
      </Link>
    </div>
  );
};

export default Navigation;
