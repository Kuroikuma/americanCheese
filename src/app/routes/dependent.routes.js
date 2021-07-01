import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import image from "../../assets/image/logo.png";

const PointOfSale = lazy(() =>
  import("../page/dependent/point-of-sale/point-of-sale")
);
const Inventory = lazy(() => import("../page/dependent/Inventory/inventory"));
const Home = lazy(() => import("../page/client/home/home"));

function DependentRoutes() {
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
          <Route exact path="/inventory" component={Inventory} />
          <Route component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default DependentRoutes;
