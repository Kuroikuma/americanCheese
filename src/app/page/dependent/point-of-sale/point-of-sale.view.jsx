import React from "react";
import "./point-of-sale.style.css";
import notificacion from "../../../../assets/image/notificacion.png";
import tab from "../../../../assets/image/multiple.png";
import user from "../../../../assets/image/usuario.png";

const PointOfSaleView = (props) => {
  return (
    <>
      <div className="container-sucursal">
        <div className="sucursal__bar">
          <div className="bar__sucursal"></div>
          <div className="bar__date"></div>
          <div className="bar__search"></div>
          <div className="bar__dependent"></div>
        </div>
        <div className="sucursal__data">
          <div className="data__textArea">
            <div className="textArea__bar">
              <div className="vacio"></div>
              <div className="textArea__name"></div>
              <div className="textArea__price"></div>
              <div className="textArea__amount"></div>
              <div className="textArea__tax"></div>
              <div className="textArea__enter"></div>
              <div className="textArea__change"></div>
            </div>
          </div>
          <div className="data__buttom">
            <button className="buttom__report"></button>
            <button className="buttom__save"></button>
            <button className="buttom__cancel"></button>
          </div>
        </div>
        <div className="sucursal__footer">
          <div className="footer__buttom">
            <div className="buttom__orders"></div>
            <div className="buttom__Inventory"></div>
            <div className="buttom__managet"></div>
          </div>
          <div className="footer__pay">
            <div className="pay__summation"></div>
            <div className="pay__total"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PointOfSaleView;
