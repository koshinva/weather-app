import { IWeatherResponse } from './weatherResponse.interface';

type TCurrentWeather = Omit<IWeatherResponse, 'name' | 'country' | 'timezone'>;

export interface IInitialState {
  currentCity: string;
  currentCountry: string;
  date: string | null;
  currentWeather: TCurrentWeather | null;
  isLoading: boolean;
  error: any;
}
