import React from "react";
import "./style.css";

const Tasks = ({tasks, hideDone, removeTask}) => (
    <ul className="tasks tasksList">
        {tasks.map(task => (
            <li 
            key={task.id}
            className={`task__item ${task.done && hideDone
                ? " task__item--hidden"
                : ""}`
                }
                >

                <button className="task__button task__button--toggleCompleted" >
                    {task.done ? "✔" : ""}
                </button>
                <span className={
                    `task__content${task.done ? " task__content--completed" : ""}`
                }>
                    {task.content}
                </span>
                <button className="task__button task__button--delete"
                 onClick={() => removeTask(task.id)}
                >
                    🗑️
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;
