import weatherReducer from './weatherSlice';
import appReducer from './appSlice';

export const rootReducer = {
  weather: weatherReducer,
  app: appReducer,
}