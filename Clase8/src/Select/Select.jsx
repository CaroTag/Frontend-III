import React, { useState } from "react";

const Select = () => {
  const [color, setColor] = useState("");
  const [talle, setTalle] = useState("No hay seleccion");

  const colores = ["crimson", "yellow", "steelblue", "green"];
  const talles = [36, 37, 38, 41, 42];

  console.log(color);

  return (
    <div>
      <form>
        <select
          style={{
            width: "350px",
            height: "30px",
            fontSize: "0.9rem",
          }}
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="" default>
            Seleccionar Color
          </option>
          {colores.map((color) => {
            return (
              <option value={color} key={color}>
                {color}
              </option>
            );
          })}
        </select>

        <select
          style={{
            width: "350px",
            height: "30px",
            fontSize: "0.9rem",
          }}
          value={talle}
          onChange={(e) => setTalle(e.target.value)}
        >
          <option value="" default>
            Seleccionar Talle
          </option>
          {talles.map((talle) => {
            return (
              <option value={talle} key={talle}>
                {talle}
              </option>
            );
          })}
        </select>

        <button type="submit">Comprar</button>
      </form>

      <div
        style={{
          width: "500px",
          height: "300px",
          border: "2px solid white",
          backgroundColor: color,
        }}
      >
        <h2>El Talle seleccionado es: {talle}</h2>
      </div>
    </div>
  );
};

export default Select;
