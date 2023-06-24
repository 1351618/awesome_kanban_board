import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import thunk from 'redux-thunk';


const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log("store.js  ===  ", action.payload); 
  return next(action);
};

const store = configureStore({
  reducer: reducer as any,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, loggerMiddleware),
});

export default store;