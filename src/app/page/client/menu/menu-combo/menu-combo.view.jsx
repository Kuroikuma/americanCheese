import React from "react";
import "./menu-combo.style.css";
import Menu from "../menu";
import { CardCombo } from "./card-combo";

const MenuComboView = (props) => {
  const { data } = props;

  return (
    <>
      <Menu />
      <div className="Combos">
        <div className="combos-tittle">
          <h1>Lista de Combos</h1>
        </div>
        <div className="cards-combo">
          {data.map((data, index) => (
            <CardCombo {...data} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};
export default MenuComboView;
