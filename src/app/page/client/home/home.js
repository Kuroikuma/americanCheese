import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import HomeView from "./home.view";
import BasoCervecero from "../../../../assets/eros/baso-cervecero.png";
import Camisa from "../../../../assets/eros/camisa.png";
import Gorras from "../../../../assets/eros/Gorras-trucker-para-sublimación.png";
import Taza from "../../../../assets/eros/taza.png";
import Termo from "../../../../assets/eros/termo.png";
import PizzaIcon from "../../../../assets/pizzaIcon.png";


const data = [];
const data2 = [];
const ProductPopular = [];
const ProductPopular2 = [];

data.push({
  img: BasoCervecero,
  name: "Baso",
});
data.push({
  img: Camisa,
  name: "Camisa",
});
data.push({
  img: Gorras,
  name: "Gorras",
});
data.push({
  img: Taza,
  name: "Taza",
});
data.push({
  img: Termo,
  name: "Termo",
});


ProductPopular.push({
  img: Termo,
  name: "Producto1",
});
ProductPopular.push({
  img: Gorras,
  name: "Producto2",
});
ProductPopular.push({
  img: BasoCervecero,
  name: "Producto3",
});
ProductPopular.push({
  img: Taza,
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
