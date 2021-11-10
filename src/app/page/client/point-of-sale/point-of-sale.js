import { React, useState, useEffect, useContext } from "react";
import pizza1 from "../../../../assets/image/MenuPizzas/menupizza1.jpg";
import UserContext from "../../../context/UserContext";
import PointOfSaleView from "./point-of-sale.view";
import { ServicesCategoryProduct } from "../../../../services/services-product";
import { postFactura } from "../../../../services/services-factura";

function PointOfSale() {
  const userContext = useContext(UserContext);

  const apiUrl = "https://localhost:44323/";
  const [Sale, setSale] = useState([]);
  const [band, setBand] = useState(false);
  const [detalle, setDetalle] = useState([]);
  const [data, setData] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [ID, setID] = useState("Pizza");
  const fechaD = new Date();
  const [total, setTotal] = useState(0);

  const factura = {
    ClienteID: userContext.user.clienteID
      ? userContext.user.clienteID
      : "invitado",
    EmpleadoID: "d4319550-9481-4632-bb4d-ae96f27646c5",
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

  const handlerOrder = () => {
    if (factura.ClienteID !== "invitado") {
      postFactura(factura);
    } else {
      setOpenAlert(true);
      console.log("Logueese amigo");
    }
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
      handlerOrder={handlerOrder}
      handlerClearCurrendOrder={handlerClearCurrendOrder}
      openAlert={openAlert}
      setOpenAlert={setOpenAlert}
      setSale={setSale}
      detalle={detalle}
      setDetalle={setDetalle}
      setTotal={setTotal}
      band={band}
      setBand={setBand}
    />
  );
}
export default PointOfSale;
