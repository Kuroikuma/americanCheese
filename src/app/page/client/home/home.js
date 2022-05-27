import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import HomeView from "./home.view";
import Pizza from "../../../../assets/image/pizzaIcon.png";
import Calzone from "../../../../assets/image/calzonepng.png";
import Batido from "../../../../assets/image/batidopng.png";
import Frappe from "../../../../assets/image/frappepng.png";
import Hamburguesa from "../../../../assets/image/hamburguesapng.png";
import PizzaIcon from "../../../../assets/pizzaIcon.png";

const logoUrl = "https://localhost:44389/Content/images/logo.png";
const facebookUrl = "https://localhost:44389/Content/images/Facebook_Logo";
const instagramUrl = "https://localhost:44389/Content/images/Instagran_Logo";

const data = [];
const data2 = [];
const ProductPopular = [];
const ProductPopular2 = [];

data.push({
  img: Pizza,
  name: "pizza",
});
data.push({
  img: Calzone,
  name: "Calzone",
});
data.push({
  img: Batido,
  name: "batido",
});
data.push({
  img: Frappe,
  name: "Frappe",
});
data.push({
  img: Hamburguesa,
  name: "Hamburguesa",
});
data.push({
  img: Hamburguesa,
  name: "Hamburguesa",
});

data2.push({
  img: Pizza,
  name: "pizza",
});
data2.push({
  img: Calzone,
  name: "Calzone",
});
data2.push({
  img: Batido,
  name: "batido",
});
data2.push({
  img: Frappe,
  name: "Frappe",
});
data2.push({
  img: Hamburguesa,
  name: "Hamburguesa",
});

ProductPopular2.push({
  img: PizzaIcon,
  name: "Producto1",
});
ProductPopular2.push({
  img: PizzaIcon,
  name: "Producto2",
});
ProductPopular2.push({
  img: PizzaIcon,
  name: "Producto3",
});
ProductPopular2.push({
  img: PizzaIcon,
  name: "Producto4",
});
ProductPopular2.push({
  img: PizzaIcon,
  name: "Producto5",
});
ProductPopular.push({
  img: PizzaIcon,
  name: "Producto1",
});
ProductPopular.push({
  img: PizzaIcon,
  name: "Producto2",
});
ProductPopular.push({
  img: PizzaIcon,
  name: "Producto3",
});
ProductPopular.push({
  img: PizzaIcon,
  name: "Producto4",
});

function Home() {
  useEffect(() => {
    history.push("/");
  }, []);

  const userContext = useContext(UserContext);

  const history = useHistory();

  const logout = () => {
    userContext.SetCurrent(0);
    userContext.setUser({});
  };

  const handleLogin = (e) => {
    console.log(e.target.attributes.value);
    if (e.target.attributes.value !== undefined) {
      if (e.target.attributes.value.value === "Login") {
        history.push("/login");
      }
      if (e.target.attributes.value.value === "Logout") {
        logout();
      }
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [open, setOpen] = useState(false);
  return (
    <HomeView
      ProductPopular2={ProductPopular2}
      ProductPopular={ProductPopular}
      data2={data2}
      data={data}
      open={open}
      setOpen={setOpen}
      logout={logout}
      anchorEl={anchorEl}
      handleLogin={handleLogin}
      isMenuOpen={isMenuOpen}
      handleMenuClose={handleMenuClose}
      User={userContext.user}
      handleProfileMenuOpen={handleProfileMenuOpen}
    />
  );
}

export default Home;
