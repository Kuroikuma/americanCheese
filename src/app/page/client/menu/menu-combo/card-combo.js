import { React } from "react";
import "./menu-combo.style.css";

export const CardCombo = (props) => {
  const { img, description, name, index } = props;

  return (
    <>
      <div class="card-combo">
        <div class="circle-combo">
          <div class="content-combo">
            <h2>{name} </h2>
            <p>{description}</p>
            <a href="#">Holis.</a>
          </div>
          <img src={img} />
        </div>
      </div>
    </>
  );
};
