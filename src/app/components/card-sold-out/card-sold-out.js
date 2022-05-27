import { React, Fragments } from "react";
import "./card-sold-out.style.css";
import pizza from "../../../assets/image/MenuPizzas/menupizza1.jpg";
export const CardSoldOut = (props) => {
  const { red, yellow } = props;
  return (
    <Fragments>
      <div className={`cardProducto ${red} ${yellow}`}>
        <div className="cardProduct__image">
          <img src={pizza} alt="" />
        </div>
        <div className="cardProduct__name">
          <p>Pizza hawaina</p>
        </div>
        <div className="cardProducto__stock">
          <p>0</p>
        </div>
      </div>
    </Fragments>
  );
};
