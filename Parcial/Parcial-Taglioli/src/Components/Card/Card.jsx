import React from "react";
import "./Card.css";

const Card = ({ nombre, dominio }) => {
  return (
    <div className="card">
      <h2 className="textCard1">Hola: {nombre} </h2>
      <h2 className="textCard2"> El dominio de tu vehiculo es: {dominio} </h2>
    </div>
  );
};

export default Card;
