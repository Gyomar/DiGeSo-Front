import { combineReducers } from 'redux';
import uiReducer from './ui.slice';
import contactUsReducer from './contact_us.slice';

const rootReducer = combineReducers({
  ui: uiReducer,
  contacUs: contactUsReducer
});

export default rootReducer;