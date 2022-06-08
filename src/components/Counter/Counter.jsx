import React from "react";
import styles from "./counter.module.css";

const Counter = ({ count, id, handleIncrement }) => {
  // console.log(handleIncrement)
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button
        onClick={() => handleIncrement(id, 1)}
        data-testid="task-counter-increment-button">+</button>
      <span data-testid="task-counter-value">{count}</span>
      <button
        onClick={() => handleIncrement(id, -1)}
        data-testid="task-counter-decrement-button">-</button>
    </div>
  );
};

export default Counter;
