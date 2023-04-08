import React, { useContext } from "react";
import Dentists from "../Dentists/Dentists.container";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { GlobalContext } from "../../contexts/GlobalContext";
import "./home.css";

const Home = () => {
  const { state } = useContext(GlobalContext);

  return (
    <>
      <div className={state.isDark ? "container-dark" : "container-light"}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Dentists />
        </Container>
      </div>
    </>
  );
};
export default Home;
