import { FC } from 'react';
import ListWeather from './ListWeather';
import Tomorrow from './Tomorrow';

const NextDays: FC = () => {
  return (
    <>
      <Tomorrow />
      <ListWeather />
    </>
  );
};

export default NextDays;
