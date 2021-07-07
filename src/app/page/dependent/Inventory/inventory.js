import { React } from "react";
import { useModal } from "../../../hooks/useModal";
import InventoryView from "./inventory.view";

export default function Inventory(params) {
  const [isOpen, openModal, closeModal] = useModal(false);
  const handlerProductDelete = (e) => {
    console.log(e.target.checked);
  };
  return (
    <InventoryView
      handlerProductDelete={handlerProductDelete}
      isOpen={isOpen}
      openModal={openModal}
      closeModal={closeModal}
    />
  );
}
