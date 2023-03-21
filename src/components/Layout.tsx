import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './Loader';
import Navbar from './Navbar';

const Layout: FC = () => {
  const { isLoading, currentWeather } = useTypedSelector((state) => state.weather);
  return (
    <>
      <Navbar />
      {!isLoading.weather ? currentWeather ? <Outlet /> : <h2> Start search!) </h2> : <Loader />}
    </>
  );
};

export default Layout;
