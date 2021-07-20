import React, { useState } from "react";
const Context = React.createContext({});
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("Cliente");
  const [Current, SetCurrent] = useState(1);
  return (
    <Context.Provider value={{ user, setUser, Current, SetCurrent }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
