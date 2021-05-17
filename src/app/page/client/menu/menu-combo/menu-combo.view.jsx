import React from "react";
import "./menu-combo.style.css";
import Menu from "../menu";
import { CardCombo } from "./card-combo";

const MenuComboView = (props) => {
  const { data } = props;

  return (
    <>
      <Menu />
      <div className="combos-tittle">
          <h1>Lista de Combos</h1>
        </div>
      <div className="Combos">
        
        {data.map((data, index) => (
          <CardCombo {...data} index={index} />
        ))}
      </div>
    </>
  );
};
export default MenuComboView;
