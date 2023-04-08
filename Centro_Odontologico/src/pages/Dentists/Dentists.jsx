import React from "react";
import DentistCard from "../../component/common/DentistCard/DentistCard";

const Dentists = ({ users, dispatch, favs }) => {
  return <DentistCard users={users} dispatch={dispatch} favs={favs} />;
};

export default Dentists;
