import React, { useState } from "react";
import styles from "./task.module.css";

import { Counter } from "../Counter";

const Task = ({ task, tasksList, removeTask }) => {
  // console.log(task)
  // NOTE: do not delete `data-testid` key value pair

  const [count, setCount] = useState(task.count);

  const handleIncrement = (id, value) => {
    console.log(id);
    setCount((pre) => pre + value);
  }

  // const handleDone = (e) => {
  //   if (e.target.checked) {

  //   }
  // }


  return (
    <li data-testid="task" className={styles.task} >
      <input
        // onChange={(e) => { console.log(e.target.checked) }}
        type="checkbox" data-testid="task-checkbox" />
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
