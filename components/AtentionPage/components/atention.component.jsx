import { Typography } from '@mui/material';
import { atention } from '../../../constants/paragraphs';
import style from '../atention.module.css';
const AtentionPage = () => {
  return (
    <div className={style.container}>
      <div className={style.videoContainer}>
        <video className={style.video} autoPlay loop muted>
          <source src="video/psicoterapia5.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={style.content}>
        <Typography>
          {`${atention}`}
        </Typography>
      </div>
    </div>
  )
}

export default AtentionPage;