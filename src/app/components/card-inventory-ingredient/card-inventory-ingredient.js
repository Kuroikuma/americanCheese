import { React, useState, Suspense, lazy } from "react";
import "./card-inventory-ingredient.css";
import { useIngredient } from "../../hooks/useIngredient";
import { fetchIngredient } from "../../../services/services-ingredient";
const EditIngredient = lazy(() => import("./edit-ingredient"));

export const CardInventoryIngredient = (props) => {
  const { Nombre, Stock, Price, Image, Sku, unidadMedida} = props;
  const { NombreR, StockR, PriceR, ImageR, SkuR, unidadMedidaR, updateIngredientField } =
    useIngredient({
      Nombre,
      Stock,
      Price,
      Image,
      Sku,
      unidadMedida,
    });

  const [increase, setIncrease] = useState(false);
  const ingredient = {
    Nombre: NombreR,
    Stock: parseInt(StockR),
    precio: parseInt(PriceR),
    Imagen: ImageR,
    IngredienteID: SkuR,
    unidadMedida: unidadMedidaR
  };
  console.log(ingredient);
  const handlerEditIngredientChange = (e) => {
    const { name, value } = e.target;
    updateIngredientField(`${name}R`, value);
  };

  const handlerSaveIngredient = () => {
    fetchIngredient
      .putIngredient(ingredient, ingredient.IngredienteID)
      .then((response) => console.log(response));
    console.log(ingredient);
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
          <div className="container-card__ContentsGrid__item Sku">
            <h4>{Sku}</h4>
          </div>
          <div className="container-card__ContentsGrid__item">
            <h4>{Nombre}</h4>
          </div>
          <div className="container-card__ContentsGrid__item">
            <p>{Price}</p>
          </div>
          <div className="container-card__ContentsGrid__item">
            <p>{Stock}</p>
          </div>
          <div className="container-card__ContentsGrid__item">
            <input onMouseUp={handlerHidenEdit} type="checkbox" />
          </div>
        </div>
        <div
          className={increase ? "Spacing-card" : "Spacing-card increase"}
        ></div>
        <Suspense fallback={"Cargando...."}>
          {increase ? (
            <EditIngredient
              handlerEditIngredientChange={handlerEditIngredientChange}
            />
          ) : null}
        </Suspense>
        <div
          className={increase ? "Spacing-card" : "Spacing-card increase"}
        ></div>
        <div className="container-card__button">
          <button onClick={handlerSaveIngredient}>Guardar Cambios</button>
        </div>
      </div>
    </>
  );
};
