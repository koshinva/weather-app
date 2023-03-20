export interface IWeatherResponse {
  name: string;
  country: string;
  main: string;
  description: string;
  temp: number;
  pressure: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  windSpeed: number;
  timezone: number;
  clouds: number;
}
