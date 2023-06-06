import './App.css';
import {useState} from 'react'

function App() {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1); 
  }
  const decrease = () => {
    setCount(count - 1); 
  }
  const setToZero = () => {
    setCount(0); 
  }

  return (
    <div className='App'>
      <button onClick={increase}>INCREASE</button>
      <button onClick={setToZero}>SET TO ZERO</button>
      <button onClick={decrease}>DECREASE</button>
      <br/>
      {count}
    </div>
  );
};


export default App;