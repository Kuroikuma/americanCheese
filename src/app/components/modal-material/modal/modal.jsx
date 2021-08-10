import React, { forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  DialogContainer: {
    width: "600px",
  },
  paperWidthMd: {
    Width: "600px",
  },
}));

export const Modal = ({ children, titulo, open, handleClose }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      ClassName={classes.DialogContainer}
    >
      <DialogTitle id="alert-dialog-slide-title">{titulo}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
