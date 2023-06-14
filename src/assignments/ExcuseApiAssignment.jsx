import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [excuseText, setExcuseText] = useState("");
  
  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
    .then((res) => {
      setExcuseText(res.data[0].excuse);
    });
  }
  
  return (
    <div className='App'>
      <p>Choose excuse</p>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>

      <p>{excuseText}</p>
    </div>
  );
};


export default App;