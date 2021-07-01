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

function DependentRoutes() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="logo">
            <img src={image} alt="" />
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/point-of-sale" component={PointOfSale} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/order-control" component={OrderControl} />
          <Route exact path="/sales-report" component={SalesReport} />
          <Route component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default DependentRoutes;
