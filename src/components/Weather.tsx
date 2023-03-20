import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useEffect } from 'react';
import { FC } from 'react';
import CurrentWeather from './CurrentWeather';
import Date from './Date';
import Loader from './Loader';
import Navbar from './Navbar';
import NextFourHours from './NextFourHours';

import styles from './Weather.module.scss';

const Weather: FC = () => {
  const { isLoading, currentWeather } = useTypedSelector((state) => state.weather);
  const { getWeather } = useActions();

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className={styles.weather}>
      <Navbar />
      {isLoading.weather && <Loader />}
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
