// actions.js

// Определение типа действия
const ADD_TO_LOG = 'ADD_TO_LOG';

// Создание действия для добавления записи в лог
export const addToLog = (data: string) => {
  // console.log("actions.js  ===  ",data);  // проверка
  return {
  type: ADD_TO_LOG,
  payload: data,}
};