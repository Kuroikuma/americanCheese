import React from "react";
import image from "../../../../assets/image/logo.png";
import "./point-of-sale.style.css";
import { Link } from "react-router-dom";

const PointOfSaleView = (props) => {
  const { data, Sale, handleID, handleFdetail } = props;
  const ImageUrl = process.env.REACT_APP_URL_IMAGE || "https://localhost:44389";
  return (
    <>
      <div className="container-order">
        <div className="bar__order">
          <Link to="/home">
            <img src={image} />
          </Link>
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
                {data.map((data) => (
                  <div
                    onClick={() => handleFdetail(data)}
                    className="cardProducto"
                  >
                    <div className="product">
                      <div className="product__image">
                        <img src={ImageUrl + data.imagen} />
                        <p>{data.producto}</p>
                      </div>
                    </div>
                    <div className="ingredients">
                      <h3>Ingredientes</h3>
                      {data.ingrediente.map((item) => (
                        <p>{item.ingrediente}</p>
                      ))}
                    </div>
                    <div className="price">
                      <div>C${data.precio}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="currentOrder">
            <div className="title__currentOrder">
              <h2>Current order</h2>
            </div>
            <div className="products__currentOrder">
              {Sale.map((sale) => (
                <div className="saleItems__products">
                  <img src={sale.image} />
                  <p>{sale.title}</p>
                  <p>x{sale.amount}</p>
                  <p>C${sale.price}</p>
                </div>
              ))}
            </div>
            <div className="currentOrden__transaction">
              <div className="grantTotal__transaction">
                <h4 className="title__grantTotal">Grant Total</h4>
                <p className="detail__grantTotal">C$300</p>
              </div>
              <div className="transaction">
                <button className="clear__transaction">Clear all</button>
                <button className="check__transaction">Check out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PointOfSaleView;
