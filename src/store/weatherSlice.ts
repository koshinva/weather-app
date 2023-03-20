import { createSlice } from '@reduxjs/toolkit';
import { IInitialState, IWeatherResponse } from 'types';
import { getGeocoding, getWeather } from './weatherActions';

const initialState: IInitialState = {
  geocodingList: [],
  selectedGeocoding: { name: 'Moscow', country: 'RU', lat: 55.7504461, lon: 37.6174943 },
  currentWeather: null,
  isLoading: false,
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
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGeocoding.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGeocoding.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.geocodingList = payload;
      })
      .addCase(getGeocoding.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWeather.fulfilled, (state, { payload }: { payload: IWeatherResponse }) => {
        state.isLoading = false;
        state.currentWeather = payload;
      })
      .addCase(getWeather.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { selectGeocoding, clearGeocodingList } = weatherSlice.actions;

export default weatherSlice.reducer;
