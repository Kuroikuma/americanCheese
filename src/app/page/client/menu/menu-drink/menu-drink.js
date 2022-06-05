import { React, useState, useEffect } from "react";
import { ServicesCategoryProduct } from "../../../../../services/services-product";
import Menu from "../componentes/Menu";
import { Helmet } from "react-helmet";

function MenuDrink() {
  const [data, setData] = useState([]);
  useEffect(() => {
    ServicesCategoryProduct("Gorras").then((response) => setData(response));
  }, []);
  console.log(data);

  return (
    <>
      <Helmet>
        <title>menu Gorras</title>
      </Helmet>
      <Menu data={data} tittle="Gorras" />
    </>
  );
}

export default MenuDrink;
