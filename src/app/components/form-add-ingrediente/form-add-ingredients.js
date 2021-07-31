import { React, useState } from "react";
import "./form-add-ingredients.style.css";
import Texfield from "../textfield/texfield";
import { fetchIngredient } from "../../../services/services-ingredient";
import { SnackbarProvider, useSnackbar } from "notistack";

export const FormAddIngredient = (props) => {
  //  const { setID, ID } = props;
  const { enqueueSnackbar } = useSnackbar();
  const { respuesta, setRespuesta } = useState();
  const [nombre, setNombre] = useState();
  const [stok, setStok] = useState();
  const [precio, setPrecio] = useState();
  const [imagen, setImagen] = useState();
  const [unidadMedida, setUnidadMedida] = useState();

  const handlerIngredientChange = (e) => {
    const { name, value, checked } = e.target;
    switch (name) {
      case "Nombre":
        setNombre(value);
        break;
      case "Stock":
        setStok(value);
        break;
      case "Precio":
        setPrecio(value);
        break;
      case "Imagen":
        setImagen(value);
        break;
      case "unidadMedida":
        if (checked === true) {
          if (value === "oz") {
            setUnidadMedida(value);
          }
          if (value === "ml") {
            setUnidadMedida(value);
          }
        }
        break;
      default:
        break;
    }
  };

  function convertUnitMeasure(amount, measure) {
    switch (measure) {
      case "ml":
        return parseFloat(amount * 1000);
        break;
      case "oz":
        return parseFloat(amount * 16);
        break;
      default:
        return parseFloat(amount);
        break;
    }
  }

  const handleClickVariant = (variant) => {
    // variant could be success, error, warning, info, or default

    const ingredient = {
      nombre,
      precio: parseFloat(precio),
      stock: convertUnitMeasure(stok, unidadMedida),
      imagen,
      unidadMedida,
    };
    fetchIngredient
      .postIngredient(ingredient)
      .then((response) =>
        enqueueSnackbar(
          response === "success"
            ? "Ingrediente Agregado!"
            : "Ingrediente no agregado!",
          { variant: response }
        )
      );
  };
  return (
    <>
      <div className="FormAddIngredient__container">
        <div className="FormAddIngredient__container__title">
          <h1> Agregar Ingrediente</h1>
        </div>
        <div className="FormAddIngredient__container_item">
          <Texfield
            handlerChange={handlerIngredientChange}
            name={"Nombre"}
            placeHolder={"Nombre"}
            type={"text"}
          />
        </div>
        <div className="FormAddIngredient__container_item">
          <Texfield
            handlerChange={handlerIngredientChange}
            name={"Stock"}
            placeHolder={"Cantidad"}
            type={"number"}
          />
        </div>
        <div className="FormAddIngredient__container_item">
          <label for="">
            <input
              onClick={handlerIngredientChange}
              type="radio"
              name={"unidadMedida"}
              value="oz"
            />
            Libra (lb)
          </label>
          <label for="">
            <input
              onClick={handlerIngredientChange}
              type="radio"
              name={"unidadMedida"}
              value="ml"
            />
            Litro (lt)
          </label>
        </div>
        <div className="FormAddIngredient__container_item">
          <Texfield
            handlerChange={handlerIngredientChange}
            name={"Precio"}
            placeHolder={"Precio"}
            type={"number"}
          />
        </div>
        <div className="FormAddIngredient__container_item">
          <Texfield
            handlerChange={handlerIngredientChange}
            name={"Imagen"}
            placeHolder={"Imagen"}
            type={"text"}
          />
        </div>
        <button
          className="FormAddProduct__container--saveProduct"
          onClick={handleClickVariant}
        >
          Guardar Ingrediente
        </button>
      </div>
    </>
  );
};

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <FormAddIngredient />
    </SnackbarProvider>
  );
}
