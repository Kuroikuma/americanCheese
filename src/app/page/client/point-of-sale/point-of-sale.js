import { React, useState, useEffect } from "react";
import pizza1 from "../../../../assets/image/MenuPizzas/menupizza1.jpg";
import PointOfSaleView from "./point-of-sale.view";
import { ServicesCategoryProduct } from "../../../../services/services-product";
import { postFactura } from "../../../../services/services-factura";

function PointOfSale() {
  const ImageUrl = process.env.REACT_APP_URL_IMAGE || "https://localhost:44389";
  const [Sale, setSale] = useState([]);
  const [detalle, setDetalle] = useState([]);
  const [data, setData] = useState([]);
  const [ID, setID] = useState("Pizza");
  const fechaD = new Date();
  const [total, setTotal] = useState(0);

  const factura = {
    ClienteID: "ca7af854-0538-4188-8845-0b84e497b1ca",
    EmpleadoID: "D82874A1-4476-4919-917D-C6EEC25A0217",
    Fecha: `${fechaD.getFullYear()}-0${
      parseInt(fechaD.getMonth()) + 1
    }-${fechaD.getDate()}`,
    facturaDetallesNav: detalle,
  };
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
  console.log(Sale);
  const handleFdetail = (data) => {
    const sale = {
      title: data.producto,
      amount: 2,
      price: data.precio,
      image: ImageUrl + data.imagen,
    };
    setSale((prevSale) => [...prevSale, sale]);

    const Detalle = {
      ProductoID: data.productoID,
      CatidadProductosVendido: 2,
    };
    setDetalle((prevDetalle) => [...prevDetalle, Detalle]);
    setTotal((prevTotal) => [parseInt(prevTotal) + parseInt(data.precio) * 2]);
  };
  const handlerOrder = () => {
    postFactura(factura);
  };
  const handlerClearCurrendOrder = () => {
    setSale([]);
    setDetalle([]);
    setTotal(0);
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
      total={total}
      setID={setID}
      handleFdetail={handleFdetail}
      handlerOrder={handlerOrder}
      handlerClearCurrendOrder={handlerClearCurrendOrder}
    />
  );
}
export default PointOfSale;
