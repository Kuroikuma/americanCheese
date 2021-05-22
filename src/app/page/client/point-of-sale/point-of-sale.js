import { React } from "react";
import pizza1 from "../../../../assets/image/MenuPizzas/menupizza1.jpg";
import PointOfSaleView from "./point-of-sale.view";

function PointOfSale() {
  const data = [];
  const sale = [];
  sale.push({
    title: "pizza de queso",
    amount: 2,
    price: 500,
    image: pizza1,
  });
  sale.push({
    title: "pizza de queso",
    amount: 2,
    price: 500,
    image: pizza1,
  });
  sale.push({
    title: "pizza de queso",
    amount: 2,
    price: 500,
    image: pizza1,
  });
  sale.push({
    title: "pizza de queso",
    amount: 2,
    price: 500,
    image: pizza1,
  });
  sale.push({
    title: "pizza de queso",
    amount: 2,
    price: 500,
    image: pizza1,
  });
  sale.push({
    title: "pizza de queso",
    amount: 2,
    price: 500,
    image: pizza1,
  });
  data.push({
    ingredients:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    title: "pizza de queso",
    price: 500,
    image: pizza1,
  });
  data.push({
    ingredients:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    title: "pizza de queso",
    price: 500,
    image: pizza1,
  });
  data.push({
    ingredients:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    title: "pizza de queso",
    price: 500,
    image: pizza1,
  });
  data.push({
    ingredients:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    title: "pizza de queso",
    price: 500,
    image: pizza1,
  });
  data.push({
    ingredients:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    title: "pizza de queso",
    price: 500,
    image: pizza1,
  });
  data.push({
    ingredients:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    title: "pizza de queso",
    price: 500,
    image: pizza1,
  });

  return <PointOfSaleView data={data} sale={sale} />;
}
export default PointOfSale;
