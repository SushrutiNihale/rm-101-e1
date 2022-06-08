import React, { useEffect, useState } from "react";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import { AddTask } from "./AddTask";
import { Tasks } from "./Tasks";

const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair

  const [tasksList, setTasksList] = useState(
    [
      {
        "id": 1,
        "text": "Push up",
        "done": true,
        "count": 2
      },
      {
        "id": 2,
        "text": "Pull Up",
        "done": true,
        "count": 3
      },
      {
        "id": 3,
        "text": "Squats",
        "done": false,
        "count": 1
      },
      {
        "id": 4,
        "text": "Sprint",
        "done": false,
        "count": 5
      },
      {
        "id": 5,
        "text": "Stairs",
        "done": false,
        "count": 200
      }
    ]
  );

  const removeTask = (id) => {
    setTasksList(tasksList.filter((task) => {
      return task.id !== id;
    }))
  }

  const handleDone = (id) => {
    // console.log(id);
    setTasksList(tasksList.map((task) => {
      if (task.id === id) {
        const updatedTask = { ...task };
        updatedTask.done = !updatedTask.done;
        return updatedTask;
      }
      return task;
    }));
  }

  // useEffect(
  //   () => {
  //     console.log(tasksList);
  //   },
  //   [tasksList]
  // )

  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader tasksList={tasksList} />
      {/* Add Task */}
      <AddTask tasksList={tasksList} setTasksList={setTasksList} />
      {/* Tasks */}
      <Tasks tasksList={tasksList} removeTask={removeTask} handleDone={handleDone} />
    </div>
  );
};

export default TaskApp;
