const counter = (state = 1, action: { type: any; }) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  };
  const customAsyncData = (state = "", action: any) => {
    switch (action.type) {
      case "SET_DATA":
        return { state, payload: action.payload };
      default:
        return state;
    }
  };
  export  {counter,customAsyncData};