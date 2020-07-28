import React, { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Main from "./Main";
import Container from "./Container";


function App() {
  const [hideDone, setHideDone] =  useState (false);
  const [tasks, setTasks] = useState ([
    { id: 1, content: "przejśc na react.js", done: true },
    { id: 2, content: "dodać readme do projektu", done: false },
  ]);
  
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };
  const removeTask = (id) => {
    setTasks (tasks => tasks.filter(task => task.id !== id));
  }

  return (
    <Container>
      <Main
      headerH1="Lista zadań"
      buttonsHeaderH2="Dodaj nowe zadanie"
      headerForm={<Form />}
      paragraphButtons={
      <Buttons 
      tasks={tasks} 
      hideDone={hideDone} 
      toggleHideDone={toggleHideDone}
      />}
      listHeaderH2="Lista zadań"
      paragraphList={<Tasks tasks={tasks} hideDone={hideDone} removeTasks={removeTask} />}
    />
    </Container>

  );
};

export default App;
