import type { NextPage } from "next";
import styles from "./image1-icon.module.css";

const Image1Icon: NextPage = () => {
  return (
    <img
      className={styles.image1Icon}
      loading="eager"
      alt=""
      src="/image1@2x.png"
    />
  );
};

export default Image1Icon;
