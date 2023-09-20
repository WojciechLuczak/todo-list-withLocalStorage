import React from "react";
import "./index.css";

const Tasks = ({tasks, hideDone, removeTask, toggleTaskDone}) => (
  <ul className="tasks__list">
    {tasks.map((task) => (
      <li
        className={`${
          hideDone === true && task.done
            ? "tasks__hiddenItem "
            : ""
        }tasks__taskRow `}
      >
        <button 
        className={`tasks__done`}
        onClick={() => toggleTaskDone(task.id)}
        >{task.done ? "✔" : ""}</button>
        <span
          className={`tasks__individualTask ${
            task.done ? "tasks__lineThrough" : ""
          }`}
        >
          {" "}
          {task.content}{" "}
        </span>
        <button className={`tasks__remove`}
        onClick={() => removeTask(task.id)}
        >🗑</button>
      </li>
    ))}
  </ul>
);
export default Tasks;
