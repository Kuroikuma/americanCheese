import React, { useState, useEffect } from "react";
const Context = React.createContext({});
export const DeleteSaleItemContextProvider = ({ children }) => {
  const [deleteSaleItem, setDeleteSaleItem] = useState("");

  useEffect(() => {
    const DeleteSaleItem = JSON.parse(localStorage.getItem("SaleItem"));

    if (DeleteSaleItem) {
      setDeleteSaleItem(DeleteSaleItem);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("SaleItem", JSON.stringify(deleteSaleItem));
  }, [deleteSaleItem]);

  return (
    <Context.Provider value={{ deleteSaleItem, setDeleteSaleItem }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
