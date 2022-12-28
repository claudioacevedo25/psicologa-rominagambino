import React, { useEffect } from "react";
import Aos from "aos";
import { Typography } from "@mui/material";
import { myApproach, defaultMsn } from "../../../constants/paragraphs";
import style from "../myApproach.module.css";
import "aos/dist/aos.css";

const MyApproachPage = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div className={style.container}>
      <div data-aos="zoom-in-left" className={style.videoContainer}>
        <video className={style.video} autoPlay loop muted>
          <source src="video/psicoterapia3.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={style.content}>
        {myApproach.map((c, index) => {
          return (
            <div key={index} data-aos={c.fade} className={style.mainText}>
              <Typography>{`${c.content || defaultMsn}`}</Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyApproachPage;
