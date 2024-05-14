import { useState, useEffect } from "react";
import MyCard from "../mycard/MyCard";

const Mi_Api = ({ buscar }) => {
  const [info, setInfo] = useState([]);
  const [mostrarFecha, setMostrarFecha] = useState([]);

  const url = "https://api.boostr.cl/feriados/en.json";

  const consultarApi = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setInfo(data.data);
    } catch (error) {
      console.log("Hubo un error al consultar la API:");
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);

  useEffect(() => {
    if (buscar === "") {
      setMostrarFecha(info);
    } else {
      const filtrado = info.filter((fecha) =>
        fecha.title.toLowerCase().includes(buscar.toLowerCase())
      );
      setMostrarFecha(filtrado);
    }
  }, [buscar, info]);

  return (
    <>
      <div className="container">
        <div className="row">
          {mostrarFecha.map((fecha) => (
            <div key={fecha.id} className="col-sm-6 col-md-4 col-lg-3">
              <MyCard
                date={`${fecha.date}`}
                title={`${fecha.title}`}
                extra={`${fecha.extra}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mi_Api;
