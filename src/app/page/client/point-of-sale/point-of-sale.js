import { React } from "react";
import pizza1 from "../../../../assets/image/MenuPizzas/menupizza1.jpg";
import PointOfSaleView from "./point-of-sale.view";

function PointOfSale() {
  const data = [];

  data.push({
    ingredients:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    title: "pizza de queso",
    precio: 500,
    image: pizza1,
  });
  data.push({
    ingredients:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    title: "pizza de queso",
    precio: 500,
    image: pizza1,
  });
  data.push({
    ingredients:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    title: "pizza de queso",
    precio: 500,
    image: pizza1,
  });
  data.push({
    ingredients:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    title: "pizza de queso",
    precio: 500,
    image: pizza1,
  });
  data.push({
    ingredients:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    title: "pizza de queso",
    precio: 500,
    image: pizza1,
  });
  data.push({
    ingredients:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    title: "pizza de queso",
    precio: 500,
    image: pizza1,
  });
  return <PointOfSaleView data={data} />;
}
export default PointOfSale;
