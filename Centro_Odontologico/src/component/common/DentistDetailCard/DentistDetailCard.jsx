import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./DentistDetailCard.css";

const DentistDetailCard = ({ user }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {user.name}
      </Typography>
      <Typography variant="h6" component="h1" gutterBottom>
        Email: {user.email}
      </Typography>
      <Typography variant="h6" component="h1" gutterBottom>
        Teléfono: {user.phone}
      </Typography>
      <Typography variant="h6" component="h1" gutterBottom>
        Dirección: {/*user.address.street*/}
      </Typography>
    </Box>
  );
};

export default DentistDetailCard;
