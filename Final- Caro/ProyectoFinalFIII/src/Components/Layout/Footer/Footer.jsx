import { color } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <Outlet />
      <div className="container-footer">
        <h3 style={{ color: "black" }}>Telefono: 0387 4244224</h3>
        <h3 style={{ color: "grey" }}>Pagina web: wwww.clinicadental.com.ar</h3>
      </div>
    </div>
  );
};

export default Footer;
