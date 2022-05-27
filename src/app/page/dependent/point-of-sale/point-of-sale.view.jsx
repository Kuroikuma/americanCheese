import React, { Fragments } from "react";
import "./point-of-sale.style.css";
import Button from "@material-ui/core/Button";
import { Helmet } from "react-helmet";
import { Modal } from "../../../components/modal-material/modal/modal";
import OrderControl from "../order-control/order-control";

const PointOfSaleView = (props) => {
  const {
    data,
    Sale,
    total,
    handleProducto,
    handleFdetail,
    handleCantidad,
    logout,
    User,
    handlerOrder,
    handlerClearCurrendOrder,
    menu,
    perfil,
    open,
    handleClose,
    handleClickOpen,
  } = props;
  const apiUrl = "https://localhost:44323/";
  return (
    <Fragments>
      <Helmet>
        <title> punto de venta</title>
      </Helmet>
      <div className="PointOfSaleContainer">
        <div className="PointOfSale__Header">
          <div className="Header__PMenu">
            <button onClick={handleClickOpen}>
              <img src={menu} alt="" />
            </button>
          </div>
          <div onClick={logout} className="Header__PPerfil">
            <img src={`${apiUrl}${User.imagen}`} alt="" />
          </div>
          <Modal
            titulo="Control de ventas"
            open={open}
            handleClose={handleClose}
          >
            <OrderControl />
          </Modal>
        </div>
        <div className="PointOfSale__Spacing"></div>
        <div className="PointOfSale__Search">
          <input
            onBlur={handleProducto}
            className="Search__Producto"
            type="text"
          />
          <input
            onBlur={handleCantidad}
            className="Search__Cantidad"
            type="number"
          />
          <Button onClick={handleFdetail} variant="contained" color="primary">
            Buscar
          </Button>
        </div>
        <div className="PointOfSale__DashBoard">
          <div className="DashBoard__Title">
            <div className="Title__Producto">
              <p>Producto</p>
            </div>
            <div className="Title__Code">
              <p>Code</p>
            </div>
            <div className="Title__Unidad">
              <p>Unidad</p>
            </div>
            <div className="Title__Precio">
              <p>Precio</p>
            </div>
            <div className="Title__Monto">
              <p>Monto</p>
            </div>
          </div>
          <div className="DashBoard__Order">
            {Sale &&
              Sale.map((item) => (
                <div className="Order__itemP">
                  <div className="itemP__Producto">
                    <p> {item.Producto} </p>
                  </div>
                  <div className="itemP__Code">
                    <p> {item.code} </p>
                  </div>
                  <div className="itemP__Unidad">
                    <p> {item.cantidad} </p>
                  </div>
                  <div className="itemP__Precio">
                    <p>{` C$${item.price}`}</p>
                  </div>
                  <div className="itemP__Monto">
                    <p>{` C$${item.total}`}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="DashBoard__Info">
            <div className="Info__Item">
              <div className="ItemTitle">
                <p>Cantidad Producto:</p>
              </div>
              <div className="ItemNumber">
                <p>5</p>
              </div>
            </div>
            <div className="Info__Item">
              <div className="ItemTitle">
                <p>Descuento:</p>
              </div>
              <div className="ItemNumber">
                <p>10%</p>
              </div>
            </div>
            <div className="Info__Item">
              <div className="ItemTitle">
                <p>SubTotal:</p>
              </div>
              <div className="ItemNumber">
                <p>C$250</p>
              </div>
            </div>
            <div className="Info__Item">
              <div className="ItemTitle">
                <p>Total:</p>
              </div>
              <div className="ItemNumber">
                <p>{` C$${total}`}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="PointOfSale__Button">
          <div className="ButtonsP">
            <button className="ButtonP__PItems">Dismiss</button>
            <button onClick={handlerOrder} className="ButtonP__PItems">
              Check in
            </button>
          </div>
        </div>
      </div>
    </Fragments>
  );
};
export default PointOfSaleView;
