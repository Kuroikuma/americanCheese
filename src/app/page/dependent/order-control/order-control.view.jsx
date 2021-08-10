import React from "react";
import "./order-control.styles.css";
import imagesearch from "../../../../assets/image/lupa.png";
import orderedit from "../../../../assets/image/edit.png";
import orderdelete from "../../../../assets/image/elimanar.png";

const OrderControlView = (props) => {
  const { columnas } = props;
  const { filas } = props;
  return (
    <>
      <div className="order-table">
        <div className="order-tittle">Control de Ordenes</div>
        <div className="search">
          <input type="text" placeholder="buscar" required />
          <button className="button-search">
            <img className="image-search" src={imagesearch} alt="" />
          </button>
        </div>
        {columnas.map((columnas) => (
          <div className="order-columns">{columnas.name}</div>
        ))}
        {filas.map((filas) => (
          <>
            <div className="order-filas">{filas.Cantidad}</div>
            <div className="order-filas">{filas.Orden}</div>
            <div className="order-filas">{filas.Mesa}</div>
            <div className="order-filas">{filas.Total}</div>
            <div className="order-filas">
              <button className="button-editar">
                <div className="contenedor" title="Editar">
                  <img className="image-editar" src={orderedit} alt="" />
                </div>
              </button>
              <button className="button-eliminar">
                <div className="contenedor" title="Eliminar">
                  <img className="image-eliminar" src={orderdelete} alt="" />
                </div>
              </button>
            </div>
          </>
        ))}
        <div className="order-agregar">
          <button className="button-agregar">NUEVA ORDEN</button>
        </div>
      </div>
    </>
  );
};
export default OrderControlView;
