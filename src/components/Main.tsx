import { FC } from 'react'
import CurrentWeather from './CurrentWeather';
import Date from './Date';
import Navigation from './Navigation';
import NextFourHours from './NextFourHours';

const Main: FC = () => {
  return (
    <>
      <Date />
      <CurrentWeather />
      <Navigation />
      <NextFourHours />
    </>
  );
}

export default Main