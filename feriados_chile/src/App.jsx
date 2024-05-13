import { useState } from "react";
import "./App.css";

import Buscador from "./componentes/buscador/Buscador";
import Mi_Api from "./componentes/mi_api/Mi_Api";
import Header from "./componentes/header/Header";

function App() {
  const [buscar, setBuscar] = useState("");
  return (
    <>
      <container className="bg-secundary">
        <Header />
        <p>
          Conoce los feriados oficiales para Chile este año, todo actualizado.
        </p>

        <Buscador setBuscar={setBuscar} />
        <Mi_Api buscar={buscar} />
      </container>
    </>
  );
}

export default App;
