import { CardPointSaleView } from "./card-point.view";
import { React, useState, useEffect, useContext } from "react";
import SaleItemContex from "../../context/deleteSaleContext";
const CardPointSale = (props) => {
  const saleItemContex = useContext(SaleItemContex);
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
  useEffect(() => {
    if (Object.keys(Sale).length === 0) {
      console.log("dsd");
      setCantidad(1);
      setBand(false);
    }
  }, [Sale]);

  useEffect(() => {
    if (nombre === saleItemContex.deleteSaleItem) {
      setCantidad(1);
      setBand(false);
      saleItemContex.setDeleteSaleItem("");
    }
  }, [saleItemContex.deleteSaleItem, nombre]);

  const handleFdetail = () => {
    /*if (Object.keys(Sale).length === 0) {
      console.log("dsd");
      setCantidad(1);
      setBand(false);
    }*/

    setTimeout(() => {
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
      } else {
        setCantidad(cantidad + 1);

        Sale.forEach((element) => {
          setTimeout(() => {
            if (element.title === nombre) {
              element.cantidad = cantidad + 1;
              setTotal((prevTotal) => prevTotal + parseInt(precio) * 1);
            }
          }, 100);
        });
        detalle.forEach((item) => {
          setTimeout(() => {
            if (item.ProductoID === productoID) {
              item.CatidadProductosVendido = cantidad + 1;
            }
          }, 100);
        });
      }
    }, 100);

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
