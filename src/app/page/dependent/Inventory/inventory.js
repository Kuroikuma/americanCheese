import { React } from "react";
import { useModal } from "../../../hooks/useModal";
import InventoryView from "./inventory.view";

export default function Inventory(params) {
  const [isOpen, openModal, closeModal] = useModal(false);
  return (
    <InventoryView
      isOpen={isOpen}
      openModal={openModal}
      closeModal={closeModal}
    />
  );
}
