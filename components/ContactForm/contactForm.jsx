import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import emailjs from "emailjs-com";
import CustomizedSnackbar from "../snackbar.component";
import { messages } from "./messages";
import style from "./contactForm.module.css";

export const ContactForm = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_958b4jm",
        "template_rs5tuia",
        e.target,
        "2mTyEKhK6gfFjwJBu"
      )
      .then((res) => {
        setSnackbar({
          open: true,
          severity: "success",
          message: messages.success.defaultMessage,
        });
        console.log("res:", res);
      })
      .catch((error) => {
        setSnackbar({
          open: true,
          severity: "error",
          message: messages.error.defaultMessage,
        });
        console.log(error);
      });
    setIsLoading(false);
  };
  return (
    <>
      <div className={style.form}>
        <form onSubmit={sendEmail}>
          <TextField
            name="from_name"
            type="text"
            label="Nombre"
            variant="outlined"
          />
          <TextField
            name="user_email"
            type="email"
            label="Email"
            variant="outlined"
          />
          <TextField
            required
            name="contact_number"
            type="number"
            label="Teléfono (código de área + número) "
            variant="outlined"
          />
          <TextField
            name="message"
            type="text"
            label="Dejame tu consulta"
            variant="outlined"
            multiline
            rows={7}
          />
          <Typography sx={{ padding: "16px 0 8px 0 " }}>
            * campo requerido
          </Typography>

          <div>
            <Button
              type="submit"
              size="small"
              disabled={isLoading}
              variant="contained"
            >
              Enviar
            </Button>
          </div>
        </form>
      </div>
      <CustomizedSnackbar snackbar={snackbar} setSnackbar={setSnackbar} />
    </>
  );
};
