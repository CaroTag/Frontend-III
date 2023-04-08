import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GlobalContext } from "../../../contexts/GlobalContext";
import "./Navbar.css";

const Navbar = () => {

  const { state, dispatch } = useContext(GlobalContext);

  return (
    <div>
      <div className="container-navbar ">
        <div className="container-items">
          <NavLink
            to="/Dentistas"
            className={({ isActive }) => (isActive ? "activeNavbar" : "navbar")}
          >
            <button>Nuestros Profesionales</button>
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) => (isActive ? "activeNavbar" : "navbar")}
          >
            <button>Contacto</button>
          </NavLink>

          <NavLink
            to="/favs"
            className={({ isActive }) => (isActive ? "activeNavbar" : "navbar")}
          >
            <button>Favoritos</button>
          </NavLink>


         
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
