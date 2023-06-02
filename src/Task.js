export const Task = (props) =>{
    return (
        <div style={{backgroundColor: props.completed && 'green'}}>
            <h1> {props.name}</h1>
            <button onClick={() => props.deleteTask(props.id)}>x</button>
            <button onClick={() => props.changeCompletion(props.id)}>&#x2714;</button>
        </div>
    );
}