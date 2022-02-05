import React, { useEffect } from 'react';
import Aos from "aos";
import { Typography } from '@mui/material';
import { atention, defaultMsn } from '../../../constants/paragraphs';
import style from '../atention.module.css';
import "aos/dist/aos.css";
const AtentionPage = () => {
  useEffect(() => {
    Aos.init({ duration: 800 })
  }, [])
  return (
    <div className={style.container}>

      <div className={style.content}>
        <div data-aos='fade-up-left' className={style.mainText}>
          <Typography >
            {`${atention.card1 || defaultMsn}`}
          </Typography>
        </div>
        <div data-aos='fade-up-right' className={style.mainText}>
          <ul className={style.items}>
            {
              atention.card2.map((item, index) => {
                return (
                  <li key={index}>
                    <Typography>
                      {item.item}
                    </Typography>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div data-aos='zoom-in-left' className={style.videoContainer}>
        <video className={style.video} autoPlay loop muted>
          <source src="video/psicoterapia5.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default AtentionPage;