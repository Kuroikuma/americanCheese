import { React, useState } from "react";
import "./form-add-ingredients.style.css";
import Texfield from "../textfield/texfield";
import { fetchIngredient } from "../../../services/services-ingredient";
import Button from "@material-ui/core/Button";
import { SnackbarProvider, useSnackbar } from "notistack";

export const FormAddIngredient = (props) => {
  //  const { setID, ID } = props;
  const { enqueueSnackbar } = useSnackbar();
  const [nombre, setNombre] = useState();
  const [tamaño, setTamaño] = useState();
  const [stok, setStok] = useState();
  const [precio, setPrecio] = useState();
  const [imagen, setImagen] = useState();

  const handlerIngredientChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "Nombre":
        setNombre(value);
        console.log(nombre);
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
      case "Tamaño":
        setTamaño(value);
        break;
      default:
        break;
    }
  };
  const handleClickVariant = (variant) => () => {
    variant = "info";
    // variant could be success, error, warning, info, or default
    const ingredient = {
      nombre,
      precio: parseFloat(precio),
      tamaño: parseInt(tamaño),
      stock: parseFloat(stok),
      imagen,
    };
    fetchIngredient
      .postIngredient(ingredient)
      .then((response) => console.log("jkhgfjkfuhjkf"));
    enqueueSnackbar("This is a success message!", { variant });
  };
  const handlerSaveIngredient = () => {
    const ingredient = {
      nombre,
      precio: parseFloat(precio),
      tamaño: parseInt(tamaño),
      stock: parseFloat(stok),
      imagen,
    };
    fetchIngredient.postIngredient(ingredient);

    //   setID(!ID);
    //handleClickVariant("success");
  };

  return (
    <>
      <div className="FormAddIngredient__container">
        <div className="FormAddIngredient__container__title">
          <h1> Agregar ingrediente</h1>
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
            placeHolder={"Stock"}
            type={"number"}
          />
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
            name={"Tamaño"}
            placeHolder={"Tamaño"}
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
          onClick={handleClickVariant("error")}
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
