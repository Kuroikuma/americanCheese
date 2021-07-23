import { React, useState, Suspense, lazy } from "react";
import "./form-add-product.style.css";
import Texfield from "../textfield/texfield";
import { fetchIngredient } from "../../../services/services-ingredient";
import { ServicesGetNameCategory } from "../../../services/services-categoria";
import { fetchProduct } from "../../../services/services-product";
const FormAddIngredientPrduct = lazy(() =>
  import("../form-add-ingredient_product/form-add-ingredient_product")
);
const FormAddProduct = () => {
  const ingredients = [
    {
      IngredienteID: null,
      CantidadIngrediente: null,
    },
  ];

  const [nombre, setNombre] = useState();
  const [tamaño, setTamaño] = useState();
  const [stok, setStok] = useState();
  const [categoria, setCategoria] = useState();
  const [precio, setPrecio] = useState();
  const [isStock, setIsStock] = useState(true);
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
      case "isStock":
        setIsStock(value);
        console.log(nombre);
        break;
      case "Stock":
        setStok(value);
        break;
      case "Categoria":
        if (value === "Pizza") {
          setCategoria("48C8C50D-5B40-45A0-9E85-77255F559ADE");
        }
        if (value === "Bebida") {
          setCategoria("5860ac3e-2af3-40ef-b5be-c3ad92abbf75");
        }
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
  /* const product = {
    CategoriaID: categoria,
    nombre,
    precio: parseFloat(precio),
    tamaño: parseInt(tamaño),
    stock: parseFloat(stok),
    imagen,
    isStock,
    crearProductosNav: ingredientsList ? ingredientsList : undefined,
  };*/
  const handlerSaveProduct = () => {
    if (isStock === false) {
      const product = {
        CategoriaID: categoria,
        nombre,
        precio: parseFloat(precio),
        tamaño: parseInt(tamaño),
        stock: parseFloat(stok),
        imagen,
        isStock,
        crearProductosNav: ingredientsList,
      };
      ServicesGetNameCategory("Pizza").then((response) => console.log("bdnb"));
      fetchProduct.postProduct(product);
    } else {
      const product = {
        CategoriaID: categoria,
        nombre,
        precio: parseFloat(precio),
        tamaño: parseInt(tamaño),
        stock: parseFloat(stok),
        imagen,
        isStock,
      };
      fetchProduct.postProduct(product);
    }
  };
  const handleIsStock = (e) => {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      setIsStock(true);
    }
    if (e.target.checked === false) {
      setIsStock(false);
    }
  };

  return (
    <>
      <div className="FormAddProduct__container">
        <div className="FormAddProduct__container__title">
          <h1> Agregar Producto</h1>
        </div>
        <div className="container-card__ContentsGrid__item delete">
          <input onMouseUp={handleIsStock} type="checkbox" />
          <div className="container-card__ContentsGrid__img"></div>
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
          {/* <Texfield
            handlerChange={handlerProductChange}
            name={"Categoria"}
            placeHolder={"Categoria"}
            type={"text"}
          />*/}
          <label for="">
            <input
              onClick={handlerProductChange}
              type="checkbox"
              name="Categoria"
              value="Pizza"
            />
            Pizza
          </label>
          <label for="">
            <input
              onClick={handlerProductChange}
              type="checkbox"
              name="Categoria"
              value="Bebida"
            />
            Bebida
          </label>
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
        <Suspense fallback={"Cargando...."}>
          {isStock ? null : (
            <FormAddIngredientPrduct
              ingredientsList={ingredientsList}
              setIngredientsList={setIngredientsList}
            />
          )}
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
