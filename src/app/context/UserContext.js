import React, { useState } from "react";
const Context = React.createContext({});
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const [Current, SetCurrent] = useState(0);
  return (
    <Context.Provider value={{ user, setUser, Current, SetCurrent }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
