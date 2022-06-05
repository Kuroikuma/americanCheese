import { React, useState, useEffect } from "react";
import { ServicesCategoryProduct } from "../../../../../services/services-product";
import Menu from "../componentes/Menu";
import { Helmet } from "react-helmet";

function MenuSmoothie() {
  const [data, setData] = useState([]);
  useEffect(() => {
    ServicesCategoryProduct("Basos").then((response) => setData(response));
  }, []);
  console.log(data);

  return (
    <>
      <Helmet>
        <title>Menu Baso</title>
      </Helmet>
      <Menu data={data} tittle="Baso" />
    </>
  );
}

export default MenuSmoothie;
