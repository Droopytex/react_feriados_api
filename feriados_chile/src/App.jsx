import { useState } from "react";
import "./App.css";
import Mi_Api from "./componentes/mi_api/Mi_Api";
import Buscador from "./componentes/buscador/Buscador";

function App() {
  const [buscar, setBuscar] = useState("");
  return (
    <>
      <h1>Hola todos, aquí vamos de nuevo</h1>
      <Mi_Api buscar={buscar} />
      <Buscador setBuscar={setBuscar} />
    </>
  );
}

export default App;
