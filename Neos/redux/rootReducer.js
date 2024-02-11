// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './reducers'; // Make sure to import the correct file name

const rootReducer = combineReducers({
  auth: authReducer,
  // Add more reducers if needed
});

export default rootReducer;
