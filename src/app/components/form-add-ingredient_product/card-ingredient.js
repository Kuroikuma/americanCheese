import React, { useState } from "react";
import Texfield from "../textfield/texfield";
import "./form-add-ingredient_product.style.css";
const CardIngredient = (props) => {
  const { ingredient } = props;

  const handlerInputIngredient = (e) => {
    const { name, value } = e.target;
    if (name === "Ingrediente") {
      ingredient.Ingredient = value;
    }
    if (name === "Cantidad") {
      ingredient.Amount = value;
      console.log(value);
    }
  };
  return (
    <>
      <div className="IngredientContainer__list__item__placeholder">
        <Texfield
          handlerChange={handlerInputIngredient}
          name={"Ingrediente"}
          placeHolder={"Ingrediente"}
          type={"text"}
        />
      </div>
      <div className="IngredientContainer__list__item__amount">
        <Texfield
          handlerChange={handlerInputIngredient}
          name={"Cantidad"}
          placeHolder={"Cantidad"}
          type={"number"}
        />
      </div>
    </>
  );
};

export default CardIngredient;
