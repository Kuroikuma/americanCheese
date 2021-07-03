import { React } from "react";
import "./form-edit-ingredients.style.css";
import CardEditIngredient from "./card-edit-ingredient";

const FormEditIngredients = (props) => {
  const { ingredientsList } = props;
  const handlerSaveIngredient = () => {
    console.log(ingredientsList);
  };
  return (
    <>
      <div className="FormEditIngredients__container">
        <div className="FormEditIngredients__container__title">
          <h1> Editar Ingrediente</h1>
        </div>
        {ingredientsList.map((item) => (
          <div className="FormEditIngredients__container_item">
            <CardEditIngredient ingredient={item} />
          </div>
        ))}
        <button
          className="IngredientContainer--addListIngredient"
          onClick={handlerSaveIngredient}
        >
          Guardar Ingrediente
        </button>
      </div>
    </>
  );
};
export default FormEditIngredients;
