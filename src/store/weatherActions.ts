import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosCurrentWeather } from "api/interceptors";
import { IWeatherResponse } from 'types';

export const getWeather = createAsyncThunk<IWeatherResponse, string>(
  'weather/geocoding',
  async function (location, { rejectWithValue }) {
    try {
      const response = await axiosCurrentWeather.get('', { params: { q: location } });
      const {
        name,
        sys: { country },
        weather,
        main: { temp, pressure, temp_min, temp_max, humidity },
        wind: { speed: windSpeed },
        timezone,
      } = response.data;

      const { main, description } = weather[0];

      const data = {
        name,
        country,
        temp,
        pressure,
        temp_min,
        temp_max,
        humidity,
        windSpeed,
        main,
        description,
        timezone,
      };

      console.log(data);

      return data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
