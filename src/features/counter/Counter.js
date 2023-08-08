import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <input
          className="flex bg-fern-green/30"
          type="text"
          text-area="new"
        ></input>

        <div className="btn-actions flex justify-between font-bold text-2xl">
          <div className="btn-increment">
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
          </div>
          <div className="btn-decrement">
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
          </div>
        </div>
        <span>{count}</span>
        <div className="decrement"></div>
      </div>
    </div>
  );
}
