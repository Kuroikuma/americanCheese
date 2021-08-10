import { React, useState, useEffect } from "react";
import menu from "../../../../assets/image/menu.png";
import perfil from "../../../../assets/image/Perfil.jpg";
import PointOfSaleView from "./point-of-sale.view";
import { useModal } from "../../../hooks/useModal-material";
import { selecProductoPorNombre } from "../../../../services/services-product";
import { postFactura } from "../../../../services/services-factura";

function PointOfSale() {
  const ImageUrl = process.env.REACT_APP_URL_IMAGE || "https://localhost:44389";
  const [open, handleClose, handleClickOpen] = useModal(false);
  const [Sale, setSale] = useState([]);
  const [detalle, setDetalle] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [Producto, setProducto] = useState("");
  const [monto, setMonto] = useState(0);
  const fechaD = new Date();

  const factura = {
    ClienteID: "ca7af854-0538-4188-8845-0b84e497b1ca",
    EmpleadoID: "d82874a1-4476-4919-917d-c6eec25a0217",
    Fecha: `${fechaD.getFullYear()}-0${
      parseInt(fechaD.getMonth()) + 1
    }-0${fechaD.getDate()}`,
    facturaDetallesNav: detalle,
  };
  //para hacer el seleccionar por nombre de producto
  const handleCantidad = (e) => {
    setCantidad(parseInt(e.target.value));
  };
  const handleProducto = (e) => {
    setProducto(e.target.value);
  };

  const handleFdetail = (e) => {
    const Detalle = {
      ProductoID: data.productoID,
      CatidadProductosVendido: cantidad,
    };

    setTotal(
      (prevTotal) => parseInt(prevTotal) + parseInt(data.precio) * cantidad
    );
    setDetalle((prevDetalle) => [...prevDetalle, Detalle]);
    const sale = {
      Producto: data.nombre,
      cantidad: cantidad,
      code: data.productoID,
      price: data.precio,
      total: monto,
      image: ImageUrl + data.imagen,
    };

    setSale((prevSale) => [...prevSale, sale]);
  };

  useEffect(() => {
    setMonto(data.precio * cantidad);
  }, [cantidad]);

  const handlerOrder = () => {
    postFactura(factura);
  };
  const handlerClearCurrendOrder = () => {
    setSale([]);
    setDetalle([]);
    // setTotal(0);
  };

  useEffect(() => {
    selecProductoPorNombre(Producto).then((response) =>
      response ? setData(response) : null
    );
  }, [Producto, Sale]);

  return (
    <PointOfSaleView
      menu={menu}
      perfil={perfil}
      data={data}
      Sale={Sale}
      total={total}
      open={open}
      handleClose={handleClose}
      handleClickOpen={handleClickOpen}
      setProducto={setProducto}
      handleFdetail={handleFdetail}
      handlerOrder={handlerOrder}
      handleProducto={handleProducto}
      handleCantidad={handleCantidad}
      handlerClearCurrendOrder={handlerClearCurrendOrder}
    />
  );
}
export default PointOfSale;
