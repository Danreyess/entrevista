import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ApiFetch = () => {
  function printDate(fecha) {
    const ano = fecha[0] + fecha[1] + fecha[2] + fecha[3];
    const mes = fecha[4] + fecha[5];
    const dia = fecha[6] + fecha[7];
    return ano + "/" + mes + "/" + dia;
  }

  //Setear los hooks useState
  const [users, setUsers] = useState([]);

  //Funcion para traer los datos de la Api
  const endpoint = "https://api.datos.gob.mx/v1/condiciones-atmosfericas";
  const getApi = async () => {
    const peticion = await fetch(endpoint);
    const { results } = await peticion.json();

    console.log(results);

    setUsers(results);
  };

  useEffect(() => {
    getApi();
  }, []);

  //Renderizar la vista
  return (
    <div>
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-curso">
            <th className="table-primary">_id</th>
            <th className="table-primary">cityId</th>
            <th className="table-primary">name</th>
            <th className="table-primary">state</th>
            <th className="table-primary">probabilityofprecip</th>
            <th className="table-primary">relativehumidity</th>
            <th className="table-primary">lastreporttime</th>
            <th className="table-primary">llueve</th>
          </tr>
        </thead>

        <tbody>
          {users.map((users) => (
            <tr key={users.id}>
              <td>{users._id}</td>
              <td>{users.cityid}</td>
              <td>{users.name}</td>
              <td>{users.state}</td>
              <td>{users.probabilityofprecip}</td>
              <td>{users.relativehumidity}</td>
              <td>{printDate(users.lastreporttime)}</td>
              <td>
                {users.probabilityofprecip > 60 || users.relativehumidity > 50
                  ? "Si"
                  : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApiFetch;
