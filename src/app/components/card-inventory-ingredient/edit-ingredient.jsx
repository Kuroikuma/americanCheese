import React from "react";
import "./card-inventory-ingredient.css";
import Texfield from "../textfield/texfield";
const EditIngredient = (props) => {
  const { handlerEditIngredientChange } = props;
  return (
    <div className="container-card-modal">
      <div className="container-card-modal-img"></div>
      <div className="container-card-modal-inputs">
        <div className="container-card-modal-item container-card-modal-inputs-name">
          <Texfield
            handlerChange={handlerEditIngredientChange}
            name={"Nombre"}
            placeHolder={"Nombre"}
            type={"text"}
          />
        </div>
        <div className="container-card-modal-item container-card-modal-inputs-price">
          <Texfield
            handlerChange={handlerEditIngredientChange}
            name={"Price"}
            placeHolder={"Precio"}
            type={"number"}
          />
        </div>
        <div className="container-card-modal-item container-card-modal-inputs-stock">
          <Texfield
            handlerChange={handlerEditIngredientChange}
            name={"Stock"}
            placeHolder={"Cantidad"}
            type={"number"}
          />
        </div>
      </div>
    </div>
  );
};

export default EditIngredient;
