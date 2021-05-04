import { React, useState } from "react";
import pizza1 from "../../../../../assets/image/MenuPizzas/menupizza1.jpg";
import pizza2 from "../../../../../assets/image/MenuPizzas/menupizza2.jpeg";
import pizza3 from "../../../../../assets/image/MenuPizzas/menupizza3.jpg";
import pizza4 from "../../../../../assets/image/MenuPizzas/menupizza4.jpg";
import MenuPizzaView from "./menupizza.view";

const data = [];

data.push({
  img: pizza1,
  name: "Double Burger",
  price: "$8.50"
});
data.push({
img: pizza2,
name: "Bacon Burger",
price: "$8.00"
});
data.push({
img: pizza3,
name: "Hot Burger",
price: "$7.50"
});
data.push({
img: pizza4,
name: "Hot Pizza",
price: "$10.50"
});

function MenuPizza() {
  return <MenuPizzaView data={data} />;
}

export default MenuPizza;
