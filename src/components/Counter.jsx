import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter trop cool !</h1>
      <p>{counter}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -1
      </button>
    </div>
  );
}
