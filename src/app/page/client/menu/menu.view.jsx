import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.style.css";
import Layout from "../../../components/shared/theme/layout";

const MenuView = () => {
  return (
    <>
      <Layout />
      <div className="container">
        <div className="menu-bar">
          <button className="menu__items">Promociones</button>
          <NavLink
            to="/menupizza"
            className="menu__items"
            activeClassName="active"
          >
            pizza
          </NavLink>
          <button className="menu__items">calzone</button>
          <NavLink
            to="/menudrink"
            className="menu__items"
            activeClassName="active"
          >
            bebida
          </NavLink>
          <NavLink
            to="/menucombo"
            className="menu__items"
            activeClassName="active"
          >
            combo
          </NavLink>
          <button className="menu__items">batido</button>
          <button className="menu__items">extra</button>
        </div>
      </div>
    </>
  );
};
export default MenuView;
