import React from 'react';
import { Buttons as StyledButtons, Changer } from './styled.js'; 

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <StyledButtons>
      <Changer onClick={toggleHideDone}>
        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
      </Changer>

      <Changer
        onClick={setAllDone}
        disabled={tasks.every((task) => task.done)}
      >
        Ukończ wszystkie
      </Changer>
    </StyledButtons>
  );
};

export default Buttons;