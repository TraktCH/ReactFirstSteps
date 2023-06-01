import './App.css';
import {useState} from 'react'

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <button onClick={() => {
        setCount(count+1);
      }}>
        INCREASE</button>
      <button onClick={() => {
        setCount(0);
      }}>
        SET TO ZERO</button>
      <button onClick={() => {
        setCount(count -1);
      }}>
        DECREASE</button>
      <br/>
      {count}
    </div>
  );
};


export default App;