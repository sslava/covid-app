import {combineReducers} from 'redux';

import {statsReducer} from './statsModule';
import {historyReducer} from './historyModule';

export default combineReducers({
  stats: statsReducer,
  history: historyReducer,
});
