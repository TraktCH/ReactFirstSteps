import './App.css';
import { useEffect,useState } from 'react';
import Axios from 'axios';

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`)
    .then((res) => {
      setAge(res.data);
    });
  }

  return (
    <div className='App'>
      <p>Type in your name:</p>
      <input type='text' placeholder='ex. Adrian' onChange={(event)=>{ setName(event.target.value) }}/> <button onClick={fetchData}>Predict age</button>
      <h3>name: {age.name}</h3>
      <h3>age: {age.age}</h3>
      <h3>count: {age.count}</h3>
    </div>
  );
};


export default App;