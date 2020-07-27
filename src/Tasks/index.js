import React from "react";
import "./style.css";

const Tasks = (props) => (
    <ul className="tasks tasksList">
       {props.tasks.map(task => (
           <li className= {`
           task__item {task.done && props.hideDone ? " task__item--hidden" : ""} `}>

            <button className="task__button task__button--toggleCompleted completed" >{task.done ? "✔" : ""}</button>
            <span className= {`task__content ${task.done ? "task__content--completed" : ""}`}> {task.content} </span>
            <button className="task__button task__button--delete deleteTask">🗑️</button>  			
           </li>
       ))}
    </ul>
);

export default Tasks;
