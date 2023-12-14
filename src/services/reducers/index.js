import { combineReducers } from 'redux';
import uiReducer from './ui.slice';

const rootReducer = combineReducers({
  ui: uiReducer
});

export default rootReducer;