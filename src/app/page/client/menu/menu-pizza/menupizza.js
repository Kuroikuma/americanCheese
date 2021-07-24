import { React, useEffect, useState } from "react";
import pizza1 from "../../../../../assets/image/MenuPizzas/menupizza1.jpg";
import pizza2 from "../../../../../assets/image/MenuPizzas/menupizza2.jpeg";
import pizza3 from "../../../../../assets/image/MenuPizzas/menupizza3.jpg";
import pizza4 from "../../../../../assets/image/MenuPizzas/menupizza4.jpg";
import ServicesCategoryProduct from "../../../../../services/services-pizza";
import MenuPizzaView from "./menupizza.view";

function MenuPizza() {
  const [data, setData] = useState([]);
  useEffect(() => {
    ServicesCategoryProduct("Pizza").then((response) => setData(response));
  }, []);
  console.log(data);
  return <MenuPizzaView data={data} />;
}

export default MenuPizza;
