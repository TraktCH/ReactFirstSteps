import './App.css';
import {useState} from 'react'
import { Task } from './Task'

function App() {

  const [newTask,setNewTask] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    return (
      setInputValue(event.target.value)
    );
  }

  const addTask = () => {
    return (
      setNewTask([...newTask,
      {
        name: inputValue,
        id: newTask.length===0 ? 1 : newTask[newTask.length-1].id + 1,
        completed: false
      }])
    );
  } 

  const deleteTask = (id) => {
      setNewTask(newTask.filter((task) => {
        return task.id === id ? false : true;
      }))
  }

  const completeTask = (id) => {
    return (
      setNewTask(newTask.map((task) => {
        return task.id === id ? {...task, completed: !task.completed} : task ;
      }))
    );
  }

  return (
    <div className='App'>
      <input onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>

      {newTask.map((task) => {
        return (
          <Task taskName={task.name} completeTask={completeTask} deleteTask={deleteTask} id={task.id} completed={task.completed}/>
        );
      })}
    </div>
  );
};


export default App;