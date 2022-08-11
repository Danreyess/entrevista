import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const ApiData = () => {
  const [condiciones, setCondiciones] = useState([]);

  const getApi = async () => {
    const prueba = await fetch(
      "https://api.datos.gob.mx/v1/condiciones-atmosfericas"
    );
    const { results } = await prueba.json();

    setCondiciones(results);
  };

  useEffect(() => {
    getApi();
  });

  return (
    <div>
      <ol>
        {condiciones.map((condiciones) => {
          return (
            <li>
              {condiciones.id} {condiciones.cityid} {condiciones.name}{" "}
              {condiciones.state} {condiciones.probabilityofprecip}{" "}
              {condiciones.relativehumidity} {condiciones.lastreporttime}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
