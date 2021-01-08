import React, { useState } from "react";
import "./Styles/ModalThanks.css";
import theme from "./Styles/tema";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import imgthks from "../../Img/entretencion.svg";
import MuiButton from "@material-ui/core/IconButton";
import { isWidthDown } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  // dialogClass:{
  //   paddingTop: 15
  // },
  dialogBtnsClass: {
    justifyContent: "center",
    paddingBottom: 80,
    paddingTop: 60,
  },
  customBtn: {
    backgroundColor: "#5C3ECA",
    borderRadius: 5,
    color: "#FFFFFF",
    fontSize: 14,
    textTransform: "none",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#D8D8D8",
  },
  texthanks: {
    textAlign: "left",
    fontSize: 14,
    width: 309,
    paddingBottom: 8,
  }
 
});

const ModalThanks = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <Dialog className="dialogClass" open={open}>
        <div className="imgdiv">
          <img className="imgThnks" alt="celeb" src={imgthks} />
        </div>

        <DialogContent>
          <h1 className="titleT">¡GRACIAS POR RESPONDER!</h1>

          <DialogContentText className={classes.texthanks}>
            Recuerda que siempre pueder redefinir tu perfil, ingresando a
            "PERFIL" y luego "REDEFINIR".
          </DialogContentText>
        </DialogContent>
        <MuiDialogActions className={classes.dialogBtnsClass}>
          <Link to="/">
            <MuiButton className={classes.customBtn}>Entendido</MuiButton>
          </Link>
        </MuiDialogActions>
      </Dialog>
    </ThemeProvider>
  );
};
export default ModalThanks;