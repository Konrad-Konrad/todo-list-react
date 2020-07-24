import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Main from "./Main";
import Container from "./Container";

const tasks = [
  { id: 1, content: "przejśc na react.js", done: true },
  { id: 2, content: "odrobić zaległości w nauce", done: false },
];

const hideCompletedTasks = true;


function App() {
  return (
    <Container>
      <Main
      headerH1="Lista zadań"
      buttonsHeaderH2="Dodaj nowe zadanie"
      headerForm={<Form />}
      paragraphButtons={<Buttons tasks={tasks} hideCompletedTasks={hideCompletedTasks} />}
      listHeaderH2="Lista zadań"
      paragraphList={<Tasks tasks={tasks} hideCompletedTasks={hideCompletedTasks} />}
    />
    </Container>

  );
};

export default App;