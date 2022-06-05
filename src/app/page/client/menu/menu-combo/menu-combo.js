import { React, useState, useEffect } from "react";
import { ServicesCategoryProduct } from "../../../../../services/services-product";
import Menu from "../componentes/Menu";
import { Helmet } from "react-helmet";

function MenuCombo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    ServicesCategoryProduct("Camisas").then((response) => setData(response));
  }, []);
  console.log(data);
  return (
    <>
      <Helmet>
        <title>Menu Camisa</title>
      </Helmet>
      <Menu data={data} tittle="LISTADO DE Camisas " />
    </>
  );
}
export default MenuCombo;
