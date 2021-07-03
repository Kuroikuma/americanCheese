import React, { useState } from "react";

import { Modal } from "../modal/modal";
import { useModal } from "../../hooks/useModal";
import CardIngredient from "./card-ingredient";
import "./form-add-ingredient_product.style.css";
const FormAddIngredientPrduct = (props) => {
  const { ingredientsList, setIngredientsList } = props;
  const [isOpen, openModal, closeModal] = useModal(false);
  const handlerIngredientsList = () => {
    const ingredient = {
      Ingredient: "",
      Amount: "",
    };
    setIngredientsList((prevIngredient) => [...prevIngredient, ingredient]);
  };
  const handlerSaveIngredient = () => {
    console.log(ingredientsList);
  };

  return (
    <>
      <div className="IngredientContainer">
        <button className="IngredientContainer--OpenModal" onClick={openModal}>
          AGREGAR INGREDIENTE
        </button>
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <div className="IngredientContainer__title">
            <h1>Ingredientes</h1>
          </div>
          <div className="IngredientContainer__list">
            <button
              className="IngredientContainer--addListIngredient"
              onClick={handlerIngredientsList}
            >
              Agregar un nuevo ingrediente
            </button>
            {ingredientsList.map((item) => (
              <div className="IngredientContainer__list__item">
                <CardIngredient ingredient={item} />
              </div>
            ))}
            <button
              className="IngredientContainer--addListIngredient"
              onClick={handlerSaveIngredient}
            >
              Guardar Ingrediente
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default FormAddIngredientPrduct;
