import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import image from "../../assets/image/logo.png";
import { Spinner } from "../components/spinner/spinner";

//import Home from "../page/client/home/home";
const Customization = lazy(() =>
  import("../page/client/customization/customization")
);
const Textfield = lazy(() => import("../components/textfield/texfield"));
//import Menu from "../page/client/menu/menu";
const MenuCombo = lazy(() =>
  import("../page/client/menu/menu-combo/menu-combo")
);
const MenuTaza = lazy(() =>
  import("../page/client/menu/menu-taza/menu-taza")
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
const Home = lazy(() => import("../page/client/home/home"));
const PointOfSale = lazy(() =>
  import("../page/client/point-of-sale/point-of-sale")
);
const divStyle = {
  height: "100vh",
  width: "100vw",
};
function ClientRoutes() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="logo">
            <img style={divStyle} src={image} alt="" />
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/point-of-sale" component={PointOfSale} />

          <Route exact path="/customization" component={Customization} />
          <Route exact path="/menu-Camisa" component={MenuCombo} />
          <Route exact path="/menu-Gorras" component={MenuDrink} />
          <Route exact path="/menu-Termo" component={MenuPizza} />
          <Route exact path="/menu-Baso" component={MenuSmoothie} />
          <Route exact path="/spinner" component={Spinner} />
          <Route exact path="/textfield" component={Textfield} />
          <Route exact path="/menu-Taza" component={MenuTaza} />
          <Route component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default ClientRoutes;
