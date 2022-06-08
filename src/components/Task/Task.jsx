import React, { useState } from "react";
import styles from "./task.module.css";

import { Counter } from "../Counter";

const Task = ({ task, removeTask, handleDone }) => {
  // console.log(task)
  // NOTE: do not delete `data-testid` key value pair

  const [count, setCount] = useState(task.count);

  const handleIncrement = (id, value) => {
    console.log(id);
    if (count === 1 && value < 0) {
      setCount(1);
    } else {
      setCount((pre) => pre + value);
    }
  }


  return (
    <li data-testid="task" className={styles.task} >
      {task.done ?
        <input
          type="checkbox" data-testid="task-checkbox"
          defaultChecked="true"
          onChange={() => handleDone(task.id)}
        />
        :
        <input
          type="checkbox" data-testid="task-checkbox"
          onChange={() => handleDone(task.id)}
        />}
      <div data-testid="task-text">{task.text}</div>
      {/* Counter here */}
      <Counter count={count} id={task.id} handleIncrement={handleIncrement} />
      <button
        onClick={() => removeTask(task.id)}
        data-testid="task-remove-button">X</button>
    </li>
  );
};

export default Task;
