import { React, Fragments } from "react";
import "./layout.style.css";
import Header from "../../header/header";

const LayoutView = ({ children }) => {
  return (
    <Fragments>
      <Header />
      {children}
    </Fragments>
  );
};

export default LayoutView;
