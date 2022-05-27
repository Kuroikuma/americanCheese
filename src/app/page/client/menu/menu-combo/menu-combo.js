import { React, useState, useEffect } from "react";
import { ServicesCategoryProduct } from "../../../../../services/services-product";
import Menu from "../componentes/Menu";
import { Helmet } from "react-helmet";

function MenuCombo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    ServicesCategoryProduct("combo").then((response) => setData(response));
  }, []);
  console.log(data);
  return (
    <fragments>
      <Helmet>
        <title>Menu Combo</title>
      </Helmet>
      <Menu data={data} tittle="LISTADO DE COMBOS " />
    </fragments>
  );
}
export default MenuCombo;
