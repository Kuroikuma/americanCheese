import { React, useState } from "react";
import MenuComboView from "./menu-combo.view";
import image from "../../../../../assets/image/pizza1.jpg";
import image2 from "../../../../../assets/image/pizza2.jpg";

const data = [];

data.push({
  img: image,
  name: "Combo f",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autaspernatur quasi voluptas pariatur animi in omnis at vel illumamet laudantium distinctio nam Cupiditate deserunt ullam veroquas nulla Voluptates",
});

data.push({
  img: image2,
  name: "Combo E",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autaspernatur quasi voluptas pariatur animi in omnis at vel illumamet laudantium distinctio nam Cupiditate deserunt ullam veroquas nulla Voluptates",
});
data.push({
  img: image2,
  name: "Combo E",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autaspernatur quasi voluptas pariatur animi in omnis at vel illumamet laudantium distinctio nam Cupiditate deserunt ullam veroquas nulla Voluptates",
});
data.push({
  img: image2,
  name: "Combo E",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autaspernatur quasi voluptas pariatur animi in omnis at vel illumamet laudantium distinctio nam Cupiditate deserunt ullam veroquas nulla Voluptates",
});
console.log(data);
function MenuCombo() {
  return <MenuComboView data={data} />;
}
export default MenuCombo;
