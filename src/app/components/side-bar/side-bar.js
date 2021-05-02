import { React, useState } from "react";
import image from "../../../assets/image/logo.png";
import imageUser from "../../../assets/image/userLogo.png";
import pizzaCarrito from "../../../assets/image/pizzaCarrito.png";
import SideBarView from "./side-bar.view";

const data = [];

data.push({
  img: image,
  imgU: imageUser,
  imgC: pizzaCarrito,
});

function SideBar() {
  return <SideBarView data={data} />;
}

export default SideBar;
