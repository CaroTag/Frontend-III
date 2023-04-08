import React from "react";
import { Link } from "react-router-dom";

const DentistCard = (user, deleteDentistById, updateDentistById) => {
  return (
    <div style={{ border: "2px solid white" }}>
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>
      {/* <img
        src={elemento.img}
        alt=""
        style={{ width: "200px", height: "200px" }}
      /> */}

      <Link to={`/DentistDetail/${user.id}`}>
        <button>Ver Detalle</button>
      </Link>
    </div>
  );
};

export default DentistCard;
