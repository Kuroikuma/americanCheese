import React from "react";
import "./form-edit-ingredients.style.css";
import Texfield from "../textfield/texfield";
const CardEditIngredient = (props) => {
  const { ingredient } = props;
  const handlerInputIngredient = (e) => {
    const { name, value } = e.target;
    if (name === "Ingrediente") {
      ingredient.name = value;
    }
    if (name === "Cantidad") {
      ingredient.Amount = value;
      console.log(value);
    }
  };
  return (
    <>
      <div className="FormEditIngredients__container_item__name">
        <Texfield
          handlerChange={handlerInputIngredient}
          name={"Ingrediente"}
          placeHolder={ingredient.name}
          type={"text"}
        />
      </div>
      <div className="FormEditIngredients__container_item__amout">
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

export default CardEditIngredient;
