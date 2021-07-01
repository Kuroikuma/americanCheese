import { React } from "react";
import "./form-add-product.style.css";
import Texfield from "../textfield/texfield";

const FormAddProduct = () => {
  return (
    <>
      <div className="FormAddProduct__container">
        <div className="FormAddProduct__container__title">
         <h1> Agregar Producto</h1>
        </div>
        <div className="FormAddProduct__container_item">
          <Texfield name={"Nombre"} type={"text"} />
        </div>
        <div className="FormAddProduct__container_item">
          <Texfield name={"Stock"} type={"number"} />
        </div>
        <div className="FormAddProduct__container_item">
          <Texfield name={"Categoria"} type={"text"} />
        </div>
        <div className="FormAddProduct__container_item">
          <Texfield name={"precio"} type={"number"} />
        </div>
        <div className="FormAddProduct__container_item">
          <Texfield name={"Costo"} type={"number"} />
        </div>
        <div className="FormAddProduct__container_item">
          <Texfield name={"Descripcion"} type={"text"} />
        </div>
        <div className="FormAddProduct__container_item">
          <Texfield name={"imagen"} type={"text"} />
        </div>
      </div>
    </>
  );
};
export default FormAddProduct;
