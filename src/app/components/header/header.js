import { React, useState } from "react";
import image from "../../../assets/image/logo.png";
import imageUser from "../../../assets/image/userLogo.png";
import pizzaCarrito from "../../../assets/image/pizzaCarrito.png";
import HeaderView from "./header.view";

const data = [];

data.push({
  img: image,
  imgU: imageUser,
  imgC: pizzaCarrito,
});

function Header() {
  return <HeaderView data={data} />;
}

export default Header;
