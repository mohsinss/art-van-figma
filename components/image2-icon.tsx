import type { NextPage } from "next";
import styles from "./image2-icon.module.css";

const Image2Icon: NextPage = () => {
  return (
    <img
      className={styles.image2Icon}
      loading="eager"
      alt=""
      src="/image2@2x.png"
    />
  );
};

export default Image2Icon;
