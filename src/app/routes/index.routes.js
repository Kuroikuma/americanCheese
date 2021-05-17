import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../page/client/home/home";
import Customization from "../page/client/customization/customization";
import Menu from "../page/client/menu/menu";
import MenuCombo from "../page/client/menu/menu-combo/menu-combo";
import MenuDrink from "../page/client/menu/menu-drink/menu-drink";
import MenuPizza from "../page/client/menu/menu-pizza/menupizza";
import MenuSmoothie from "../page/client/menu/menu-smoothie/menu-smoothie";
import PointOfSale from "../page/dependent/point-of-sale/point-of-sale";
import Login from "../page/shared/login/login";
function IndexRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/customization" component={Customization} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/menu-combo" component={MenuCombo} />
        <Route exact path="/menu-drink" component={MenuDrink} />
        <Route exact path="/menu-pizza" component={MenuPizza} />
        <Route exact path="/menu-smoothie" component={MenuSmoothie} />
        <Route exact path="/point-of-sale" component={PointOfSale} />
        <Route exact path="/login" component={Login} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default IndexRoutes;
