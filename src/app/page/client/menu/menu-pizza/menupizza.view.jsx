import React from "react";
import "./menupizza.style.css";
import Menu from "../menu";
import pizzapng from "../../../../../assets/image/MenuPizzas/pizzapng.png";
import { Link } from "react-router-dom";

const MenuPizzaView = (props) => {
  const { data } = props;
  const ImageUrl = process.env.REACT_APP_URL_IMAGE || "https://localhost:44389";
  return (
    <>
      <Menu />

      <div className="pizza-view">
        <div className="pizza-tittle">MENU PIZZAS</div>
        <div className="div-father">
          <div className="div-child"></div>
          <div className="imagenpizzapng">
            <img src={pizzapng} />
          </div>
        </div>
        {data.map((data) => (
          <div className="pizza-card">
            <div className="pizza-image">
              <div className="info-pizza">
                <h2 className="name"> {data.producto}</h2>
                <h3> {data.precio} </h3>
                <Link to="/point-of-sale" className="buyonline">
                  ADD TO CART
                </Link>
              </div>
              <img src={ImageUrl + data.imagen} />
              {console.log(ImageUrl)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuPizzaView;
