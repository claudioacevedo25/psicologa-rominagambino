import React, { useEffect } from 'react';
import Aos from "aos";
import { Typography } from '@mui/material';
import { home } from '../../../constants/paragraphs';
import Card from '../../card.component';
import style from '../home.module.css';
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div data-aos ='fade-down'  className={style.mainCard}>
          <Card className={style.card} />
        </div>
        <div data-aos ='fade-right' className={style.mainText}>
          <Typography >
            {`${home}`}
          </Typography>
        </div>

      </div>

      <div data-aos ='fade-left' className={style.videoContainer}>
        <video className={style.video} autoPlay loop muted>
          <source src="video/psicoterapia1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default HomePage;