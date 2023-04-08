import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import Favs from "./Favs";

const DentistsContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return <Favs favs={state.favs} dispatch={dispatch} />;
};

export default DentistsContainer;
