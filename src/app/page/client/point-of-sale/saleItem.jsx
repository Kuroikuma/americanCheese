import { React, useContext } from "react";
import SaleItemContex from "../../../context/deleteSaleContext";
import mas from "../../../../assets/image/mas.png";
import menos from "../../../../assets/image/menos.png";
const SaleItem = (props) => {
  const saleItemContex = useContext(SaleItemContex);
  const {
    image,
    title,
    cantidad,
    price,
    setSale,
    setDetalle,
    setTotal,
    Sale,
    detalle,
    productoID,
  } = props;
  const HandleDeleteSaleItem = () => {
    saleItemContex.setDeleteSaleItem(title);
    setSale(Sale.filter((item) => item.title !== title));
    setDetalle(detalle.filter((item) => item.ProductoID !== productoID));
    setTotal((prevTotal) => prevTotal - price * cantidad);
  };
  return (
    <div className="saleItems__products">
      <img alt="" src={image} />
      <p>{title}</p>
      <p>x{cantidad}</p>
      <p>C${price}</p>
      <p className="SaleDelete" onClick={HandleDeleteSaleItem}>
        X
      </p>
    </div>
  );
};

export default SaleItem;
