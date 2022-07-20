import React from "react";
import styles from "./tasks.module.css";

const Tasks = (props) => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
       {
        props.item.map((e,index)=>{
          return <li>{e.id} {e.text} {e.done} {e.count} </li>
        })
       }
       
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
