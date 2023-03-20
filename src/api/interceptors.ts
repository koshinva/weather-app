import axios from "axios";

const CURRENT_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const GEOCODING_API = 'http://api.openweathermap.org/geo/1.0/direct';
const API_ID = 'bb259ca2b16c9a38f7545f8a8dc4f682';

export const axiosGeoCoding = axios.create({
  baseURL: GEOCODING_API,
  params: {
    appid: API_ID,
    limit: 5,
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

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