import { React } from "react";
import image from "../../../../../assets/image/MenuBebidas/te.jfif";
import image2 from "../../../../../assets/image/MenuBebidas/jugo.jpg";
import image3 from "../../../../../assets/image/MenuBebidas/cocaCola.jpg";
import image4 from "../../../../../assets/image/MenuBebidas/agua.jfif";
import MenuSmoothieView from "./menu-smoothie.view";

const data = [];

data.push({
  img: image,
  name: "Te Natural",
});
data.push({
  img: image2,
  name: "Jugos",
});
data.push({
  img: image3,
  name: "Coca-Cola",
});
data.push({
  img: image4,
  name: "Agua En Botella",
});
data.push({
  img: image4,
  name: "Agua En Botella",
});
data.push({
  img: image,
  name: "Te Natural",
});
data.push({
  img: image2,
  name: "Jugos",
});
data.push({
  img: image3,
  name: "Coca-Cola",
});
data.push({
  img: image4,
  name: "Agua En Botella",
});
data.push({
  img: image4,
  name: "Agua En Botella",
});

function MenuSmoothie() {
  return <MenuSmoothieView data={data} />;
}

export default MenuSmoothie;
