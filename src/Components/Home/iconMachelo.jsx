import React, { useState, Fragment } from "react";
import ola from "../../Img/iconMachelo.png";
import "./Styles/iconMachelo.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import AvatarMachelo from "../../Img/machelobig.svg";
import AvatarPeque from "../../Img/machelopeq.svg";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "360px",
    height: "592px",
    backgroundColor: " #580CE5",
    borderRadius: "25px",
    boxShadow: theme.shadows[5],
  },
  equipo: {
    width: "227px",
    height: "148px",
    backgroundColor: " #FFFFFF",
    borderRadius: "15px",
    marginLeft: "45px",
    marginBottom: "37px",
    marginTop: "25px",
    padding: "20px",
  },
  writem: {
    width: "247px",
    height: "46px",
    backgroundColor: " #FFFFFF",
    borderRadius: "15px",
    marginLeft: "45px",
    marginBottom: "22px",
    fontFamily: "Nunito",
    color: "#BDBDBD",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "44px",
    paddingLeft: "20px",
  },
  enviarbtn: {
    width: "82px",
    height: "41px",
    backgroundColor: " #999999",
    border: "1px solid #999999",
    borderRadius: "5px",
    alignSelf: "center",
    fontSize: "14.5px",
    color: "#580CE5",
    fontWeight: "bold",
    marginLeft: "143px",
  },
  textitle: {
    fontFamily: "Nunito",
    color: "#333333",
    fontSize: "16px",
    fontWeight: "bold",
    paddingLeft: "5px",
  },
  textp: {
    fontFamily: "Nunito",
    color: "#333333",
    fontSize: "16px",
    fontWeight: "bold",
  },
  firstcont: {
    display: "flex",
  },
  dudas: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "20px",
    color: "#FFFFFF",
    paddingLeft: "22%",
    paddingTop: "3%",
  },
  btnback: {
    fontFamily: "Nunito",
    color: "#FFFFFF",
    fontSize: "20px",
    textDecoration: "none",
    backgroundColor: " #580CE5",
    borderStyle: "none",
    fontWeight: "bold",
    marginLeft: "14px",
    height: "30px",
    display: "flex",
    alignSelf: "center",
  },
  parrafoM: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "16px",
    color: "#FFFFFF",
    textAlign: "center",
    width: "266px",
    paddingLeft: "47px",
    marginTop: "5px",
  },
  macheloAv: {
    display: "flex",
  },
  macheloIcono: {
    display: "flex",
    justifyContent: "center",
  },
}));

const IconMachelo = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.firstcont}>
        <button className={classes.btnback}>{"<"}</button>
        <h2 className={classes.dudas} id="simple-modal-title">
          ¿Tienes dudas?
        </h2>
      </div>
      <div className={classes.macheloIcono}>
      <img src={AvatarMachelo} alt="Machelo" />
      </div>
      <p className={classes.parrafoM} id="simple-modal-description">
        En MACH te acompañamos todo el tiempo.
      </p>
      <div className={classes.equipo}>
        <div className={classes.macheloAv}>
      <img src={AvatarPeque} alt="Machelo" />
        <h3 className={classes.textitle}>MACHelo</h3>
        </div>
        <p className={classes.textp}>Hola Juana, ¿en qué te puedo ayudar?</p>
      </div>
      <div className={classes.writem}>Escribir mensaje</div>
      <button className={classes.enviarbtn}>Enviar</button>
    </div>
  );

  return (
    <Fragment>
      <div className="containerIconMachelo" onClick={handleOpen}>
        <img className="iconMachelito" src={ola} alt="icon" />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </Fragment>
  );
};

export default IconMachelo;
