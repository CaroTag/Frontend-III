import React from "react";
import DentistCard from "../../component/common/DentistCard/DentistCard";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const Favs = ({ favs, dispatch }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <DentistCard users={favs} dispatch={dispatch} favs={favs} />
      </Container>
    </>
  );
};

export default Favs;
