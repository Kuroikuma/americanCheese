import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import image from "../../assets/image/logo.png";

const PointOfSale = lazy(() =>
  import("../page/dependent/point-of-sale/point-of-sale")
);
const OrderControl = lazy(() =>
  import("../page/dependent/order-control/order-control")
);

const divStyle = {
  height: "100vh",
  width: "100vw",
};
function DependentRoutes() {
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
          <Route exact path="/" component={PointOfSale} />
          <Route exact path="/point-of-sale" component={PointOfSale} />
          <Route exact path="/order-control" component={OrderControl} />
          <Route component={PointOfSale} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default DependentRoutes;
