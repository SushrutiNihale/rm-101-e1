import React from "react";
import styles from "./tasks.module.css";

import { Task } from "../Task"

const Tasks = ({ tasksList, removeTask }) => {
  // NOTE: do not delete `data-testid` key value pair

  return (
    <>
      {tasksList.length === 0 ?
        <div data-testid="tasks-empty" className={styles.empty}>
          {/* Show when No Tasks are present */}
          No tasks left
        </div>
        :
        <ul data-testid="tasks" className={styles.tasks}>
          {/* Task List */}
          {tasksList.map((task) => <Task task={task} key={task.id} tasksList={tasksList} removeTask={removeTask} />)}
        </ul>
      }
    </>
    // <>
    //   <ul data-testid="tasks" className={styles.tasks}>
    //     {/* Task List */}
    //     {tasksList.map((task) => <Task task={task} key={task.id} tasksList={tasksList} removeTask={removeTask} />)}
    //   </ul>
    //   <div data-testid="tasks-empty" className={styles.empty}>
    //     {/* Show when No Tasks are present */}
    //   </div>
    // </>
  );
};

export default Tasks;
