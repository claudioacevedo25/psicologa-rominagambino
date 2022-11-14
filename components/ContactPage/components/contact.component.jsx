import { Typography } from "@mui/material";
import ContactForm from "../../ContactForm";
import SocialMedia from "../../footer.component/socialMedia";
import style from "../contact.module.css";
const ContactPage = () => {
  return (
    <div className={style.container}>
      <Typography gutterBottom mt={2} component="h2" variant="h4">
        Contactame
      </Typography>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
