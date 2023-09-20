import React, {useState} from "react";
import "./index.css";
const Form = () => {
const [newTaskContent, setNewTaskContent] = useState("");
const onFormSubmit= (event) => {
  event.preventDefault();
};
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
      value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange = {({target}) => setNewTaskContent(target.value)}
        type="text"
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  )
};
export default Form;
