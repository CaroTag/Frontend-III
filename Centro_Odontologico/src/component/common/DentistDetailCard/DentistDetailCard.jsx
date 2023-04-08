import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./DentistDetailCard.css";
import { CardMedia } from "@mui/material";

const DentistDetailCard = ({ user }) => {
  return (
    <Box
      sx={{
        width: "50%",
        padding: "30px",
      }}
    >
      <CardMedia
        component="img"
        height="400"
        weight="200"
        image={
          "https://res.cloudinary.com/dnqfh2chg/image/upload/v1680834957/doctor_mpg4ix.jpg"
        }
        alt="dentista"
      />
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
        Sitio web: {user.website}
      </Typography>
    </Box>
  );
};

export default DentistDetailCard;
