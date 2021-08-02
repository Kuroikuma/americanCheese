import { React, useState, useEffect } from "react";
import ServicesCategoryProduct from "../../../../../services/services-pizza";
import Menu from "../componentes/Menu";

function MenuSmoothie() {
  const [data, setData] = useState([]);
  useEffect(() => {
    ServicesCategoryProduct("frappe").then((response) => setData(response));
  }, []);
  console.log(data);

  return <Menu data={data} tittle="FRAPPÉ'S" />;
}

export default MenuSmoothie;
