import React from "react";
import "./Card.css";

const Card = ({ nombre, email }) => {
  return (
    <div className="card">
      <h2 className="textCard1">
        Gracias {nombre} , te contactaremos cuanto antes vía mail
      </h2>
    </div>
  );
};

export default Card;
