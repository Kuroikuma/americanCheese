import { React, useState, useEffect } from "react";
import pizza1 from "../../../../assets/image/MenuPizzas/menupizza1.jpg";
import PointOfSaleView from "./point-of-sale.view";
import {ServicesCategoryProduct} from "../../../../services/services-product";

function PointOfSale() {
  const ImageUrl = process.env.REACT_APP_URL_IMAGE || "https://localhost:44389";
  const [Sale, setSale] = useState([]);

  const [data, setData] = useState([]);
  const [ID, setID] = useState("Pizza");
  const handleID = (e) => {
    console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "Pizza":
        setID("Pizza");
        break;
      case "Bebida":
        setID("Bebida");
        break;
      default:
    }
  };
  const handleFdetail = (data) => {
    const sale = {
      title: data.producto,
      amount: 2,
      price: data.precio,
      image: ImageUrl + data.imagen,
    };
    console.log(sale);
    setSale((prevSale) => [...prevSale, sale]);
    console.log(Sale);
  };

  useEffect(() => {
    ServicesCategoryProduct(ID).then((response) => setData(response));
  }, [ID, Sale]);
  console.log(data);
  console.log(ID);
  return (
    <PointOfSaleView
      data={data}
      Sale={Sale}
      handleID={handleID}
      setID={setID}
      handleFdetail={handleFdetail}
    />
  );
}
export default PointOfSale;
