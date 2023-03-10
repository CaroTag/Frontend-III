import { useState } from "react";
import Card from "../Card/Card";
import "./Form.css";

const Form = () => {
  const [data, setData] = useState({
    nombre: "",
    dominio: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleChange = (e, propiedad) => {
    setData({ ...data, [propiedad]: e.target.value });
  };

  /*Validaciones*/

  const validateName = (str) => {
    const withoutSpaces = str.trim();

    if (withoutSpaces.length > 2 && str === withoutSpaces) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameIsValid = validateName(data.nombre);
    const domainIsValid = data.dominio.length > 5;

    if (!nameIsValid || !domainIsValid) {
      setError(true);
      if (!nameIsValid && !domainIsValid) {
        setErrorMessage("El nombre es incorrecto y la patente es incorrecta");
      } else if (!nameIsValid) {
        setErrorMessage("El nombre es incorrecto");
      } else {
        setErrorMessage("la patente es incorrecta");
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
            name="userDominio"
            onChange={(e) => handleChange(e, "dominio")}
            placeholder="Ingrese el dominio de su vehiculo"
          />

          {error && errorMessage.includes("la patente es incorrecta") && (
            <span style={{ color: "red", fontSize: "0,7rem" }}>
              {errorMessage}
            </span>
          )}

          <button style={{ backgroundColor: "blueviolet", color: "white" }}>
            Enviar
          </button>
        </form>
      </div>

      {isLogged && <Card nombre={data.nombre} dominio={data.dominio} />}
    </>
  );
};

export default Form;
