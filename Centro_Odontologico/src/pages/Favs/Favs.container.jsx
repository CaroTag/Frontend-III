import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import Favs from "./Favs";

const DentistsContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <div className={state.isDark ? "container-dark" : "container-light"}>
      <Favs favs={state.favs} dispatch={dispatch} />
    </div>
  );
};
export default DentistsContainer;
