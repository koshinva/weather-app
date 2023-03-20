import { createSlice } from '@reduxjs/toolkit';
import { IInitialState, IWeatherResponse } from 'types';
import { getGeocoding, getWeather } from './weatherActions';

const initialState: IInitialState = {
  geocodingList: [],
  selectedGeocoding: { name: 'Moscow', country: 'RU', lat: 55.7504461, lon: 37.6174943 },
  currentWeather: null,
  isLoading: { geocoding: false, weather: false },
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    selectGeocoding(state, { payload }) {
      state.selectedGeocoding = payload;
    },
    clearGeocodingList(state) {
      state.geocodingList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGeocoding.pending, (state) => {
        state.isLoading.geocoding = true;
      })
      .addCase(getGeocoding.fulfilled, (state, { payload }) => {
        state.isLoading.geocoding = false;
        state.geocodingList = payload;
      })
      .addCase(getGeocoding.rejected, (state, { payload }) => {
        state.isLoading.geocoding = false;
        state.error = payload;
      })
      .addCase(getWeather.pending, (state) => {
        state.isLoading.weather = true;
      })
      .addCase(getWeather.fulfilled, (state, { payload }: { payload: IWeatherResponse }) => {
        state.isLoading.weather = false;
        state.currentWeather = payload;
      })
      .addCase(getWeather.rejected, (state, { payload }) => {
        state.isLoading.weather = false;
        state.error = payload;
      });
  },
});

export const { selectGeocoding, clearGeocodingList } = weatherSlice.actions;

export default weatherSlice.reducer;
