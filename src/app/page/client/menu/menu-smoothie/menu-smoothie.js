import { React, useState, useEffect } from "react";
import { ServicesCategoryProduct } from "../../../../../services/services-product";
import Menu from "../componentes/Menu";
import { Helmet } from "react-helmet";

function MenuSmoothie() {
  const [data, setData] = useState([]);
  useEffect(() => {
    ServicesCategoryProduct("batidos").then((response) => setData(response));
  }, []);
  console.log(data);

  return (
    <fragments>
      <Helmet>
        <title>Menu batidos</title>
      </Helmet>
      <Menu data={data} tittle="Batidos" />
    </fragments>
  );
}

export default MenuSmoothie;
