import { Typography } from '@mui/material';
import {myApproach} from '../../../constants/paragraphs';
import style from '../myApproach.module.css';
const MyApproachPage = () => {
  return (
    <div className={style.container}>
      <div className={style.videoContainer}>
        <video className={style.video} autoPlay loop muted>
          <source src="video/psicoterapia3.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={style.content}>
       <Typography>
           {`${myApproach}`}
       </Typography>
      </div>
    </div>
  )
}

export default MyApproachPage;