import React from "react";
import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const Comp1useReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // const [count, setCount] = useState(0);
  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }
  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }
  return (
    <div>
      <button onClick={decrement}>-</button>
      <p>{state.count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Comp1useReducer;
