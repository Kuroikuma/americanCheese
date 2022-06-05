import { React } from "react";
import "./layout.style.css";
import Header from "../../header/header";

const LayoutView = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LayoutView;
