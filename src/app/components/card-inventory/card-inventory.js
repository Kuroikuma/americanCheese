import { React, useState } from "react";
import "./card-inventory.css";
import Texfield from "../textfield/texfield";
import { Modal } from "../modal/modal";
import { useModal } from "../../hooks/useModal";
import FormEditIngredients from "../form-edit-ingredients/form-edit-ingredients";

export const CardInventory = (props) => {
  const [isOpen, openModal, closeModal] = useModal(false);
  const [increase, setIncrease] = useState(false);
  const handleHidenEdit = (e) => {
    console.log(e.target.checked);
    if (e.target.checked == true) {
      setIncrease(false);
    }
    if (e.target.checked == false) {
      setIncrease(true);
    }
  };
  return (
    <>
      <div className={increase ? "Spacing increase" : "Spacing"}></div>
      <div className={increase ? "container-card increase" : "container-card"}>
        <div className="container-card__ContentsGrid">
          <div className="container-card__ContentsGrid__item delete">
            <input type="checkbox" />
            <div className="container-card__ContentsGrid__img"></div>
          </div>
          <div className="container-card__ContentsGrid__item">
            <h4>92u293</h4>
          </div>
          <div className="container-card__ContentsGrid__item">
            <h4>pizza hawaina</h4>
          </div>
          <div className="container-card__ContentsGrid__item">pizza</div>
          <div className="container-card__ContentsGrid__item">380</div>
          <div className="container-card__ContentsGrid__item">250</div>
          <div className="container-card__ContentsGrid__item">
            <input onMouseUp={handleHidenEdit} type="checkbox" />
          </div>
        </div>
        <div
          className={increase ? "Spacing-card" : "Spacing-card increase"}
        ></div>
        <div className="container-card-modal">
          <div className="container-card-modal-img"></div>
          <div className="container-card-modal-inputs">
            <div className="container-card-modal-item container-card-modal-inputs-name">
              <Texfield name={"Nombre"} type={"text"} />
            </div>
            <div className="container-card-modal-item container-card-modal-inputs-price">
              <Texfield name={"Precio"} type={"number"} />
            </div>
            <div className="container-card-modal-item container-card-modal-inputs-sku">
              <Texfield name={"Sku"} type={"number"} />
            </div>
            <div className="container-card-modal-item container-card-modal-inputs-category">
              <Texfield name={"Categoria"} type={"text"} />
            </div>
            <div className="container-card-modal-item container-card-modal-inputs-cost">
              <Texfield name={"Costo"} type={"number"} />
            </div>
            <div className="container-card-modal-item container-card-modal-inputs-stock">
              <Texfield name={"Cantidad"} type={"number"} />
            </div>
            <div className="container-card-modal-item">
              <button onClick={openModal}>Ingredientes</button>
              <Modal isOpen={isOpen} closeModal={closeModal}>
                <FormEditIngredients />
              </Modal>
            </div>
          </div>
        </div>
        <div
          className={increase ? "Spacing-card" : "Spacing-card increase"}
        ></div>
        <div className="container-card__button">
          <button>Guardar Cambios</button>
        </div>
      </div>
    </>
  );
};
