import type { NextPage } from "next";
import Image5Icon from "./image5-icon";
import Image6Icon from "./image6-icon";
import styles from "./footer-item-frame.module.css";

const FooterItemFrame: NextPage = () => {
  return (
    <div className={styles.footerItemFrame}>
      <div className={styles.rectangle}>
        <div className={styles.experienceFrame}>
          <Image5Icon />
          <div className={styles.yearFrame}>
            <div className={styles.number}>3</div>
            <div className={styles.artwork}>
              Ploughman in the Fields near Arles
            </div>
            <img className={styles.iconsarrow} alt="" src="/iconsarrow3.svg" />
          </div>
        </div>
        <div className={styles.footerFrame}>
          <Image6Icon />
        </div>
      </div>
      <div className={styles.headerRightIconsWrapper}>
        <div className={styles.headerRightIcons}>
          <div className={styles.number1}>4</div>
          <div className={styles.artwork1}>Paul Gauguin's Armchair</div>
          <img className={styles.iconsarrow1} alt="" src="/iconsarrow-53.svg" />
        </div>
      </div>
    </div>
  );
};

export default FooterItemFrame;
