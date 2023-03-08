import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./Card/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Carga de Estudiante</h1>
      <form action=""></form>

      <Card />
    </div>
  );
}

export default App;
