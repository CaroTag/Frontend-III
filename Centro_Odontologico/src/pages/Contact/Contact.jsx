import React, { useState } from "react";
import Card from "./FormCard/Card";
import { Button, OutlinedInput, TextField } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import "./Contact.css";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";

const Contact = () => {
  const [data, setData] = useState({
    nombre: "",
    email: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSend, setIsSend] = useState(false);

  const handleChange = (e, propiedad) => {
    setData({ ...data, [propiedad]: e.target.value });
  };

  /*Validaciones*/

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameIsValid = data.nombre.length > 5;
    const emailIsValid = data.email.includes("@");

    if (!nameIsValid || !emailIsValid) {
      setError(true);
      if (!nameIsValid && !emailIsValid) {
        setErrorMessage(
          "Por favor verifique su información nuevamente. El nombre es incorrecto y el email es incorrecto"
        );
      } else if (!nameIsValid) {
        setErrorMessage("El nombre es incorrecto");
      } else {
        setErrorMessage("el email es incorrecto");
      }
      return;
    }
    setIsSend(true);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <div className="container">
          <h1>Contactanos</h1>

          <form className="form" onSubmit={handleSubmit}>
            <TextField
              type="text"
              name="userNombre"
              onChange={(e) => handleChange(e, "nombre")}
              placeholder="Ingrese su nombre"
              style={{ width: "200px", margin: "5px" }}
              // label=""
              // variant="outlined"
            />

            {error && errorMessage.includes("El nombre es incorrecto") && (
              <span style={{ color: "red", fontSize: "0,7rem" }}>
                {errorMessage}
              </span>
            )}

            <TextField
              type="text"
              name="userEmail"
              onChange={(e) => handleChange(e, "email")}
              placeholder="Ingrese su email"
              style={{ width: "200px", margin: "5px" }}
              // label=""
              // variant="outlined"
            />

            {error && errorMessage.includes("el email es incorrecto") && (
              <span style={{ color: "red", fontSize: "0,7rem" }}>
                {errorMessage}
              </span>
            )}
            <Box component="form" noValidate autoComplete="off">
              <FormControl sx={{ width: "200px" }}>
                <OutlinedInput placeholder="Deje su cosulta aqui" />
                <FormHelperText />
              </FormControl>
            </Box>
            <Button type="submit" variant="contained">
              Enviar
            </Button>
          </form>
        </div>

        {isSend && <Card nombre={data.nombre} email={data.email} />}
      </Container>
    </>
  );
};

export default Contact;
