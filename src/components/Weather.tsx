import { useEffect, FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import cn from 'classnames';

import { useActions } from 'hooks/useActions';

import Main from './Main';
import Layout from './Layout';
import NextDays from './NextDays';

import styles from './Weather.module.scss';
import { useTypedSelector } from 'hooks/useTypedSelector';

const Weather: FC = () => {
  const { getWeather } = useActions();
  const { isOpenSearch, isDarkTheme } = useTypedSelector((state) => state.app);

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div
      className={cn(styles.weather, { [styles.veil]: isOpenSearch, [styles.light]: !isDarkTheme })}
    >
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
