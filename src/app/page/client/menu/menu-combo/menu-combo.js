import { React, useEffect, useState } from "react";
import MenuComboView from "./menu-combo.view";
import image from "../../../../../assets/image/pizza1.jpg";
import image2 from "../../../../../assets/image/pizza2.jpg";

const data = [];

data.push({
    img: image,
    name: "Combo familiar",
});

data.push({
    img: image2,
    name: "Combo E",
});

function MenuCombo () {
    return <MenuComboView data={data} />;
}
export default MenuCombo;
