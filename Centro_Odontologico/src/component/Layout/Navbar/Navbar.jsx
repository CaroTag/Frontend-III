import React, { useContext } from "react";
import { AppBar, Toolbar, CssBaseline, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import Switch from "@mui/material/Switch";
import DarkMode from "@mui/icons-material/DarkMode";

import "./Navbar.css";
import { GlobalContext } from "../../../contexts/GlobalContext";

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleChange = () => {
    dispatch({ type: "SWITCH_MODE" });
  };

  return (
    <>
      <AppBar
        sx={{ background: state.isDark ? "#063970" : "#1e81b0" }}
        position="static"
      >
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className="logo">
            <NavLink to="/home" className="navbar">
              Centro Odontológico
            </NavLink>
          </Typography>

          {
            <Switch
              checked={state.isDark}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          }

          <div className="navlinks">
            <NavLink
              to="/favs"
              className={({ isActive }) =>
                isActive ? "activeNavbar" : "navbar"
              }
            >
              Favoritos
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "activeNavbar" : "navbar"
              }
            >
              Contacto
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};
export default Navbar;
