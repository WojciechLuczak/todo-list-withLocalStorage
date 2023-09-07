import "./index.css";

const Buttons = ({ tasks, hideDoneTasks }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="section__titleAndToggleButtons">
      <button className="section__toggleTasksDone">
        {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
      </button>

      <button
        className="section__allDoneButton"
        disabled={tasks.every((task) => task.done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );
};

export default Buttons;
