import { useEffect, FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useActions } from 'hooks/useActions';

import Main from './Main';
import Layout from './Layout';
import NextDays from './NextDays';

import styles from './Weather.module.scss';

const Weather: FC = () => {
  const { getWeather } = useActions();

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className={styles.weather}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/next-days" element={<NextDays />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Weather;
