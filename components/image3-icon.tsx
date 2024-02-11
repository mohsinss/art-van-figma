import type { NextPage } from "next";
import styles from "./image3-icon.module.css";

const Image3Icon: NextPage = () => {
  return (
    <img
      className={styles.image3Icon}
      loading="eager"
      alt=""
      src="/image3@2x.png"
    />
  );
};

export default Image3Icon;
