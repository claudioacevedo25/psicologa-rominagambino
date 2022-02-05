import { Typography } from '@mui/material';
import {whoIam} from '../../../constants/paragraphs';
import style from '../myProfile.module.css';
const MyProfilePage = () => {
  return (
    <div className={style.container}>
      <div className={style.videoContainer}>
        <video className={style.video} autoPlay loop muted>
          <source src="video/cuando.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={style.content}>
       <Typography>
           {`${whoIam}`}
       </Typography>
      </div>
    </div>
  )
}

export default MyProfilePage;