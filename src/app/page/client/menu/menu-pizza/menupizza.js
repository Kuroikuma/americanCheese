import { React, useEffect, useState } from "react";
import { ServicesCategoryProduct } from "../../../../../services/services-product";
import Menu from "../componentes/Menu";
import { Helmet } from "react-helmet";

function MenuPizza() {
  const [data, setData] = useState([]);
  useEffect(() => {
    ServicesCategoryProduct("Pizza").then((response) => setData(response));
  }, []);
  console.log(data);
  return (
    <fragments>
      <Helmet>
        <title>Menu Pizza</title>
      </Helmet>
      <Menu data={data} tittle="PIZZAS" />
    </fragments>
  );
}

export default MenuPizza;
