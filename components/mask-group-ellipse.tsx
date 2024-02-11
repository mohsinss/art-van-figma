import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./mask-group-ellipse.module.css";

export type MaskGroupEllipseType = {
  iconsArrow?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
};

const MaskGroupEllipse: NextPage<MaskGroupEllipseType> = ({
  iconsArrow,
  propBackgroundColor,
  propColor,
}) => {
  const ellipseDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const theRedVineyard1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.maskGroupEllipse}>
      <div className={styles.maskGroupEllipseChild} style={ellipseDiv1Style} />
      <div className={styles.theRedVineyard} style={theRedVineyard1Style}>
        The red Vineyard
      </div>
      <img
        className={styles.iconsarrow}
        loading="eager"
        alt=""
        src={iconsArrow}
      />
    </div>
  );
};

export default MaskGroupEllipse;
