import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Styles/tema";
import "./Styles/modalWelcome.css";
import {makeStyles} from '@material-ui/core/styles';
import img from '../../Img/welcome.svg';
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  dialogClass:{
    paddingTop: 28
  },
  dialogBtnsClass:{
    justifyContent: 'center'
  },
  customBtn: {
    backgroundColor: '#5C3ECA',
    borderRadius: 5,
    color: '#FFFFFF',
    fontSize: 14,
    textTransform: 'none',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#D8D8D8'
  }
})

const ModalWelcome = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyle()
  return (
    <ThemeProvider theme={theme}>
      <Dialog 
      className={classes.dialogClass}
      open={open}>
        <div className="containerImgWelcome">
          <img className='imgWelcome' alt="people" src={img}/>
        </div>
        <DialogContent>
          <h1 className='title'>¡Hola Juana!</h1>
          <DialogContentText>
            Porque queremos conocerte mejor, te haremos unas simples preguntas,
            las que nos permitirán definir tu perfil, y así poder entregarte los
            mejores beneficios que se adapten a tus gustos y necesidades.
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.dialogBtnsClass}>
          <Link to="/">
            <Button className={classes.customBtn}
            onClick={handleClose}>Ahora no puedo</Button>
          </Link>
          <Link to="/form1">
          <Button className={classes.customBtn} onClick={handleClose}>Si, dale!</Button>
          </Link>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default ModalWelcome;
