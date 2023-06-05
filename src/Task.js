export const Task = (props) => {
    return (
        <div style={{backgroundColor: props.completed === true ? "green" : "gray"}}>
            <h3>{props.taskName}</h3>
            <button onClick={() => props.completeTask(props.id)}>Complete</button>
            <button onClick={() => props.deleteTask(props.id)}>Delete</button>
        </div>
    );
}