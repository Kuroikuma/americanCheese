import { React, useState } from "react";
import "./card-inventory.css";
import Texfield from "../textfield/texfield";
import { Modal } from "../modal/modal";
import { useModal } from "../../hooks/useModal";
import FormEditIngredients from "../form-edit-ingredients/form-edit-ingredients";

export const CardInventory = (props) => {
  const [isOpen, openModal, closeModal] = useModal(false);
  const {
    Name,
    Stok,
    Category,
    Price,
    cost,
    Description,
    Image,
    Sku,
    Ingredients,
    handlerProductDelete,
  } = props;
  const ingredients = [
    {
      name: "chiltoma",
      Amount: 2,
    },
    {
      name: "lechuga",
      Amount: 3,
    },
    {
      name: "tomate",
      Amount: 1,
    },
  ];

  const [nombre, setNombre] = useState("pizza hawaina");
  const [stock, setStock] = useState(220);
  const [categoria, setCategoria] = useState("pizza");
  const [precio, setPrecio] = useState(380);
  const [costo, setCosto] = useState(350);
  const [descripcion, setDescripcion] = useState("una pizza muy rica");
  const [imagen, setImagen] = useState();
  const [sku, setSku] = useState("92u293");
  const [ingredientsList, setIngredientsList] = useState(ingredients);
  const [increase, setIncrease] = useState(false);

  const product = {
    nombre,
    stock,
    categoria,
    precio,
    costo,
    descripcion,
    imagen,
    sku,
    ingredientsList,
  };

  const handlerEditProductChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "Nombre":
        setNombre(value);
        console.log(nombre);
        break;
      case "Sku":
        setSku(value);
        console.log(sku);
        break;
      case "Stock":
        setStock(value);
        break;
      case "Categoria":
        setCategoria(value);
        console.log(categoria);
        break;
      case "Precio":
        setPrecio(value);
        break;
      case "Costo":
        setCosto(value);
        break;
      case "Descripcion":
        setDescripcion(value);
        break;
      case "Imagen":
        setImagen(value);
        break;
      default:
        break;
    }
  };

  const handlerSaveProduct = () => {
    console.log(product);
  };

  const handlerHidenEdit = (e) => {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      setIncrease(false);
    }
    if (e.target.checked === false) {
      setIncrease(true);
    }
  };
  return (
    <>
      <div className={increase ? "Spacing increase" : "Spacing"}></div>
      <div className={increase ? "container-card increase" : "container-card"}>
        <div className="container-card__ContentsGrid">
          <div className="container-card__ContentsGrid__item delete">
            <input
              onMouseUp={(e) => handlerProductDelete(e, sku)}
              type="checkbox"
            />
            <div className="container-card__ContentsGrid__img"></div>
          </div>
          <div className="container-card__ContentsGrid__item">
            <h4>{sku}</h4>
          </div>
          <div className="container-card__ContentsGrid__item">
            <h4>{nombre}</h4>
          </div>
          <div className="container-card__ContentsGrid__item">
            <p>{categoria}</p>
          </div>
          <div className="container-card__ContentsGrid__item">
            <p>{precio}</p>
          </div>
          <div className="container-card__ContentsGrid__item">
            <p>{stock}</p>
          </div>
          <div className="container-card__ContentsGrid__item">
            <input onMouseUp={handlerHidenEdit} type="checkbox" />
          </div>
        </div>
        <div
          className={increase ? "Spacing-card" : "Spacing-card increase"}
        ></div>
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
                name={"Precio"}
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
                name={"Categoria"}
                placeHolder={"Categoria"}
                type={"text"}
              />
            </div>
            <div className="container-card-modal-item container-card-modal-inputs-cost">
              <Texfield
                handlerChange={handlerEditProductChange}
                name={"Costo"}
                placeHolder={"Costo"}
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
        <div
          className={increase ? "Spacing-card" : "Spacing-card increase"}
        ></div>
        <div className="container-card__button">
          <button onClick={handlerSaveProduct}>Guardar Cambios</button>
        </div>
      </div>
    </>
  );
};
