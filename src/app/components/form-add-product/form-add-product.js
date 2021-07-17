import React, { useState, Suspense, lazy } from "react";
import "./form-add-product.style.css";
import Texfield from "../textfield/texfield";
import { fetchProduct } from "../../../services/services-product";
import { fetchIngredient } from "../../../services/services-ingredient";
const FormAddIngredientPrduct = lazy(() =>
  import("../form-add-ingredient_product/form-add-ingredient_product")
);
const FormAddProduct = () => {
  const ingredients = [
    {
      IngredienteID: "",
      CantidadIngrediente: "",
      PrecioIngrediente: "",
    },
  ];

  const [nombre, setNombre] = useState();
  const [isStock, setIsStock] = useState();
  const [stock, setStok] = useState();
  const [tamaño, setTamaño] = useState();
  const [categoria, setCategoria] = useState();
  const [precio, setPrecio] = useState();
  const [descripcion, setDescripcion] = useState();
  const [imagen, setImagen] = useState();
  const [ingredientsList, setIngredientsList] = useState(ingredients);

  const handlerProductChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "Nombre":
        setNombre(value);
        console.log(nombre);
        break;
      case "IsStock":
        setIsStock(value);
        console.log(nombre);
        break;
      case "Stock":
        setStok(value);
        break;
      case "Categoria":
        setCategoria(value);
        console.log(categoria);
        break;
      case "Precio":
        setPrecio(value);
        break;
      case "Descripcion":
        setDescripcion(value);
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
  const product = {
    CategoriaID: categoria,
    nombre,
    precio: parseFloat(precio),
    tamaño: parseInt(tamaño),
    imagen,
    stock: parseFloat(stock),
    crearProducto: ingredientsList,
  };

  const handlerSaveProduct = () => {
    product.crearProducto.IdIngrediente.forEach((Ingredient) => {
      fetchIngredient
        .getSelectIngredientName(Ingredient)
        .then((response) => (Ingredient = response.IdIngrediente));
    });
    fetchProduct.postProduct(product);
    console.log("delete");
  };

  const handlerIsStock = (e) => {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      setIsStock(false);
    }
    if (e.target.checked === false) {
      setIsStock(true);
    }
  };

  return (
    <>
      <div className="FormAddProduct__container">
        <div className="FormAddProduct__container__title">
          <h1> Agregar Producto</h1>
        </div>
        <div className="FormAddProduct__container_item">
          <input
            onMouseUp={handlerIsStock}
            name={"IsStock"}
            placeHolder={"IsStock"}
            type={"checkbox"}
          />
        </div>
        <div className="FormAddProduct__container_item">
          <Texfield
            handlerChange={handlerProductChange}
            name={"Nombre"}
            placeHolder={"Nombre"}
            type={"text"}
          />
        </div>

        <div className="FormAddProduct__container_item">
          <Texfield
            handlerChange={handlerProductChange}
            name={"Stock"}
            placeHolder={"Stock"}
            type={"number"}
          />
        </div>
        <div className="FormAddProduct__container_item">
          <Texfield
            handlerChange={handlerProductChange}
            name={"Categoria"}
            placeHolder={"Categoria"}
            type={"text"}
          />
        </div>
        <div className="FormAddProduct__container_item">
          <Texfield
            handlerChange={handlerProductChange}
            name={"Precio"}
            placeHolder={"Precio"}
            type={"number"}
          />
        </div>
        <div className="FormAddProduct__container_item">
          <Texfield
            handlerChange={handlerProductChange}
            name={"Tamaño"}
            placeHolder={"Tamaño"}
            type={"number"}
          />
        </div>
        <div className="FormAddProduct__container_item">
          <Texfield
            handlerChange={handlerProductChange}
            name={"Descripcion"}
            placeHolder={"Descripcion"}
            type={"text"}
          />
        </div>
        <div className="FormAddProduct__container_item">
          <Texfield
            handlerChange={handlerProductChange}
            name={"Imagen"}
            placeHolder={"Imagen"}
            type={"text"}
          />
        </div>
        <Suspense fallback={"Estoy cargando"}>
          {isStock ? (
            <FormAddIngredientPrduct
              ingredientsList={ingredientsList}
              setIngredientsList={setIngredientsList}
            />
          ) : null}
        </Suspense>

        <button
          className="FormAddProduct__container--saveProduct"
          onClick={handlerSaveProduct}
        >
          Guardar Producto
        </button>
      </div>
    </>
  );
};
export default FormAddProduct;
