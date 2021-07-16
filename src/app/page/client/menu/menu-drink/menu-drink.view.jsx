import React from "react";
import "./menu-drink.style.css";
import Menu from "../menu";
import { Link } from "react-router-dom";

const MenuDrinkView = (props) => {
  const { data } = props;

  return (
    <>
      <Menu />
      <div className="container-drink">
        <div className="drink">
          <div className="drink__title">
            <h1>Bebidas</h1>
          </div>
          <div className="card-container">
            {data.map((data) => (
              <div className="drink__card">
                <div className="drink__image">
                  <img src={data.img} alt="" />
                </div>
                <div className="drink__name"> {data.name}</div>
                <Link to="/point-of-sale" className="drink__order">
                  <button className="drink--button"> ORDENAR </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuDrinkView;
