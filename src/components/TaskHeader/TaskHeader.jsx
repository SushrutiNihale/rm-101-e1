import React, { useEffect, useState } from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ tasksList }) => {
  // sample values to be replaced
  const [totalTask, setTotalTask] = useState(tasksList.length);
  const [unCompletedTask, setUnCompletedTask] = useState(
    tasksList.filter((task) => task.done === false).length
  );

  useEffect(
    () => {
      setTotalTask(tasksList.length);
      setUnCompletedTask(tasksList.filter((task) => task.done === false).length);
    },
    [tasksList]
  );

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      Todo List <br></br>
      You have&nbsp;<b data-testid="header-remaining-task">{unCompletedTask}</b>
      &nbsp;of&nbsp;<b data-testid="header-total-task">{totalTask}</b>
      &nbsp;tasks remaining
    </div>
  );
};

export default TaskHeader;
