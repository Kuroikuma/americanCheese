import { useState } from "react";

export const useModal = (initialVaue = false) => {
  const [isOpen, setIsOpen] = useState(initialVaue);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return [isOpen, openModal, closeModal];
};
