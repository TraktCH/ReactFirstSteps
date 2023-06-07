import './App.css';
import { useState , createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Profile } from './Pages//Profile';
import { Contact } from './Pages/Contact';

export const ContextValues = createContext();


function App() {


  const [username, setUsername] = useState("TraktCH");

  return (
    <div className='App'>
      <ContextValues.Provider value={{username,setUsername}}>
      <Router>
        <div>
          Navbar: 
          <Link to="./">Home</Link>
          <Link to="./Profile">Profile</Link>
          <Link to="./Contact">Contact</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
      </Router>
      </ContextValues.Provider>
    </div>
  );
};


export default App;