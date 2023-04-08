import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import Dentists from "./Dentists";

const DentistsContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const getDentists = axios.get("https://jsonplaceholder.typicode.com/users");
    getDentists
      .then((res) => dispatch({ type: "GET_USERS", payload: res.data }))
      .catch((err) => log(err));
  }, []);

  return (
    <div>
      <Dentists users={state.users} dispatch={dispatch} />
    </div>
  );
};

export default DentistsContainer;
