import React, { useEffect, useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ tasksList, setTasksList }) => {
  // NOTE: do not delete `data-testid` key value pair
  // useEffect(
  //   () => {
  //     console.log(tasksList)
  //   },
  //   [tasksList]
  // )
  const [task, setTask] = useState({
    id: "",
    text: "",
    done: false,
    count: 1
  });
  const getTask = (e) => {
    setTask({
      ...task,
      id: tasksList.length + 1,
      text: e.target.value
    });
  }
  const submitTask = () => {
    if (task.text === "") {
      return;
    }
    let flag = 0;
    tasksList.forEach((elem) => {
      if (task.text === elem.text) {
        flag = 1;
        return;
      }
    })
    if (flag) {
      return;
    }
    // console.log(task)
    // console.log(tasksList)
    const updatedList = [...tasksList];
    updatedList.push(task);
    setTasksList(updatedList);
  }
  return (
    <div className={styles.todoForm}>
      <input
        onChange={getTask}
        data-testid="add-task-input" type="text" />
      <button
        onClick={submitTask}
        data-testid="add-task-button"></button>
    </div>
  );
};

export default AddTask;
