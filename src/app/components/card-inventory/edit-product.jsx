import React from "react";
import "./card-inventory.css";
import Texfield from "../textfield/texfield";
import { Modal } from "../modal/modal";
import FormEditIngredients from "../form-edit-ingredients/form-edit-ingredients";
import { useModal } from "../../hooks/useModal";
const EditProduct = (props) => {
  const [isOpen, openModal, closeModal] = useModal(false);
  const { handlerEditProductChange, ingredientsList } = props;
  return (
    <div className="container-card-modal">
      <div className="container-card-modal-img"></div>
      <div className="container-card-modal-inputs">
        <div className="container-card-modal-item container-card-modal-inputs-name">
          <Texfield
            handlerChange={handlerEditProductChange}
            name={"Nombre"}
            placeHolder={"Nombre"}
            type={"text"}
          />
        </div>
        <div className="container-card-modal-item container-card-modal-inputs-price">
          <Texfield
            handlerChange={handlerEditProductChange}
            name={"Price"}
            placeHolder={"Precio"}
            type={"number"}
          />
        </div>
        <div className="container-card-modal-item container-card-modal-inputs-sku">
          <Texfield
            handlerChange={handlerEditProductChange}
            name={"Sku"}
            placeHolder={"Sku"}
            type={"number"}
          />
        </div>
        <div className="container-card-modal-item container-card-modal-inputs-category">
          <Texfield
            handlerChange={handlerEditProductChange}
            name={"Category"}
            placeHolder={"Categoria"}
            type={"text"}
          />
        </div>
        <div className="container-card-modal-item container-card-modal-inputs-cost">
          <Texfield
            handlerChange={handlerEditProductChange}
            name={"Tamaño"}
            placeHolder={"Tamaño"}
            type={"number"}
          />
        </div>
        <div className="container-card-modal-item container-card-modal-inputs-stock">
          <Texfield
            handlerChange={handlerEditProductChange}
            name={"Stock"}
            placeHolder={"Cantidad"}
            type={"number"}
          />
        </div>
        <div className="container-card-modal-item">
          <button onClick={openModal}>Ingredientes</button>
          <Modal isOpen={isOpen} closeModal={closeModal}>
            <FormEditIngredients ingredientsList={ingredientsList} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
