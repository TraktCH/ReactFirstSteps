import './App.css';

function App() {
  return (
    <div className="App">
      <Employee name="Adrian"  age={20} email="adrian@adrian.com"   position="FrontEnd" salary={80000}/>
      <Employee name="Mariusz" age={25} email="mariusz@mariusz.com" position="BackEnd"  salary={90000}/>
      <Employee name="Mirek"   age={35} email="mirek@mirek.com"     position="BackEnd"  salary={110000}/>
      <Employee name="Janusz"  age={30} email="janusz@janusz.com"   position="FrontEnd" salary={100000}/>
    </div>
  );
};

const Employee = (props) => {
  // added background and font color change based on salary
  // added position based on age
  return ( 
    <div className='ViewCard' style={{backgroundColor:props.salary>=100000 ? "green": "cyan", color:props.salary<100000 && "black"}}>
      <h2>Name: {props.name}</h2>
      <h3>Age: {props.age}</h3>
      <h3>E-mail: {props.email}</h3>
      <h3>Position: {props.position} {props.age < 25 ? "Junior Developer" : props.age < 35 ? "Mid-level Developer" : "Senior Developer"}</h3>
      <h3>Salary: {props.salary}</h3>  
    </div>
  );
}

export default App;