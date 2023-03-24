import * as weatherActions from './weatherActions';
import * as weatherSliceActions from './weatherSlice';
import * as appActions from './appSlice';

export const allActions = { ...weatherActions, ...weatherSliceActions, ...appActions };
