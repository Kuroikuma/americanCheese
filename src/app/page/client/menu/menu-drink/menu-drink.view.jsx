import React from "react";
import "./menu-drink.style.css";
import Layout from "../../../../components/side-bar/side-bar";

const MenuDrinkView = (props) => {
  const { data } = props;

  return (
    <>
      <Layout />
      <div className="container-drink">
        <div className="drink">
          <div className="drink__title">
            <h1>Bebidas</h1>
          </div>
          <div className="card-container">
            {data.map((data) => (
              <div className="drink__card">
                <div className="drink__image">
                  <img className="drink_img" src={data.img} />
                </div>
                <div className="drink__name"> {data.name}</div>
                <div className="drink__order">
                  <button className="drink--button"> ORDENAR </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuDrinkView;
