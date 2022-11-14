import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";
import Link from "next/link";
import style from "../footer.module.css";

const Address = () => {
  return (
    <div className={style.address}>
      <Link href={"https://goo.gl/maps/gC1BRVdCUqsaT55N8"}>
        <a target="_blank" className={style.address}>
          <LocationOnIcon />
          <Typography
            component={"p"}
          >{`La Rioja, Villa Carlos Paz - Córdoba`}</Typography>
        </a>
      </Link>
    </div>
  );
};

export default Address;
