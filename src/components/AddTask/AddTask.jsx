import React, { useState } from "react";
import styles from "./addTask.module.css";
import data from '../../data/tasks.json'
import Tasks from "../Tasks/Tasks";

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  const  [inputList,setInputList]=useState("")

  const [Items,setItems]=useState(data)

  const itemEvent=(event)=>{
    setInputList(event.target.value)
  }


const listofItem=()=>{

  const adddata={
    text:inputList,
    done: true,
    count: 2
  }
  setItems((oldItems)=>{
  
    return [...oldItems,adddata];
  })
}

// console.log(data)
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text"  value={inputList}  onChange={itemEvent} />
      <button data-testid="add-task-button" onClick={listofItem}> Add Text</button>
   {/* <ol>
    {
      Items.map((e)=>{
        return  <li>{e.id} {e.text}</li>
      })
    }
 
 
   </ol> */}
   <Tasks  item={Items}/>

    </div>
  );
};

export default AddTask;
