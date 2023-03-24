import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  isOpenSearch: boolean;
  isDarkTheme: boolean;
}

const initialState: IInitialState = {
  isOpenSearch: false,
  isDarkTheme: true,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleOpenSearch(state) {
      state.isOpenSearch = !state.isOpenSearch;
    },
    toggleDarkTheme(state) {
      state.isDarkTheme = !state.isDarkTheme;
    }
  },
});

export const { toggleOpenSearch, toggleDarkTheme } = appSlice.actions;

export default appSlice.reducer;
