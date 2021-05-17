import React from "react";
import "./point-of-sale.style.css";
import notificacion from "../../../../assets/image/notificacion.png";
import tab from "../../../../assets/image/multiple.png";
import user from "../../../../assets/image/usuario.png";

const PointOfSaleView = (props) => {
  return (
    <>
      <div className="container-sale">
        <div className="side-bar-sale">
          <input type="text" placeholder="Buscar Producto" />
          <button> Cerrar Turno</button>
          <div className="img-sale">
            <img src={notificacion} />
            <img src={tab} />
            <img src={user} />
          </div>
        </div>
        <div className="sale">
          <div className="sale__data">
            <div className="data__bar">
              <h5>Producto</h5>
              <h5>Cantidad</h5>
              <h5>P.Unitario</h5>
              <h5>Importe</h5>
              <h5>Cambio</h5>
              <h5>Ingreso</h5>
              <h5>P.Total</h5>
            </div>
            <div className="data__detail"></div>
          </div>
          <div className="sale__calculate">
            <div className="title-total">
              <h5>TOTAL: 0</h5>
            </div>
            <div className="texfield">
              <input type="text" />
            </div>
            <div className="calculate">
              <div className="uno grid-item-sale">1</div>
              <div className="dos grid-item-sale">2</div>
              <div className="tres grid-item-sale">3</div>
              <div className="cuatro grid-item-sale">4</div>
              <div className="cinco grid-item-sale">5</div>
              <div className="seis grid-item-sale">6</div>
              <div className="siete grid-item-sale">7</div>
              <div className="ocho grid-item-sale">8</div>
              <div className="nueve grid-item-sale">9</div>
              <div className="cero grid-item-sale">0</div>
              <div className="coma grid-item-sale">,</div>
              <div className="borrar grid-item-sale">
                <div>borrar</div>
              </div>
              <div className="amount grid-item-sale">cantidad</div>
              <div className="price grid-item-sale">precio</div>
              <div className="discount grid-item-sale">descuento</div>
              <div className="income grid-item-sale">ingreso</div>
            </div>
            <button>COBRAR</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default PointOfSaleView;
