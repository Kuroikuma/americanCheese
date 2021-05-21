import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.style.css";
import Layout from "../../../components/shared/theme/layout";

const MenuView = () => {
  return (
    <>
      <Layout />
      <div className="menu-container">
        <div className="menu-bar">
          <button className="menu__items">Promociones</button>
          <NavLink
            to="/menu-pizza"
            className="menu__items"
            activeClassName="active"
          >
            pizza
          </NavLink>
          <button className="menu__items">calzone</button>
          <NavLink
            to="/menu-drink"
            className="menu__items"
            activeClassName="active"
          >
            bebida
          </NavLink>
          <NavLink
            to="/menu-combo"
            className="menu__items"
            activeClassName="active"
          >
            combo
          </NavLink>
          <NavLink
            to="/menu-smoothie"
            className="menu__items"
            activeClassName="active"
          >
            Batido
          </NavLink>
          <button className="menu__items">extra</button>
        </div>
      </div>
    </>
  );
};
export default MenuView;
