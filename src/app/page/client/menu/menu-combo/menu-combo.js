import { React, useState, useEffect } from "react";
import ServicesCategoryProduct from "../../../../../services/services-pizza";
import Menu from "../componentes/Menu";

function MenuCombo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    ServicesCategoryProduct("combo").then((response) => setData(response));
  }, []);
  console.log(data);

  return <Menu data={data} tittle="LISTADO DE COMBOS " />;
}
export default MenuCombo;
