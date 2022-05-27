import {React, Fragments } from "react";
import { Modal } from "../modal-material/modal/modal";
import { useModal } from "../../hooks/useModal-material";
import CardIngredient from "./card-ingredient";
import "./form-add-ingredient_product.style.css";
const FormAddIngredientPrduct = (props) => {
  const { ingredientsList, setIngredientsList } = props;
  const [open, handleClose, handleClickOpen] = useModal(false);

  const handlerIngredientsList = () => {
    setIngredientsList((prevIngredient) => [
      ...prevIngredient,
      {
        IngredienteID: "",
        CantidadIngrediente: "",
      },
    ]);
  };
  const handlerSaveIngredient = () => {
    console.log(ingredientsList);
  };

  return (
    <Fragments>
      <div className="IngredientContainer">
        <button
          className="IngredientContainer--OpenModal"
          onClick={handleClickOpen}
        >
          AGREGAR INGREDIENTE
        </button>
        <Modal
          titulo="Agregar Ingrediente"
          open={open}
          handleClose={handleClose}
        >
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
    </Fragments>
  );
};

export default FormAddIngredientPrduct;
