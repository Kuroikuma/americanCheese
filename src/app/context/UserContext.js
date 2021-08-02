import React, { useState, useEffect } from "react";
const Context = React.createContext({});
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const [Current, SetCurrent] = useState(0);

  useEffect(() => {
    const CurrentData = JSON.parse(localStorage.getItem("Current"));

    if (CurrentData) {
      SetCurrent(CurrentData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Current", JSON.stringify(Current));
  }, [Current]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      setUser(userData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <Context.Provider value={{ user, setUser, Current, SetCurrent }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
