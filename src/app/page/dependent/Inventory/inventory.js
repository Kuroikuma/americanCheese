import { React, useEffect, useState } from "react";
import { useModal } from "../../../hooks/useModal";
import { ServicesCategoryProduct } from "../../../../services/services-product";
import InventoryView from "./inventory.view";
import { Spinner } from "../../../components/spinner/spinner";

export default function Inventory(params) {
  const [isOpen, openModal, closeModal] = useModal(false);

  const [ID, setID] = useState("Pizza");
  const [isLoading, setIsLoading] = useState(false);
  const [Producto, setProducto] = useState([]);

  console.log(Producto);
  useEffect(() => {
    setIsLoading(true);
    ServicesCategoryProduct(ID).then(
      (response) => setProducto(response),
      setIsLoading(false)
    );
  }, [ID]);
  const handlerProductDelete = (e) => {
    console.log(e.target.checked);
  };

  if (isLoading) return <Spinner />;
  return (
    <>
      <InventoryView
        handlerProductDelete={handlerProductDelete}
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
        Producto={Producto}
      />
    </>
  );
}
