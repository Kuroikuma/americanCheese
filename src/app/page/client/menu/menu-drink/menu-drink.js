import { React, useState, useEffect } from "react";
import ServicesCategoryProduct from "../../../../../services/services-pizza";
import Menu from "../componentes/Menu";

function MenuDrink() {
  const [data, setData] = useState([]);
  useEffect(() => {
    ServicesCategoryProduct("bebidas").then((response) => setData(response));
  }, []);
  console.log(data);

  return <Menu data={data} tittle="BEBIDAS" />;
}

export default MenuDrink;
