import React, { useState } from "react";
import Card from "../FormCard/Card";
import "./Contact.css";

const Contact = () => {
  const [data, setData] = useState({
    nombre: "",
    email: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogged, setIsLogged] = useState(false);

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
        setErrorMessage("El nombre es incorrecto y el email es incorrecto");
      } else if (!nameIsValid) {
        setErrorMessage("El nombre es incorrecto");
      } else {
        setErrorMessage("el email es incorrecto");
      }
      return;
    }
    setIsLogged(true);
    // EL ENVIO
    console.log("data: ", data);
  };

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="userNombre"
            onChange={(e) => handleChange(e, "nombre")}
            placeholder="Ingrese su nombre"
          />

          {error && errorMessage.includes("El nombre es incorrecto") && (
            <span style={{ color: "red", fontSize: "0,7rem" }}>
              {errorMessage}
            </span>
          )}

          <input
            type="text"
            name="userEmail"
            onChange={(e) => handleChange(e, "email")}
            placeholder="Ingrese su email"
          />

          {error && errorMessage.includes("el email es incorrecto") && (
            <span style={{ color: "red", fontSize: "0,7rem" }}>
              {errorMessage}
            </span>
          )}

          <button style={{ backgroundColor: "blueviolet", color: "white" }}>
            Enviar
          </button>
        </form>
      </div>

      {isLogged && <Card nombre={data.nombre} email={data.email} />}
    </>
  );
};

export default Contact;
