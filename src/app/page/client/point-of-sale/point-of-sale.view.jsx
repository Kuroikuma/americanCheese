import React from "react";
import "./point-of-sale.style.css";

const PointOfSaleView = (props) => {
  const { data } = props;
  return (
    <>
      <div className="container-order">
        <div className="bar__order"></div>
        <div className="data__order">
          <div className="product__data">
            <h4>PRODUCTO</h4>
            <p>
              pizza <span>(20)</span>
            </p>
            <p>
              bebidas <span>(15)</span>
            </p>
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
              <h3 className="bar__title">HAZ TU PEDIDO!</h3>
              <input className="bar__input" type="text" />
            </div>
            <div className="order">
              <div className="product__order">
                {data.map((data) => (
                  <div className="cardProducto">
                    <div className="product">
                      <div className="product__image">
                        <img src={data.image} />
                        <p>{data.title}</p>
                      </div>
                    </div>
                    <div className="ingredients">
                      <h3>Ingredientes</h3>

                      <p>{data.ingredients}</p>
                    </div>
                    <div className="price">
                      <div>C${data.precio}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="currentOrder__data"></div>
        </div>
      </div>
    </>
  );
};
export default PointOfSaleView;
