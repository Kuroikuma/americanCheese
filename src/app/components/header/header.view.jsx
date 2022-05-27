import React from "react";
import "./header.style.css";
import { NavLink, Link } from "react-router-dom";

const HeaderView = (props) => {
  const { data } = props;

  return (
    <fragments>
      {data.map((data) => (
        <div className="HeaderContainer">
          <Link to="/home" className="logo">
            <img src={data.img} />
          </Link>
          <div className="top-nav">
            <div className="top-nav__component">
              <div className="button-nav">
                <Link to="/point-of-sale" className="button__top-nav">
                  <button>ORDENE EN LINEA</button>
                </Link>
                <div className="button__top-nav">
                  <button>DELIVERY</button>
                </div>
                <div className="button__top-nav">
                  <button>TUS ULTIMOS PEDIDOS</button>
                </div>
              </div>
              <div className="imgC">
                <img src={data.imgC} />
              </div>
            </div>
          </div>
          <div className="bottom-nav">
            <div className="nav-bootom__menu">
              <NavLink to="/menu" className="menu-item">
                MENU
              </NavLink>
              <a className="menu-item">PROMOCIONES</a>
              <a className="menu-item">SUCURSALES</a>
              <a className="menu-item">CONTACTO</a>
            </div>
          </div>
        </div>
      ))}
    </fragments>
  );
};

export default HeaderView;
