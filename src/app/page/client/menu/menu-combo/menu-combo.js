import { React, useState } from "react";
import MenuComboView from "./menu-combo.view";
import image from "../../../../../assets/image/pizza1.jpg";
import image2 from "../../../../../assets/image/pizza2.jpg";

const data = [];

data.push({
  img: image,
  name: "Combo f",
  description: ["pizza familiar", "pizza personal", "pichel de te"],
});
data.push({
  img: image,
  name: "Combo f",
  description: ["pizza familiar", "pizza personal", "pichel de te"],
});
data.push({
  img: image,
  name: "Combo f",
  description: ["pizza familiar", "pizza personal", "pichel de te"],
});
data.push({
  img: image,
  name: "Combo f",
  description: ["pizza familiar", "pizza personal", "pichel de te"],
});
data.push({
  img: image,
  name: "Combo f",
  description: ["pizza familiar", "pizza personal", "pichel de te"],
});
data.push({
  img: image,
  name: "Combo f",
  description: ["pizza familiar", "pizza personal", "pichel de te"],
});

console.log(data);
function MenuCombo() {
  return <MenuComboView data={data} />;
}
export default MenuCombo;
