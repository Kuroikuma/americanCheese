import React from "react";
import image from "../../../assets/image/logo.png";
import imageUser from "../../../assets/image/userLogo.png";

import { sideBarStyles } from "./side-bar.style";
const SideBarView = (props) => {
  const classes = sideBarStyles();

  const { goHome, goLogin } = props;

  return (
    <>
      <div style={classes.container}>
        <img style={classes.img} src={image} />
        <a style={classes.a}>Sucursales</a>
        <a style={classes.a}>Producto</a>
        <a style={classes.a}>contacto</a>
        <a style={classes.a}>Promociones</a>
        <img style={classes.imgUser} src={imageUser} />
      </div>
    </>
  );
};

export default SideBarView;
