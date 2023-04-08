import React from "react";
import Dentists from "../Dentists/Dentists.container";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Dentists />
      </Container>
    </>
  );
};
export default Home;
