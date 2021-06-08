import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function YesNoDialog({openDialog,title, description, yesText, noText, handleYes, handleNo}) {

  const handleClose = (isYes) => {
    if(isYes)
        handleYes();
    else
        handleNo();    
  }  

  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={() => handleClose(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=> handleClose(true)} color="primary">
            {yesText?yesText:"Si"}
          </Button>
          <Button onClick={()=> handleClose(false)} color="primary" autoFocus>
            {noText?noText:"No"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}