import React, { useState } from "react";
import mas from "../../../../assets/image/mas.png";
import menos from "../../../../assets/image/menos.png";
const SaleItem = (props) => {
  const { image, title, cantidad, price } = props;

  return (
    <div className="saleItems__products">
      <img alt="" src={image} />
      <p>{title}</p>
      <p>x{cantidad}</p>
      <p>C${price}</p>
    </div>
  );
};

export default SaleItem;
