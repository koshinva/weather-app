import axios from "axios";

const CURRENT_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_ID = 'bb259ca2b16c9a38f7545f8a8dc4f682';

export const axiosCurrentWeather = axios.create({
  baseURL: CURRENT_WEATHER_URL,
  params: {
    appid: API_ID,
    units: 'metric',
  },
  headers: {
    'Content-Type': 'application/json',
  },
});