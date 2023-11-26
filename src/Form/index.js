import React, {useState, useRef} from "react";
import "./index.css";
const Form = ({addNewTask}) => {

  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit= (event) => {
  event.preventDefault();
  const contentTrimmed = newTaskContent.trim();
  if (!contentTrimmed) { return; }
  addNewTask(contentTrimmed);
  setNewTaskContent("");
};
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
      ref = {inputRef}
      value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange = {({target}) => setNewTaskContent(target.value)}
        type="text"
      />
      <button onClick={focusInput} className="form__button">Dodaj zadanie</button>
    </form>
  )
};
export default Form;
