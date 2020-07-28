import React from "react";
import "./style.css";

const Tasks = ({tasks, hideDone}) => (
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
                <button className="task__button task__button--delete deleteTask">
                    🗑️
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;
