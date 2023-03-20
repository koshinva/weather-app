import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useEffect } from 'react';
import { FC } from 'react';
import CurrentWeather from './CurrentWeather';
import Date from './Date';
import Navbar from './Navbar';
import NextFourHours from './NextFourHours';

import styles from './Weather.module.scss';

const Weather: FC = () => {
  const {isLoading, currentWeather} = useTypedSelector((state) => state.weather)
  const { getWeather } = useActions();

  useEffect(() => {
    getWeather('Moscow');
  }, []);

  return (
    <div className={styles.weather}>
      <Navbar />
      {isLoading && <p>Loading...</p>}
      {currentWeather && (
        <>
          <Date />
          <CurrentWeather />
          <NextFourHours />
        </>
      )}
    </div>
  );
};

export default Weather;
