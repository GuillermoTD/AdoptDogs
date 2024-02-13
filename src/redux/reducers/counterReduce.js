import { INCREMENT, DECREMENT, RESET } from "../actions/counterTypes";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log("funciona incremento");
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      console.log("funciona decremento");
      return { ...state, counter: state.counter - 1 };
    case RESET:
      console.log("funciona reseteo");
      return { ...state, counter: (state.counter = 0) };
    default:
      return state;
  }
};

export default counterReducer;
