import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from 'types';
import { getWeather } from './weatherActions';


const initialState: IInitialState = {
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWeather.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const {name, country, ...weather} = payload;
        state.currentCity = name;
        state.currentCountry = country;
        state.currentWeather = weather;
        let date = new Date();
        date.setSeconds(date.getSeconds() - 4200)
        state.date = date.toLocaleDateString('en-US', {
          weekday: 'short',
          day: 'numeric',
          month: 'long'
        });
      })
      .addCase(getWeather.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default weatherSlice.reducer;
