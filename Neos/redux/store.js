// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Import the middleware
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
