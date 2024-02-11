import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./prev-next-ellipse.module.css";

export type PrevNextEllipseType = {
  iconsArrow?: string;
  paulGauguinsArmchair?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propMargin?: CSSProperties["margin"];
  propColor?: CSSProperties["color"];

  /** Action props */
  onNextContainerClick?: () => void;
};

const PrevNextEllipse: NextPage<PrevNextEllipseType> = ({
  iconsArrow,
  paulGauguinsArmchair,
  propBackgroundColor,
  propMargin,
  propColor,
  onNextContainerClick,
}) => {
  const linkedinDividerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const paulGauguinsArmchairStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
      color: propColor,
    };
  }, [propMargin, propColor]);

  return (
    <div className={styles.prevNextEllipse} onClick={onNextContainerClick}>
      <div className={styles.linkedinDivider} style={linkedinDividerStyle} />
      <img
        className={styles.iconsarrow}
        loading="eager"
        alt=""
        src={iconsArrow}
      />
      <h2
        className={styles.paulGauguinsArmchair}
        style={paulGauguinsArmchairStyle}
      >
        {paulGauguinsArmchair}
      </h2>
    </div>
  );
};

export default PrevNextEllipse;
