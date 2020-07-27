import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
    <div className="main__toogleTasksButtons">
    {tasks.length > 0 && (
    
            <React.Fragment>
                <button className="main__HideAllCompletedTask">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </button>
                <button
                    className="main__HideAllTasks"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Zakończ wszystkie
        </button>
            </React.Fragment>
            )}
        </div>
    
);


export default Buttons;
