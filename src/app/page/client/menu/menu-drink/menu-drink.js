import { React, useState, useEffect } from "react";
import { ServicesCategoryProduct } from "../../../../../services/services-product";
import Menu from "../componentes/Menu";
import { Helmet } from "react-helmet";

function MenuDrink() {
  const [data, setData] = useState([]);
  useEffect(() => {
    ServicesCategoryProduct("bebidas").then((response) => setData(response));
  }, []);
  console.log(data);

  return (
    <>
      <Helmet>
        <title>menu Bebidas</title>
      </Helmet>
      <Menu data={data} tittle="BEBIDAS" />
    </>
  );
}

export default MenuDrink;
