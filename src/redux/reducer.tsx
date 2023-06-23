// Исходное состояние
const initialState = {
    log: [],
  };
  
  // Редуктор
  const reducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'ADD_TO_LOG':
        console.log("reducer.js  ===  ",action.payload);
        if (action.payload === "Button-clicked Backlog") {   
          console.log("Backlog")
        } else if (action.payload === "Button-clicked Ready") {
          console.log("Ready")
        } else if (action.payload === "Button-clicked In_Progress") {
          console.log("In_Progress")
        } else if (action.payload === "Button-clicked Finished") {
          console.log("Finished")
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