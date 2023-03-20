import { IGeocoding } from './geocoding.interface';
import { IWeatherResponse } from './weatherResponse.interface';

export interface IInitialState {
  geocodingList: IGeocoding[];
  selectedGeocoding: IGeocoding | null;
  currentWeather: IWeatherResponse | null;
  isLoading: boolean;
  error: any;
}
