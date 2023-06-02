import './App.css';
import {useState} from 'react'
import { Task } from './Task'

function App() {

  const [todoList, setTodoList] = useState([]);
  const [taskName, setTaskName] = useState("");

  const handleChange = (event) => {
    return setTaskName(event.target.value); 
  }

  const addTodoList = () => {
    return setTodoList([...todoList,
       {
        name: taskName,
        id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
        completed: false,
       }]);
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => {return task.id !== id})); 
  }

  const changeCompletion = (id) => {
    setTodoList(todoList.map((task) => {
      if(task.id === id){
        return {...task, completed: !task.completed}
      }
      return task;
    }));
  }
  

  return (
    <div className='App'>
      <input type='text' onChange={handleChange}/>
      <button onClick={addTodoList}>Add Task</button>

      {todoList.map((task) => {
        return (
            <Task name={task.name} id={task.id} deleteTask={deleteTask} changeCompletion={changeCompletion} completed={task.completed}/>
        );
      })}

    </div>
  );
};


export default App;