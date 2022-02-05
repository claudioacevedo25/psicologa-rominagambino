import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import Aos from "aos";
import {whoIam} from '../../../constants/paragraphs';
import style from '../myProfile.module.css';
import "aos/dist/aos.css";
const MyProfilePage = () => {
  useEffect(()=>{
    Aos.init({duration:800})
  },[])
  return (
    <div className={style.container}>
      <div className={style.content}>
      <div data-aos ='fade-up-left' className={style.mainText}>
          <Typography >
            {`${whoIam.card1 || defaultMsn}`}
          </Typography>
        </div>
        <div data-aos ='fade-up-right' className={style.mainText}>
          <Typography >
            {`${whoIam.card2 || defaultMsn}`}
          </Typography>
        </div>

      </div>
      <div data-aos='zoom-in-left' className={style.videoContainer}>
        <video className={style.video} autoPlay loop muted>
          <source src="video/cuando.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default MyProfilePage;