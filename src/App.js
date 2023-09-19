import React, {useState} from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "jedz zupe", done: false },
  { id: 2, content: "biegaj szybko", done: true },
];



function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  }

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" sectionBody={<Form />} />
      <Section
        title="Lista zadań"
        sectionBody={<Tasks tasks={tasks} hideDone={hideDone} />}
        extraContent={
        <Buttons 
        tasks={tasks} 
        hideDone={hideDone} 
        toggleHideDone={toggleHideDone} 
        />
      }
      />
    </Container>
  );
}

export default App;
