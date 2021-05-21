import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import image from "../../assets/image/logo.png";
//import Home from "../page/client/home/home";
const Customization = lazy(() =>
  import("../page/client/customization/customization")
);
//import Menu from "../page/client/menu/menu";
const MenuCombo = lazy(() =>
  import("../page/client/menu/menu-combo/menu-combo")
);
const MenuDrink = lazy(() =>
  import("../page/client/menu/menu-drink/menu-drink")
);
const MenuPizza = lazy(() =>
  import("../page/client/menu/menu-pizza/menupizza")
);
const MenuSmoothie = lazy(() =>
  import("../page/client/menu/menu-smoothie/menu-smoothie")
);
const Login = lazy(() => import("../page/shared/login/login"));
const Home = lazy(() => import("../page/client/home/home"));
const Menu = lazy(() => import("../page/client/menu/menu"));
const PointOfSale = lazy(() =>
  import("../page/client/point-of-sale/point-of-sale")
);
function ClientRoutes() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="logo">
            <img src={image} />
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/point-of-sale" component={PointOfSale} />
          <Route exact path="/customization" component={Customization} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/menu-combo" component={MenuCombo} />
          <Route exact path="/menu-drink" component={MenuDrink} />
          <Route exact path="/menu-pizza" component={MenuPizza} />
          <Route exact path="/menu-smoothie" component={MenuSmoothie} />
          <Route exact path="/login" component={Login} />
          <Route component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default ClientRoutes;
