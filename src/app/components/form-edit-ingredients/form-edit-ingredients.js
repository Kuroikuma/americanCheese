import { React } from "react";
import "./form-edit-ingredients.style.css";
import Texfield from "../textfield/texfield";

const FormEditIngredients = (props) => {
  return (
    <>
      <div className="FormEditIngredients__container">
        <div className="FormEditIngredients__container__title">
          <h1> Editar Ingrediente</h1>
        </div>
        <div className="FormEditIngredients__container_item">
          <div className="FormEditIngredients__container_item__name">
            <Texfield name={"Jamon"} type={"text"} />
          </div>
          <div className="FormEditIngredients__container_item__amout">
            <Texfield name={"Cantidad"} type={"number"} />
          </div>     
        </div>
      </div>
    </>
  );
};
export default FormEditIngredients;
