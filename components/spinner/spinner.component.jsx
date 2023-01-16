import Image from "next/image";
import styles from "./spinner.module.css";

export const Spinner = () => {
  return (
    <div className={styles.container}>
      <Image src="/clock.gif" alt="spinner" width="100px" height="100px" />
    </div>
  );
};
