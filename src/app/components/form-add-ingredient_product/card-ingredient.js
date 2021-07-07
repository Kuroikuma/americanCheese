import React from "react";
import Texfield from "../textfield/texfield";
import "./form-add-ingredient_product.style.css";
const CardIngredient = (props) => {
  const { ingredient } = props;

  const handlerInputIngredient = (e) => {
    const { name, value } = e.target;
    if (name === "Ingrediente") {
      ingredient.IdIngrediente = value;
    }
    if (name === "Cantidad") {
      ingredient.CantidadIngrediente = value;
      console.log(value);
    }
  };
  const handleSubmitIngredient = (e) => {};
  return (
    <>
      <div className="IngredientContainer__list__item__placeholder">
        <Texfield
          handleSubmit={handleSubmitIngredient}
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
