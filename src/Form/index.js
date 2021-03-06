import React, { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimNewTask = newTaskContent.trim();

        if (!trimNewTask) {
            return;
        }

        addNewTask(trimNewTask);
        setNewTaskContent("");
        
    };

    const inputRef = useRef(null)

    const focusInput = () => {
        inputRef.current.focus();
    };
    return (
        <form
            className="form"
            onSubmit={onFormSubmit}>
            <input
                ref={inputRef}
                value={newTaskContent}
                className="form__inputField"
                placeholder="Wpisz zadanie"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button 
            onClick={()=> focusInput()}
            className="form__button"
            >
                Dodaj zadanie
                </button>
        </form>
    )
};

export default Form;

