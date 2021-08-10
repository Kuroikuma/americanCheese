import React, { useState } from "react";
import OrderControlView from "./order-control.view";

const columnas = [
  { name: "Cantidad" },
  { name: "Orden" },
  { name: "Mesa" },
  { name: "Total" },
  { name: "Acciones" },
];

const filas = [
  {
    Cantidad: 1,
    Orden: "Pizza Hawaina",
    Mesa: 5,
    Total: 250,
  },
  {
    Cantidad: 2,
    Orden: "Frappé Chocolate",
    Mesa: 2,
    Total: 140,
  },
];

function OrderControl() {
  return <OrderControlView columnas={columnas} filas={filas} />;
}
export default OrderControl;
