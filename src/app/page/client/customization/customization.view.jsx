import "./customization.style.css";
import Layout from "../../../components/shared/theme/layout";
import image from "../../../../assets/image/backclip.jpg";
import { Helmet } from "react-helmet";
import { React } from "react";

const CustomizationView = (props) => {
  return (
    <fragments>
      <Helmet>
        <title> Arma tu Pizza</title>
      </Helmet>
      <Layout />
      <div className="customization-container">
        <div className="build-container">
          <div className="build__header">
            <h1 className="build-header__title">Custom your own pizza!</h1>
          </div>
          <div className="build__aside">
            s<div className="build__pizza"></div>
            <div className="build__img">
              <img src={image} />
            </div>
          </div>
          <div className="build__footer">
            <div className="build-footer__slice">
              <div className="build-footer__title">
                <h2>slice:</h2>
                <h2> 8 pcs</h2>
              </div>
            </div>
            <div className="build-footer__price">
              <div className="build-footer__title">
                <h2>Price:</h2>
                <h2> c$ 380.00</h2>
              </div>
            </div>
          </div>
          <button className="orderb">Order</button>
        </div>
        <div className="ingredients-container">
          <div className="ingredients__header">
            <h1 className="ingredients-header__title">Ingredients</h1>
          </div>
          <div className="ingredients__aside">
            <div className="ingredients-item"></div>
            <div className="ingredients-item"></div>
            <div className="ingredients-item"></div>
            <div className="ingredients-item"></div>
            <div className="ingredients-item"></div>
            <div className="ingredients-item"></div>
            <div className="ingredients-item"></div>
            <div className="ingredients-item"></div>
            <div className="ingredients-item"></div>
            <div className="ingredients-item"></div>
            <div className="ingredients-item"></div>
            <div className="ingredients-item"></div>
            <div className="ingredients-item"></div>
            <div className="ingredients-item"></div>
            <div className="ingredients-item"></div>
          </div>
          <div className="ingredients__footer"></div>
        </div>
      </div>
    </fragments>
  );
};

export default CustomizationView;
