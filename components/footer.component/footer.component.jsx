import React from "react";
import SocialMedia from "./socialMedia";
import Address from "./address";
import { WhatsAppWidget } from "react-whatsapp-widget";
import styles from "./footer.module.css";
import "react-whatsapp-widget/dist/index.css";

import { Typography } from "@mui/material";

const Footer = () => {
  const emoji = "\uD83D\uDE00";
  return (
    <footer className={styles.container}>
      <Typography component={"p"}>
        {`Psicóloga Romina Gambino M.P "A" 13480`}{" "}
      </Typography>
      <Address />
      <WhatsAppWidget
        phoneNumber="+543516834180"
        companyName="Psicóloga Romina Gambino"
        replyTimeText="Normalmente responde en pocos minutos"
        message={`Hola ${emoji}, ¿cómo estás? Gracias por contactarme. Por favor dejame tu consulta y te voy a estar respondiendo lo antes posible.`}
        inputPlaceHolder="Escribe tu mensaje"
        sendButtonText="Enviar consulta"
      />
      <SocialMedia />
    </footer>
  );
};

export default Footer;
