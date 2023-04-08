import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import "./DentistCard.css";

const DentistCard = ({ users, dispatch, favs }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        spacing={8}
        sx={{ display: "flex", flexDirection: "row", overflow: "auto" }}
      >
        {users.map((user) => (
          <Grid item xs={3}>
            <Card
              sx={{
                width: 300,
                height: 400,
                margin: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "grey" }} aria-label="recipe">
                    Dr
                  </Avatar>
                }
                title={user.name}
              />
              <CardMedia
                component="img"
                height="194"
                image={
                  "https://res.cloudinary.com/dnqfh2chg/image/upload/v1680834957/doctor_mpg4ix.jpg"
                }
                alt="dentista"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {user.email}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() =>
                    dispatch({ type: "HANDLE_FAVORITE", payload: user })
                  }
                >
                  <FavoriteIcon
                    color={
                      favs.some((fav) => fav.id === user.id)
                        ? "error"
                        : "disabled"
                    }
                  />
                </IconButton>
                <Link className="button" to={`/dentist/${user.id}`}>
                  <Button variant="contained">Ver detalle</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DentistCard;
