import { useState } from 'react';
import { TextField, Button } from "@mui/material";
import emailjs from 'emailjs-com';
import CustomizedSnackbar from '../snackbar.component';
import { messages } from './messages';
import style from './contactForm.module.css';

export const ContactForm = () => {

    const [snackbar, setSnackbar] = useState({
        open:false,
        severity:'',
        message: '',
    })


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_6vns58g',
            'template_4nvv24p',
            e.target,
            'user_RYtXuv6D4I7c7LnKKsyzq')
            .then(res => {
                setSnackbar({
                    open:true,
                    severity:'success',
                    message: messages.success.defaultMessage,
                });
                console.log('res:', res)
            })
            .catch(error => {
                setSnackbar({
                    open:true,
                    severity:'error',
                    message: messages.error.defaultMessage,
                });
                console.log(error)
            });
    }
    return (
        <>
            <div className={style.form}>
                <form onSubmit={sendEmail}>
                    <TextField
                        required
                        name="name"
                        type="text"
                        label="Nombre"
                        variant="outlined"
                    />
                    <TextField
                        required
                        name="email"
                        type="email"
                        label="Email"
                        variant="outlined"
                    />
                    <TextField
                        required
                        name="message"
                        type="text"
                        label="Dejame tu consulta"
                        variant="outlined"
                        multiline
                        rows={7}
                    />
                    <div>
                        <Button type="submit" variant="contained" color="primary">
                            Enviar
                        </Button>
                    </div>
                </form>
            </div>
            <CustomizedSnackbar snackbar={snackbar} setSnackbar={setSnackbar}/>
        </>

    );
}
