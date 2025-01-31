import React, { useReducer } from "react";

type CounterState = {
  count: number;
};

const initialState = {
  count: 0,
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment": {
      return { count: state.count + action.payload };
    }
    case "decrement": {
      return { count: state.count - action.payload };
    }
    case "reset": {
      return initialState;
    }
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        increment with 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        decrement with 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
