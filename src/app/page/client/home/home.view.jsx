import React, { Fragments } from "react";
import { Link } from "react-router-dom";
import "./home.style.css";
import { Helmet } from "react-helmet";
import logoUrl from "../../../../assets/image/AmericanCheeseLogopng.png";
import facebookUrl from "../../../../assets/image/Facebook_Logo.png";
import instagramUrl from "../../../../assets/image/Instagran_Logo.png";
import Perfil from "../../../../assets/image/Perfil.jpg";
import user from "../../../../assets/image/user.png";
import Campanita from "../../../../assets/image/activo.png";
import Carrito from "../../../../assets/image/anadir-al-carrito.png";
import PizzaRandom from "../../../../assets/image/PizzaRandom.jpg";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import MenuImg from "../../../../assets/image/menu.png";

const HomeView = (props) => {
  const apiUrl = "https://localhost:44323/";
  const {
    open,
    setOpen,
    data,
    data2,
    ProductPopular,
    ProductPopular2,
    logout,
    isMenuOpen,
    handleLogin,
    handleMenuClose,
    handleProfileMenuOpen,
    anchorEl,
    User,
  } = props;

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      onClick={handleLogin}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        value={Object.keys(User).length ? "Logout" : "Login"}
        onClick={handleMenuClose}
      >
        {Object.keys(User).length ? "Logout" : "Login"}
      </MenuItem>
      <MenuItem value="My account" onClick={handleMenuClose}>
        My account
      </MenuItem>
    </Menu>
  );

  return (
    <Fragments>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="home">
        <div className="homeContainer">
          <div
            className={
              open ? "homeContainer__sideBar Open" : "homeContainer__sideBar"
            }
          >
            <div className="homeContainer__sideBar__logo">
              <img src={logoUrl} alt="" />
            </div>
            <div className="homeContainer__sideBar__buttom">
              <button onClick={() => setOpen(false)}>Dashboard</button>
              <button>
                <Link to="/point-of-sale">Ordene en lina</Link>
              </button>
              <button> Ultimos Pedido</button>
              <button>
                <Link to="/customization">Arma Tu Pizza</Link>
              </button>
              <div className="homeContainer__sideBar__buttom--delivery">
                <p>Numero</p>
                <p> 2422-5882</p>
              </div>
            </div>
            <div className="homeContainer__sideBar__follow">
              <div className="homeContainer__sideBar__follow__title">
                <h2>siguenos en:</h2>
              </div>
              <div className="homeContainer__sideBar__follow__net">
                <div className="homeContainer__sideBar__follow__net--Instagram">
                  <img src={instagramUrl} alt="" />
                </div>
                <div className="homeContainer__sideBar__follow__net--Facebook">
                  <a href="https://www.facebook.com/search/top?q=american%20cheese%20pizza">
                    <img src={facebookUrl} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              open
                ? "homeContainer__dashboard"
                : "homeContainer__dashboard Open"
            }
          >
            <div className="homeContainer__dashboard__header">
              <button
                className={
                  open
                    ? "homeContainer__dashboard__header__bar Open"
                    : "homeContainer__dashboard__header__bar"
                }
                onClick={() => setOpen(true)}
              >
                <img src={MenuImg} alt="" />
              </button>
              <div className="homeContainer__dashboard__header__title">
                <h1>American Cheese</h1>
              </div>
              <div className="homeContainer__dashboard__header__input">
                <input type="text" placeholder="Buscar" />
              </div>
            </div>
            <div className="homeContainer__dashboard__category">
              {open
                ? data2.map((item, index) => (
                    <Link
                      to={`/menu-${item.name}`}
                      className={
                        open
                          ? "homeContainer__dashboard__category__content__img"
                          : "homeContainer__dashboard__category__content__img Open"
                      }
                    >
                      <p>{item.name}</p>
                      <img src={item.img} alt="" />
                    </Link>
                  ))
                : data.map((item, index) => (
                    <Link
                      to={`/menu-${item.name}`}
                      className={
                        open
                          ? "homeContainer__dashboard__category__content__img"
                          : "homeContainer__dashboard__category__content__img Open"
                      }
                    >
                      <p>{item.name}</p>
                      <img src={item.img} alt="" />
                    </Link>
                  ))}
            </div>
            <div className="homeContainer__dashboard__branch">
              <div className="homeContainer__dashboard__branch__title">
                <h2>Sucursales</h2>
              </div>
              <div className="homeContainer__dashboard__branch__content">
                <div className="homeContainer__dashboard__branch__content__card">
                  <div className="homeContainer__dashboard__branch__content__card__location">
                    <h5>Sucursales</h5>
                    <p>Juigalpa</p>
                  </div>
                  <div className="homeContainer__dashboard__branch__content__card__addres">
                    <h5>Direccion</h5>
                    <p>Por el chino</p>
                  </div>
                  <div className="homeContainer__dashboard__branch__content__card__number">
                    <h5>Rank</h5>
                    <p>#1</p>
                  </div>
                  <div className="homeContainer__dashboard__branch__content__card__phone">
                    <h5>Delibery</h5>
                    <p>2512-5858</p>
                  </div>
                </div>
                <div className="homeContainer__dashboard__branch__content__border"></div>
                <div className="homeContainer__dashboard__branch__content__card">
                  <div className="homeContainer__dashboard__branch__content__card__location">
                    <h5>Sucursales</h5>
                    <p>Juigalpa</p>
                  </div>
                  <div className="homeContainer__dashboard__branch__content__card__addres">
                    <h5>Direccion</h5>
                    <p>Por el chino</p>
                  </div>
                  <div className="homeContainer__dashboard__branch__content__card__number">
                    <h5>Rank</h5>
                    <p>#1</p>
                  </div>
                  <div className="homeContainer__dashboard__branch__content__card__phone">
                    <h5>Delibery</h5>
                    <p>2512-5858</p>
                  </div>
                </div>
                <div className="homeContainer__dashboard__branch__content__button">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="homeContainer__dashboard__productPopular">
              <div className="homeContainer__dashboard__productPopular__title">
                <h2>Productos Mas Populares</h2>
              </div>
              <div className="homeContainer__dashboard__productPopular__content">
                {open
                  ? ProductPopular.map((item) => (
                      <div
                        className={
                          open
                            ? "homeContainer__dashboard__productPopular__content__card"
                            : "homeContainer__dashboard__productPopular__content__card Open"
                        }
                      >
                        <img src={item.img} alt="" />
                        <h3>{item.name}</h3>
                      </div>
                    ))
                  : ProductPopular2.map((item) => (
                      <div
                        className={
                          open
                            ? "homeContainer__dashboard__productPopular__content__card"
                            : "homeContainer__dashboard__productPopular__content__card Open"
                        }
                      >
                        <img src={item.img} alt="" />
                        <h3> {item.name} </h3>
                      </div>
                    ))}
              </div>
            </div>
          </div>
          <div className="homeContainer__productRandom">
            <div className="homeContainer__productRandom__notification">
              <div className="homeContainer__productRandom__notification__space"></div>
              <img src={Carrito} alt="" />
              <img src={Campanita} alt="" />
              <img
                onClick={handleProfileMenuOpen}
                src={
                  Object.keys(User).length ? `${apiUrl}${User.imagen}` : user
                }
                alt=""
              />
            </div>
            <div className="homeContainer__productRandom__content">
              <div className="homeContainer__productRandom__content__header">
                <div className="homeContainer__productRandom__content__header__title">
                  <h2> Productos</h2>
                </div>
                <div className="homeContainer__productRandom__content__header__button">
                  <div className="homeContainer__productRandom__content__header__button--back">
                    <button>{"<"} </button>
                  </div>
                  <div className="homeContainer__productRandom__content__header__button__slach">
                    <button>|</button>
                  </div>
                  <div className="homeContainer__productRandom__content__header__button--next">
                    <button> {">"} </button>
                  </div>
                </div>
              </div>
              <div className="homeContainer__productRandom__content__list">
                <div className="homeContainer__productRandom__content__list__card">
                  <div className="homeContainer__productRandom__content__list__card__img">
                    <img src={PizzaRandom} alt="" />
                  </div>
                  <div className="homeContainer__productRandom__content__list__card__Info">
                    <div className="homeContainer__productRandom__content__list__card__info__name">
                      <h5>American</h5>
                    </div>
                    <div className="homeContainer__productRandom__content__list__card__Info__description">
                      <div className="homeContainer__productRandom__content__list__card__info__description__size">
                        <h6>Tamaño</h6>
                        <p>Pequeña</p>
                      </div>
                      <div className="homeContainer__productRandom__content__list__card__info__description__price">
                        <h6>Precio</h6>
                        <p> C$200</p>
                      </div>
                      <div className="homeContainer__productRandom__content__list__card__info__description__calories">
                        <h6>Calorias</h6>
                        <p>180gr</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="homeContainer__productRandom__content__list__border"></div>
                <div className="homeContainer__productRandom__content__list__card">
                  <div className="homeContainer__productRandom__content__list__card__img">
                    <img src={PizzaRandom} alt="" />
                  </div>
                  <div className="homeContainer__productRandom__content__list__card__Info">
                    <div className="homeContainer__productRandom__content__list__card__info__name">
                      <h5>American</h5>
                    </div>
                    <div className="homeContainer__productRandom__content__list__card__Info__description">
                      <div className="homeContainer__productRandom__content__list__card__info__description__size">
                        <h6>Tamaño</h6>
                        <p>Pequeña</p>
                      </div>
                      <div className="homeContainer__productRandom__content__list__card__info__description__price">
                        <h6>Precio</h6>
                        <p> C$200</p>
                      </div>
                      <div className="homeContainer__productRandom__content__list__card__info__description__calories">
                        <h6>Calorias</h6>
                        <p>180gr</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="homeContainer__productRandom__content__list__border"></div>
                <div className="homeContainer__productRandom__content__list__card">
                  <div className="homeContainer__productRandom__content__list__card__img">
                    <img src={PizzaRandom} alt="" />
                  </div>
                  <div className="homeContainer__productRandom__content__list__card__Info">
                    <div className="homeContainer__productRandom__content__list__card__info__name">
                      <h5>American</h5>
                    </div>
                    <div className="homeContainer__productRandom__content__list__card__Info__description">
                      <div className="homeContainer__productRandom__content__list__card__info__description__size">
                        <h6>Tamaño</h6>
                        <p>Pequeña</p>
                      </div>
                      <div className="homeContainer__productRandom__content__list__card__info__description__price">
                        <h6>Precio</h6>
                        <p> C$200</p>
                      </div>
                      <div className="homeContainer__productRandom__content__list__card__info__description__calories">
                        <h6>Calorias</h6>
                        <p>180gr</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderMenu}
    </Fragments>
  );
};
export default HomeView;
