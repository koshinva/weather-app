import * as weatherActions from './weatherActions';
import * as weatherSliceActions from './weatherSlice';

export const allActions = { ...weatherActions, ...weatherSliceActions };
