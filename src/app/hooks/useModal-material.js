import { useState } from "react";

export const useModal = (initialVaue = false) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return [open, handleClose, handleClickOpen];
};
