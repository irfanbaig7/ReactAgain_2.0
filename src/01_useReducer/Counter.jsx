import React, { useReducer } from "react";
import { counterinitalState, counterReducer } from "./reducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, counterinitalState);
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-2">Count: {state.count}</h1>
      <div className="space-x-5">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
