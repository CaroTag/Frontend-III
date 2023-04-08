import React, { createContext } from "react";
import { useReducer } from "react";

export const ContextReducer = createContext();

const initialState = {
  users: [],
  isDark: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "SWITCH_MODE":
      return { ...state, isDark: !state.isDark };
    default:
      state;
  }
};
const ContextReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextReducer.Provider value={{ state, dispatch }}>
      {children}
    </ContextReducer.Provider>
  );
};

export default ContextReducerProvider;
