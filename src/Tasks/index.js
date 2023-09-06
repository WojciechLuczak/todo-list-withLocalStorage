import './index.css';

const Tasks = (props) => (
    <ul className="section__list">
        {props.tasks.map(task =>(
            <li
            className={`${props.hideDoneTasks===true&&task.done ? "section__hiddenItem " : ""}section__taskRow `}
            >
            
            <button className={`section__done`}>
                    {task.done ? "✔" : ""}
                    </button>
                    <span className={`section__individualTask ${task.done ? "section__lineThrough" : ""}`}> {task.content} </span>
                    <button className={`section__remove`}>
                    🗑
                    </button>

            </li>
        ))}
    </ul>
);

export default Tasks;