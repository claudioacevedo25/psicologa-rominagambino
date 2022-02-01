import React from 'react';
import { Typography } from '@mui/material';
import { home } from '../../../constants/paragraphs';
import Card from '../../card.component';
import style from '../home.module.css';

const HomePage = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <Card className={style.card} />
        <div className={style.mainText}>
          <Typography >
            {`${home}`}
          </Typography>
        </div>

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