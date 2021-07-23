import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import image from "../../assets/image/logo.png";

const PointOfSale = lazy(() =>
  import("../page/dependent/point-of-sale/point-of-sale")
);
const Inventory = lazy(() => import("../page/dependent/Inventory/inventory"));
const Home = lazy(() => import("../page/client/home/home"));
const OrderControl = lazy(() =>
  import("../page/dependent/order-control/order-control")
);
const SalesReport = lazy(() =>
  import("../page/dependent/sales-report/sales-report")
);
const divStyle = {
  height: "100vh",
  width: "100vw",
};
function RootRoutes() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div style={divStyle} className="logo">
            <img src={image} alt="" />
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={SalesReport} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/sales-report" component={SalesReport} />
          <Route component={Inventory} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default RootRoutes;
