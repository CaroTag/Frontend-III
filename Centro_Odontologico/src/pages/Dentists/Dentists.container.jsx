import axios from "axios";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import Dentists from "./Dentists";
import "./DentistDetailCard.css";

const DentistsContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const getDentists = axios.get("https://jsonplaceholder.typicode.com/users");
    getDentists
      .then((res) => dispatch({ type: "GET_USERS", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="space">
      <Dentists users={state.users} favs={state.favs} dispatch={dispatch} />
    </div>
  );
};

export default DentistsContainer;
