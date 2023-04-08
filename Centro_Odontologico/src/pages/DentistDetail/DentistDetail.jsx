import React from "react";
import DentistDetailCard from "../../component/common/DentistDetailCard/DentistDetailCard";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const DentistDetail = ({ user }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <DentistDetailCard user={user} />
      </Container>
    </>
  );
};

export default DentistDetail;
