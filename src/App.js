import './App.css';
import {DisplayIfGasGiant} from './DisplayPlanets'

function App() {

  const planets = [
    {name: "Mars" ,    isGasGiant: false},
    {name: "Earth" ,   isGasGiant: false},
    {name: "Jupiter" , isGasGiant: true},
    {name: "Venus" ,   isGasGiant: false},
    {name: "Neptune" , isGasGiant: true},
    {name: "Uranus" ,  isGasGiant: true}
  ];

  return (
    <div className="App">
      {planets.map((planet, key) => {
        return(
          <div>
           {planet.isGasGiant && <DisplayIfGasGiant name={planet.name} key={key}/>}
          </div>
        );
      })}
    </div>
  );
};


export default App;