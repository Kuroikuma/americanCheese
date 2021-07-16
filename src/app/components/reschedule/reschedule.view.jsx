import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button
} from '@material-ui/core';
import { useAddCartStyles, StyledDialogTitle, TitleTypography } from './reschedule.styles';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';

const RescheduleView = (props) => {
  const classes= useAddCartStyles();
  const {
    open,
    handleClose,
    date,
    time,
    isLoading,
    handleTimeChange,
    handleDateChange,
    handleSubmit
  } = props;

  return(
    <div>
      <Dialog onClose={handleClose} open={open}>
        <StyledDialogTitle onClose={handleClose}>
          <TitleTypography>
            Reprogramar cita
          </TitleTypography>
        </StyledDialogTitle>
        <DialogContent className={classes.content}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              id="date-picker-inline"
              name="date"
              inputVariant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              format="dd/MM/yyyy"
              margin="normal"
              label="Fecha"
              cancelLabel="Cancelar"
              value={date}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              inputVariant="outlined"
              margin="normal"
              id="time-picker"
              label="Hora"
              name="time"
              value={time}
              cancelLabel="Cancelar"
              DialogProps={{ className: classes.timePicker }}
              onChange={handleTimeChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </MuiPickersUtilsProvider>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleSubmit}
            style={{backgroundColor: "#3e456a", color: "white"}}
          >
            {
              isLoading
              ?
              "Guardando..."
              :
              "Guadar"
            }
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RescheduleView;
