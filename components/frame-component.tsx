import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  iconsArrow?: string;
  iconsArrow1?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propColor1?: CSSProperties["color"];

  /** Action props */
  onPreviousContainerClick?: () => void;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  iconsArrow,
  iconsArrow1,
  propBackgroundColor,
  propColor,
  propBackgroundColor1,
  propColor1,
  onPreviousContainerClick,
}) => {
  const ellipsearrowStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const theSTARRYNIGHTStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const theRedVineyardStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className={styles.dataFieldInner}>
      <div className={styles.previousParent}>
        <div className={styles.previous} onClick={onPreviousContainerClick}>
          <div className={styles.ellipsearrow} style={ellipsearrowStyle} />
          <img
            className={styles.iconsarrow}
            loading="eager"
            alt=""
            src={iconsArrow}
          />
          <h2 className={styles.theStarryNight} style={theSTARRYNIGHTStyle}>
            The STARRY NIGHT
          </h2>
        </div>
        <div className={styles.previousellipse}>
          <div
            className={styles.previousellipseChild}
            style={ellipseDivStyle}
          />
          <h2 className={styles.theRedVineyard} style={theRedVineyardStyle}>
            The red Vineyard
          </h2>
          <img
            className={styles.iconsarrow1}
            loading="eager"
            alt=""
            src={iconsArrow1}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
