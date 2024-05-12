import { useState } from "react";
import "./App.css";

import Buscador from "./componentes/buscador/Buscador";
import Mi_Api from "./componentes/mi_api/Mi_Api";

function App() {
  const [buscar, setBuscar] = useState("");
  return (
    <>
      <h1>Feriados oficiales en Chile</h1>
      <Buscador setBuscar={setBuscar} />
      <Mi_Api buscar={buscar} />
    </>
  );
}

export default App;
