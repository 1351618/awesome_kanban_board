// Исходное состояние
const initialState = {
    log: [],
  };
  
  // Редуктор
  const reducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'ADD_TO_LOG':
        console.log("reducer.js  ===  ",action.payload);
        if (action.payload === "Button-clicked Backlog_Add") {   
          console.log("Backlog123")
        } else if (action.payload === "Button-clicked Ready_Add") {
          console.log("Ready123")
        } else if (action.payload === "Button-clicked In_Progress_Add") {
          console.log("In_Progress123")
        } else if (action.payload === "Button-clicked Finished_Add") {
          console.log("Finished123")
        }
        return {
          ...state,
          log: [...state.log, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default reducer;