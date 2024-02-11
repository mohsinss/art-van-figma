import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  iconsDarkLight?: string;
  iconsMenu?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  iconsDarkLight,
  iconsMenu,
  propColor,
}) => {
  const h1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.h1Parent}>
      <h1 className={styles.h1} style={h1Style}>
        I have tried to express the terrible passions of humanity by means of
        red and purple
      </h1>
      <div className={styles.heroImageParent}>
        <img className={styles.heroImageIcon} alt="" src="/hero-image@2x.png" />
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
    </div>
  );
};

export default FrameComponent2;
