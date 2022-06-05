import { React, useEffect, useState } from "react";
import { ServicesCategoryProduct } from "../../../../../services/services-product";
import Menu from "../componentes/Menu";
import { Helmet } from "react-helmet";

function MenuPizza() {
  const [data, setData] = useState([]);
  useEffect(() => {
    ServicesCategoryProduct("Termo").then((response) => setData(response));
  }, []);
  console.log(data);
  return (
    <>
      <Helmet>
        <title>Menu Termo</title>
      </Helmet>
      <Menu data={data} tittle="Termo" />
    </>
  );
}

export default MenuPizza;
