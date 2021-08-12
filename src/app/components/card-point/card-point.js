import { CardPointSaleView } from "./card-point.view";
import React, { useState, useEffect } from "react";
const CardPointSale = (props) => {
  const [band, setBand] = useState(false);
  const {
    nombre,
    ingrediente,
    precio,
    setSale,
    setDetalle,
    setTotal,
    imagen,
    productoID,
    Sale,
    detalle,
  } = props;
  const [cantidad, setCantidad] = useState(1);

  const apiUrl = "https://localhost:44323/";

  const handleFdetail = () => {
    if (band === false) {
      const sale = {
        ProductoID: productoID,
        title: nombre,
        cantidad,
        price: precio,
        image: `${apiUrl}${imagen}`,
      };
      setSale((prevSale) => [...prevSale, sale]);
      const Detalle = {
        ProductoID: productoID,
        CatidadProductosVendido: cantidad,
      };
      setDetalle((prevDetalle) => [...prevDetalle, Detalle]);
      setTotal((prevTotal) => prevTotal + parseInt(precio) * 1);
      setBand(true);
      console.log(sale);
    } else {
      setCantidad(cantidad + 1);
      console.log(cantidad);
      Sale.forEach((element) => {
        console.log(element);
        setTimeout(() => {
          if (element.title === nombre) {
            element.cantidad = cantidad + 1;
            setTotal((prevTotal) => prevTotal + parseInt(precio) * 1);
          }
        }, 400);
      });
      detalle.forEach((item) => {
        setTimeout(() => {
          if (item.ProductoID === productoID) {
            item.CatidadProductosVendido = cantidad + 1;
          }
        }, 400);
      });
    }

    console.log(cantidad);
  };
  return (
    <CardPointSaleView
      handleFdetail={handleFdetail}
      nombre={nombre}
      ingrediente={ingrediente}
      precio={precio}
      setSale={setSale}
      setDetalle={setDetalle}
      setTotal={setTotal}
      imagen={imagen}
    />
  );
};

export default CardPointSale;
