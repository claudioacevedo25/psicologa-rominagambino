import { Typography } from '@mui/material';
import { home } from '../../../constants/paragraphs';
import style from '../home.module.css';
const HomePage = () => {
  return (
    <div className={style.container}>
      <div className={style.videoContainer}>
        <video className={style.video} autoPlay loop muted>
          <source src="video/psicoterapia1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={style.content}>
       <Typography>
       {`${home}`}
       </Typography>
      </div>
    </div>
  )
}

export default HomePage;