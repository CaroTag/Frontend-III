import React from "react";

const Card = ({ nombre }) => {
  return (
    <div className="card">
      <h2 className="textCard1">
        ¡Gracias {nombre} te contactaremos cuanto antes vía mail!
      </h2>
    </div>
  );
};

export default Card;
