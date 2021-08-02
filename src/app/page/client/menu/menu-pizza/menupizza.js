import { React, useEffect, useState } from "react";
import ServicesCategoryProduct from "../../../../../services/services-pizza";
import Menu from "../componentes/Menu";

function MenuPizza() {
  const [data, setData] = useState([]);
  useEffect(() => {
    ServicesCategoryProduct("Pizza").then((response) => setData(response));
  }, []);
  console.log(data);
  return <Menu data={data} tittle="PIZZAS" />;
}

export default MenuPizza;
