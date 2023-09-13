import "./index.css";
const Tasks = (props) => (
  <ul className="tasks__list">
    {props.tasks.map((task) => (
      <li
        className={`${
          props.hideDoneTasks === true && task.done
            ? "tasks__hiddenItem "
            : ""
        }tasks__taskRow `}
      >
        <button className={`tasks__done`}>{task.done ? "✔" : ""}</button>
        <span
          className={`tasks__individualTask ${
            task.done ? "tasks__lineThrough" : ""
          }`}
        >
          {" "}
          {task.content}{" "}
        </span>
        <button className={`tasks__remove`}>🗑</button>
      </li>
    ))}
  </ul>
);
export default Tasks;
