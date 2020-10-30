import React from "react";

export const Appcontext = React.createContext();

export const AppProvider = ({ children }) => {
  return <Appcontext.Provider>{children}</Appcontext.Provider>;
};

export const useGlobalContext = () => {
  return React.useContext(Appcontext);
};
