import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Questions = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      padding: "15 20px",
    },
    heading: {
      fontSize: theme.typography.pxToRem(18),
      fontWeight: theme.typography.fontWeightBold,
      fontFamily: "Nunito",
      color: "#580CE5",
    },
    content: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: "300",
      fontFamily: "Nunito",
      color: "#333333",
    },
  }));

  const classes = useStyles();

  return (
    <div className="questions-container">
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              - ¿Quiénes pueden participar en MACH Points?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.content}>
              No hacemos distinciones de ningún tipo: para acceder a nuestras
              alianzas y beneficios, solo debes ser un MACHLover que tenga su
              app instalada o su tarjeta física. Así de simple. Debes saber que
              muchas veces para activarlos, tendrás que hacerlo desde la App 👍
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              - ¿Cómo se usan los beneficios?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.content}>
              ¡De muchas maneras! Algunas veces tendrás que ingresar un cupón de
              descuento, otras veces se activará automáticamente al pagar con tu
              tarjeta. Cada uno de los beneficios tendrá detallada la
              información de condiciones y forma de activación.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              - ¿Qué hago si un beneficio no funciona?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.content}>
              Siempre trataremos de estar actualizando nuestros beneficios, pero
              algunos pueden tener fecha de vencimiento. En el detalle de cada
              beneficio, siempre podrás encontrar su vigencia. Pero ojo, si el
              beneficio está activo y no funciona, debes contactarte
              directamente con el proveedor del servicio.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              - ¿Cómo obtengo puntos?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.content}>
              ¡Mediante nuestras misiones! Tenemos 2 tipos de misiones: Las
              permanentes, que estarán constantemente activas, hasta que las
              realices, y otras que tienen un tiempo de caducidad (algunas duran
              todo el mes, otras solo horas, y se asignan segun tu perfil).
              Ambas te entregarán puntajes.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Questions;
