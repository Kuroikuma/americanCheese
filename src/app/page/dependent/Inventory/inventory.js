import { React,useEffect,useState } from "react";
import { useModal } from "../../../hooks/useModal";
import InventoryView from "./inventory.view";

export default function Inventory(params) {
  const [isOpen, openModal, closeModal] = useModal(false);
  const [ ID , setID ]=useState("Pizza");
  const [ Producto , setProducto ]=useState();
  useEffect(() => {
    ServicesCategoryProduct(ID).then((response) => setProducto(response));
  }, [ID]);
  const handlerProductDelete = (e) => {
    console.log(e.target.checked);
  };
  return (
    <InventoryView
      handlerProductDelete={handlerProductDelete}
      isOpen={isOpen}
      openModal={openModal}
      closeModal={closeModal}
      Producto={Producto}
    />
  );
}
