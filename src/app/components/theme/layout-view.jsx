import React from "react";
import { LayoutStyle } from "./layout.style";
import SideBar from "../side-bar/side-bar";

const LayoutView = (props) => {
  const classes = LayoutStyle();

  return (
    <>
      <SideBar />
    </>
  );
};

export default LayoutView;
