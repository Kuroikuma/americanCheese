import { React, useState } from "react";
import "./modal.style.css";

export const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <>
      <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal__container" onClick={handleModalContainerClick}>
          <div className="modal-change">
            <button onClick={closeModal}>X</button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};
