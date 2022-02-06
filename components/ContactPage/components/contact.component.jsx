import ContactForm from "../../ContactForm";
import style from '../contact.module.css';
import SocialMedia from '../../footer.component/socialMedia';
import { Typography } from "@mui/material";
const ContactPage = () => {
  return (
    <div
      className={style.container}
    >
      <div className={style.socialMedia}>
        <Typography align="center" component='h1' variant='h5'>Seguime en las redes</Typography>
        <SocialMedia />
      </div>
      <Typography  gutterBottom mt={2} component='h2' variant='h4'>Contactame</Typography>
      <ContactForm />
    </div>
  )
}

export default ContactPage;