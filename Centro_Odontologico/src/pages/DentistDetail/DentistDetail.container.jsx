import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import DentistDetail from "./DentistDetail";

const DentistDetailContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const { id } = useParams();

  useEffect(() => {
    const getUser = axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    getUser.then((res) => dispatch({ type: "GET_USER", payload: res.data }));
  }, []);

  return (
    <div className={state.isDark ? "container-dark" : "container-light"}>
      <DentistDetail user={state.user} />
    </div>
  );
};

export default DentistDetailContainer;
