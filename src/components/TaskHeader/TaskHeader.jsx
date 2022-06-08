import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = 0;
  let unCompletedTask = 0;

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
