// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './action';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
