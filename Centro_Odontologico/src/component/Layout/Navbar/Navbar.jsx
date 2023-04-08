import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className="logo">
            <NavLink to="/home" className="navbar">
              Centro Odontológico
            </NavLink>
          </Typography>

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

//   return (
//     <div>
//       <div className="container-navbar ">
//         <div className="container-items">
//           <NavLink
//             to="/Dentistas"
//             className={({ isActive }) => (isActive ? "activeNavbar" : "navbar")}
//           >
//             <button>Nuestros Profesionales</button>
//           </NavLink>

//           <NavLink
//             to="/contacto"
//             className={({ isActive }) => (isActive ? "activeNavbar" : "navbar")}
//           >
//             <button>Contacto</button>
//           </NavLink>

//           <NavLink
//             to="/favs"
//             className={({ isActive }) => (isActive ? "activeNavbar" : "navbar")}
//           >
//             <button>Favoritos</button>
//           </NavLink>

//         </div>
//       </div>
//       <Outlet />
//     </div>
//   );
// };
