import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from 'types';
import { getGeocoding, getWeather } from './weatherActions';

const initialState: IInitialState = {
  geocodingList: [],
  selectedGeocoding: null,
  currentCity: '',
  currentCountry: '',
  currentWeather: null,
  date: null,
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
      .addCase(getWeather.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { name, country, ...weather } = payload;
        state.currentCity = name;
        state.currentCountry = country;
        state.currentWeather = {
          ...weather,
          description: weather.description.slice(0, 1).toUpperCase() + weather.description.slice(1),
        };
        let date = new Date();
        const currentTimezoneOffset = date.getTimezoneOffset();
        date.setMinutes(date.getMinutes() - currentTimezoneOffset);
        date.setSeconds(date.getSeconds() - payload.timezone);
        state.date = date.toLocaleDateString('en-US', {
          weekday: 'short',
          day: 'numeric',
          month: 'long',
        });
      })
      .addCase(getWeather.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { selectGeocoding } = weatherSlice.actions;

export default weatherSlice.reducer;
