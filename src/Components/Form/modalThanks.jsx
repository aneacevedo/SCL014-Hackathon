import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

export const modalThanks = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    return(
         <div>
            <Dialog>
            <MuiDialogTitle id="customized-dialog-title" onClose={handleClose}>
          ¡GRACIAS POR RESPONDER!
        </MuiDialogTitle>
        <MuiDialogContent>
            Recuerda que siempre pueder redefinir tu perfil, ingresando a "PERFIL" y luego "REDEFNIR".
        </MuiDialogContent>
        <MuiDialogActions>
        <Button onClick={handleClose}>
            Entendido
        </Button>
        </MuiDialogActions>
            </Dialog>
        </div>
      )
      
}
export default modalThanks;