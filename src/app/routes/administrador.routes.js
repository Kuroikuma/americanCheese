import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import image from "../../assets/image/logo.png";

const Inventory = lazy(() => import("../page/dependent/Inventory/inventory"));
const InventoryIngredents = lazy(() =>
  import("../page/dependent/Inventory-ingredents/inventory-ingredents")
);
const Sidebar = lazy(() =>
  import("../../app/components/sidebar-lateral/sidebar")
);
const SalesReport = lazy(() =>
  import("../page/dependent/sales-report/sales-report")
);
const divStyle = {
  height: "100vh",
  width: "90vw",
};
function AdminRoutes() {
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
          <Route exact path="/" component={Inventory} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/sales-report" component={SalesReport} />
          <Route exact path="/sidebar" component={Sidebar} />
          <Route
            exact
            path="/inventory-ingredents"
            component={InventoryIngredents}
          />
          <Route component={Inventory} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default AdminRoutes;
