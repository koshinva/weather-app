import { IGeocoding } from './geocoding.interface';
import { IWeatherResponse } from './weatherResponse.interface';

type TCurrentWeather = Omit<IWeatherResponse, 'name' | 'country' | 'timezone'>;

export interface IInitialState {
  geocodingList: IGeocoding[];
  selectedGeocoding: IGeocoding | null;
  currentCity: string;
  currentCountry: string;
  date: string | null;
  currentWeather: TCurrentWeather | null;
  isLoading: boolean;
  error: any;
}
