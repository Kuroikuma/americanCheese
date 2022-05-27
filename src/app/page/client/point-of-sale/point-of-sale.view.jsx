import React from "react";
import image from "../../../../assets/image/logo.png";
import CardPointSale from "../../../components/card-point/card-point";
import "./point-of-sale.style.css";
import SaleItem from "./saleItem";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const PointOfSaleView = (props) => {
  const {
    data,
    Sale,
    total,
    handleID,
    handlerOrder,
    handlerClearCurrendOrder,
    openAlert,
    setOpenAlert,
    setSale,
    detalle,
    setDetalle,
    band,
    setBand,
    setTotal,
  } = props;
  const apiUrl = "https://localhost:44323/";
  return (
    <fragments>
      <Helmet>
        <title>Punto de venta</title>
      </Helmet>
      <div className="container-order">
        <div className="bar__order">
          <Link to="/home">
            <img alt="" src={image} />
          </Link>
        </div>
        <div className={openAlert ? "alert-bar open" : "alert-bar"}>
          <Link to="/login">Login</Link>
          <button onClick={() => setOpenAlert(false)}>X</button>
        </div>
        <div className="data__order">
          <div className="product__data">
            <h4>PRODUCTO</h4>
            <button onClick={handleID}>Pizza</button>
            <button onClick={handleID}>Bebida</button>
            <p>
              combo <span>(6)</span>
            </p>
            <p>
              calzones <span>(8)</span>
            </p>
            <p>
              promociones <span>(5)</span>
            </p>
          </div>
          <div className="order__data">
            <div className="order__data__bar">
              <h2 className="bar__title">HAZ TU PEDIDO!</h2>
              <input className="bar__input" type="text" />
            </div>
            <div className="order">
              <div className="product__order">
                {data
                  ? data.map((data) => (
                      <CardPointSale
                        detalle={detalle}
                        nombre={data.nombre}
                        ingrediente={data.ingrediente}
                        precio={data.precio}
                        setSale={setSale}
                        Sale={Sale}
                        band={band}
                        setBand={setBand}
                        setDetalle={setDetalle}
                        setTotal={setTotal}
                        imagen={data.imagen}
                        productoID={data.productoID}
                      />
                    ))
                  : null}
              </div>
            </div>
          </div>
          <div className="currentOrder">
            <div className="title__currentOrder">
              <h2>Current order</h2>
            </div>
            <div className="products__currentOrder">
              {Sale.map((sale) => (
                <SaleItem
                  setSale={setSale}
                  Sale={Sale}
                  setDetalle={setDetalle}
                  setTotal={setTotal}
                  detalle={detalle}
                  image={sale.image}
                  title={sale.title}
                  cantidad={sale.cantidad}
                  productoID={sale.ProductoID}
                  price={sale.price}
                />
              ))}
            </div>
            <div className="currentOrden__transaction">
              <div className="grantTotal__transaction">
                <h4 className="title__grantTotal">Grant Total</h4>
                <p className="detail__grantTotal">{`C$ ${total} `}</p>
              </div>
              <div className="transaction">
                <button
                  onClick={handlerClearCurrendOrder}
                  className="clear__transaction"
                >
                  Clear all
                </button>
                <button onClick={handlerOrder} className="check__transaction">
                  Ordenar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fragments>
  );
};
export default PointOfSaleView;
