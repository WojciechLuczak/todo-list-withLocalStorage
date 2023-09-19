import "./index.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="buttons">
      <button onClick={toggleHideDone} className="buttons__changer">
        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
      </button>

      <button 
        className="buttons__changer"
        disabled={tasks.every((task) => task.done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );
};

export default Buttons;
