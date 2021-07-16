import { React, useState,Suspense, lazy } from "react";
import "./form-add-product.style.css";
import Texfield from "../textfield/texfield";
import { fetchIngredient } from "../../../services/services-ingredient";
import { fetchProduct } from "../../../services/services-product";
const FormAddIngredientPrduct = lazy(() =>
  import("../form-add-ingredient_product/form-add-ingredient_product")
);
const FormAddProduct = () => {
  const ingredients = [
    {
      IngredienteID: "",
      CantidadIngrediente: "",
    },
  ];

  const [nombre, setNombre] = useState();
  const [tamaño, setTamaño] = useState();
  const [stok, setStok] = useState();
  const [categoria, setCategoria] = useState();
  const [precio, setPrecio] = useState();
  const [isStock ,setIsStock]= useState(true);
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
    stock: parseFloat(stok),
    imagen,
    isStock,
    crearProductosNav: ingredientsList,
  };

  const handlerSaveProduct = () => {
   
  /*  product.crearProductosNav.map((item)=>{
      console.log("holamundo")
      console.log(item)
      fetchIngredient.getSelectIngredientName(item.IngredienteID).then((response)=>item.IngredienteID = response.IngredienteID)
    })*/
    fetchProduct.postProduct(product);
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
            <input
              onMouseUp={handleIsStock}
              type="checkbox"
            />
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
        <Suspense fallback={"Cargando...."}>
          {isStock
           ?null
           :
            <FormAddIngredientPrduct
              ingredientsList={ingredientsList}
              setIngredientsList={setIngredientsList}
            />
          }
          
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
