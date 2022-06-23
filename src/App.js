import logo from "./logo.svg";
import "./App.css";
import {useEffect, useState} from "react";


function App() {

  const [number, setNumber] = useState(0)


  let plus = () => {
	setNumber(number + 1)
  }

  let minus = () => {
	setNumber(number - 1)
  }


  return (
	<div className="App">

	  <h1 className="fin">{number}</h1>
	  <button onClick={plus} className="+">+</button>
	  <button onClick={minus} className="-">-</button>
	</div>
  );
}

export default App;
