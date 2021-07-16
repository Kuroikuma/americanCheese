import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { DialogTitle, Typography, IconButton } from '@material-ui/core';
import {
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const dialogTitleStyles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: "#3e456a",
    color: "white"
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    fontSize: 17,
    color: "white"
  },
});

const StyledDialogTitle = withStyles(dialogTitleStyles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <DialogTitle id="form-dialog-title" disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes}/>
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});

const TitleTypography = withStyles({
  root: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"white"
  }
})(Typography);

const useAddCartStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    width: 400
  },
  timePicker: {
    '& .MuiPickersToolbar-toolbar': {
      backgroundColor: "#3e456a",
      height: '60px'
    },
    '& .MuiButton-textPrimary': {
      color: "#3e456a"
    },
    '& .MuiPickersClockPointer-pointer': {
      backgroundColor: "#3e456a"
    },
    '& .MuiPickersClock-pin': {
      backgroundColor: "#3e456a"
    },
    '& .MuiPickersClockPointer-thumb': {
      border: '14px solid #3e456a'
    },
    '& .MuiPickersClockPointer-noPoint': {
      backgroundColor: "#3e456a"
    },
    '& .MuiTypography-h2': {
      fontSize: 50
    },
    '& .MuiPickersTimePickerToolbar-ampmLabel': {
      fontSize: 15
    }
  }
}));

export { useAddCartStyles, StyledDialogTitle, TitleTypography };
