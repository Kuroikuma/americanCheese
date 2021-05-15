import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../page/client/home/home";
import Customization from "../page/client/customization/customization";
import Menu from "../page/client/menu/menu";
import MenuCombo from "../page/client/menu/menu-combo/menu-combo";
import MenuDrink from "../page/client/menu/menu-drink/menu-drink";
import MenuPizza from "../page/client/menu/menu-pizza/menupizza";

function IndexRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/customization" component={Customization} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/menucombo" component={MenuCombo} />
        <Route exact path="/menudrink" component={MenuDrink} />
        <Route exact path="/menupizza" component={MenuPizza} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default IndexRoutes;
