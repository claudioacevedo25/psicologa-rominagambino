import React, {useState} from 'react';
import { Typography } from '@mui/material';
import { home } from '../../../constants/paragraphs';
import Card from '../../card.component';
import Modal from '../../modal.component';
import style from '../home.module.css';

const HomePage = () => {
  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className={style.container}>
      <div className={style.content}>
        <Card className={style.card} openModal={handleOpen}/>
        <Modal open={open} handleClose={handleClose}/>
        <Typography className={style.mainText}>
          {`${home}`}
        </Typography>
      </div>
      <div className={style.videoContainer}>
        <video className={style.video} autoPlay loop muted>
          <source src="video/psicoterapia1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default HomePage;