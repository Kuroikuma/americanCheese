import React from "react";
import "./menu-smoothie.style.css";
import Menu from "../menu";

const MenuSmoothieView = (props) => {
  const { data } = props;

  return (
    <>
      <Menu />
      <div className="container-smoothie">
        <div className="smoothie">
          <div className="smoothie__title">
            <h1>Batidos</h1>
          </div>
          <div className="card-container-smoothie">
            {data.map((data) => (
              <div className="smoothie__card">
                <div className="smoothie__image">
                  <img className="smoothie_img" src={data.img} />
                </div>
                <div className="smoothie__name"> {data.name}</div>
                <div className="smoothie__order">
                  <button className="smoothie--button"> ORDENAR </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuSmoothieView;
