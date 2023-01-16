import style from "../psychoData.module.css";
import { generateUrl } from "../../../helpers/utils";
import { FRAMES } from "../../../constants/urls";

const PsychoDataPage = () => {
  return (
    <div className={style.container}>
      {FRAMES.map(({ id }) => (
        <iframe key={id} src={generateUrl(id)} className={style.frame} />
      ))}
    </div>
  );
};

export default PsychoDataPage;
