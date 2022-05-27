import { React, useState, useEffect } from "react";
import { useModal } from "../../../hooks/useModal";
import InventoryIngredentsView from "./inventory-ingredents.view";
import { getIngredient } from "../../../../services/services-ingredient";
import FormAddIngredient from "../../../components/form-add-ingrediente/form-add-ingredients";

export default function InventoryIngredents(params) {
  const [isOpen, openModal, closeModal] = useModal(false);
  const [ID, setID] = useState(true);
  const [Ingrediente, setIngrediente] = useState([]);
  const [decreases, setDecreases] = useState(false);

  useEffect(() => {
    getIngredient().then((response) => setIngrediente(response));
  }, [ID]);

  return (
    <fragments>
      <InventoryIngredentsView
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
        Ingrediente={Ingrediente}
        setID={setID}
        ID={ID}
        setIngrediente={setIngrediente}
        decreases={decreases}
        setDecreases={setDecreases}
      />
    </fragments>
  );
}
