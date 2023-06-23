import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import thunk from 'redux-thunk';



// Создаем middleware
const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log("store.js  ===  ", action.payload); // Вывод полученных данных в консоль
  return next(action);
};

const store = configureStore({
  reducer: reducer as any,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, loggerMiddleware),
});

export default store;