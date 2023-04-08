import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../contexts/GlobalContext";

import "./Home.css";

const Home = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className={state.isDark ? "container-dark" : "container-light"}>
      <h1>Bienvenido a Centro Odontologico Sur</h1>
      <Link to="/Dentistas">
        {" "}
        <h2>Conoce nuestros profesionales</h2>
      </Link>
    </div>
  );
};

export default Home;
