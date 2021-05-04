import React from "react";
import "./menupizza.style.css";
import Layout from "../../../../components/shared/theme/layout";
import pizzapng from "../../../../../assets/image/MenuPizzas/pizzapng.png";

const MenuPizzaView = (props) => {
  const { data } = props;
  return (
    <>
    <Layout />
      <div className="pizza-view">
        <div className="pizza-tittle">
          MENU PIZZAS
        </div>
        <div className="div-father">
          <div className="div-child">
          </div>
          <div className="imagenpizzapng">
            <img src={pizzapng} />
          </div>
        </div>
        {data.map((data) => (
          <div className="pizza-card">
            <div className="pizza-image">
              <div className = "info-pizza">
                <h2 className = "name"> {data.name}</h2>
                <h3 className = "price"> {data.price} </h3>
                <button className = "buyonline">ADD TO CART
                </button>
              </div>
              <img src={data.img} />
            </div>
          </div>
        ))
        }
      </div>
    </>
  )
};

export default MenuPizzaView;
