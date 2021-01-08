import React, { useState } from "react";
import {
  ThemeProvider,
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import themeGeo from "../Form/ThemeGeo";
import amorypaz from "../../Img/amorypaz.svg";
import { Link } from "react-router-dom";
import "../Form/Styles/ModalAlmostFinish.css";

const useStyle = makeStyles({
  contentGeo: {
    borderRadius: 25,
  },
  dialogBtnsClass: {
    justifyContent: "center",
    paddingBottom: 60,
    paddingTop: 66,
  },
  btnGeo: {
    borderRadius: 5,
    color: "#FFFFFF",
    fontSize: 14,
    textTransform: "none",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#D8D8D8",
    fontWeight: 700,
  },
  type: {
    color: "#999999",
  },
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
    paddingTop: "1vh",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ModalAlmostFinish() {
  const classesGeo = useStyle();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={themeGeo}>
      <Dialog
        className={classesGeo.contentGeo}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="box-imgGeo">
          <img className="img-Love" alt="Love" src={amorypaz} />
        </div>
        <DialogContent>
          <h3 className="title-Geo">Ánimo Juana, ¡Estamos casi terminando!</h3>
          <Typography gutterBottom className={classesGeo.type}>
           Estamos por finalizar la definición de tu perfil, agradecemos la buena disposición que has tenido.
          </Typography>
        </DialogContent>
        <DialogActions className={classesGeo.dialogBtnsClass}>
          <Link to="/form5">
            <Button
              className={classesGeo.btnGeo}
              variant="contained"
              onClick={handleClose}
              color="primary"
            >
              Entendido :)
            </Button>
          </Link>
         
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

