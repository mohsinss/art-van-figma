import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./top1.module.css";

export type Top1Type = {
  iconsArrow?: string;
  iconsDarkLight?: string;
  iconsMenu?: string;

  /** Style props */
  frameDarkLightIconsMenuColor?: CSSProperties["color"];
  h1Color?: CSSProperties["color"];

  /** Action props */
  onHeaderLeftContainerClick?: () => void;
};

const Top1: NextPage<Top1Type> = ({
  iconsArrow,
  iconsDarkLight,
  iconsMenu,
  frameDarkLightIconsMenuColor,
  h1Color,
  onHeaderLeftContainerClick,
}) => {
  const titleLeft2Style: CSSProperties = useMemo(() => {
    return {
      color: frameDarkLightIconsMenuColor,
    };
  }, [frameDarkLightIconsMenuColor]);

  const titleLeft3Style: CSSProperties = useMemo(() => {
    return {
      color: h1Color,
    };
  }, [h1Color]);

  return (
    <section className={styles.top}>
      <img className={styles.heroImageIcon} alt="" src="/hero-image@2x.png" />
      <header className={styles.heroImageFrame}>
        <div className={styles.headerLeft} onClick={onHeaderLeftContainerClick}>
          <img
            className={styles.iconsarrow}
            loading="eager"
            alt=""
            src={iconsArrow}
          />
          <div className={styles.titleLeft} style={titleLeft2Style}>
            home
          </div>
        </div>
        <div className={styles.frameDarkLightIconsMenu}>
          <img
            className={styles.iconsdarkLight}
            loading="eager"
            alt=""
            src={iconsDarkLight}
          />
          <img
            className={styles.iconsmenu}
            loading="eager"
            alt=""
            src={iconsMenu}
          />
        </div>
      </header>
      <div className={styles.informationFieldContainer}>
        <div className={styles.titleLeftText}>
          <div className={styles.titleLeft1} style={titleLeft3Style}>
            1. The STARRY NIGHT
          </div>
          <h1 className={styles.h1}>
            The Starry Night is an oil on canvas painting by Dutch Post
            Impressionist painter van Gogh. Painted in June 1889.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Top1;
