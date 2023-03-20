import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosCurrentWeather, axiosGeoCoding } from 'api/interceptors';
import { IGeocoding, IResponseGetGeo, IWeatherResponse } from 'types';

export const getGeocoding = createAsyncThunk<IGeocoding[], string>(
  'weather/geocoding',
  async function (term: string, { rejectWithValue }) {
    try {
      const response = await axiosGeoCoding.get<IResponseGetGeo[]>('', {
        params: { q: term.trim() },
      });
      const data: IGeocoding[] = [];
      response.data.forEach((d) => {
        const { name, country, lat, lon } = d;
        data.push({ name, country, lat, lon });
      });
      return data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);

export const getWeather = createAsyncThunk<IWeatherResponse, string>(
  'weather/weather',
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
        clouds: { all: clouds },
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
        clouds,
      };

      console.log(data);

      return data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
