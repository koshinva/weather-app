import { IGeocoding } from './geocoding.interface';
import { IWeatherResponse } from './weatherResponse.interface';

interface ILoading {
  weather: boolean;
  geocoding: boolean;
}

export interface IInitialState {
  geocodingList: IGeocoding[];
  selectedGeocoding: IGeocoding | null;
  currentWeather: IWeatherResponse | null;
  isLoading: ILoading;
  error: any;
}
