import { React, useState, useEffect } from "react";
import { ServicesCategoryProduct } from "../../../../../services/services-product";
import Menu from "../componentes/Menu";
import { Helmet } from "react-helmet";

function MenuTaza() {
  const [data, setData] = useState([]);
  useEffect(() => {
    ServicesCategoryProduct("Tazas").then((response) => setData(response));
  }, []);
  console.log(data);

  return (
    <>
      <Helmet>
        <title>Menu Taza</title>
      </Helmet>
      <Menu data={data} tittle="Taza" />
    </>
  );
}

export default MenuTaza;
