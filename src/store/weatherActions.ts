import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosCurrentWeather, axiosGeoCoding } from 'api/interceptors';
import { TypeRootState } from 'store';
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

export const getWeather = createAsyncThunk<IWeatherResponse>(
  'weather/currentWeather',
  async function (_, { rejectWithValue, getState }) {
    try {
      const geocoding = (getState() as TypeRootState).weather.selectedGeocoding;
      
      const response = await axiosCurrentWeather.get('', { params: { lat: geocoding?.lat, lon: geocoding?.lon } });
      
      return response.data;

    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
