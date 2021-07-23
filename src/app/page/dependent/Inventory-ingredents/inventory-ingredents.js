import { React, useState, useEffect } from "react";
import { useModal } from "../../../hooks/useModal";
import InventoryIngredentsView from "./inventory-ingredents.view";
import { getIngredient } from "../../../../services/services-ingredient";

export default function InventoryIngredents(params) {
  const [isOpen, openModal, closeModal] = useModal(false);
  const [ID, setID] = useState(true);
  const [Ingrediente, setIngrediente] = useState([]);

  useEffect(() => {
    getIngredient().then((response) => setIngrediente(response));
  }, [ID]);

  return (
    <>
      <InventoryIngredentsView
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
        Ingrediente={Ingrediente}
        setID={setID}
      />
    </>
  );
}
