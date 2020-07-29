import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <div className="main__toogleTasksButtons">
        {tasks.length > 0 && (

            <React.Fragment>
                <button
                    onClick={toggleHideDone}
                    className="main__HideAllCompletedTask">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </button>
                <button
                    onClick={() => setAllDone()}
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
