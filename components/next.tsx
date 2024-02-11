import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./next.module.css";

export type NextType = {
  maskGroup?: string;
  iconsArrow?: string;
  theNightCaf?: string;

  /** Style props */
  propColor?: CSSProperties["color"];

  /** Action props */
  onNextContainerClick?: () => void;
};

const Next: NextPage<NextType> = ({
  maskGroup,
  iconsArrow,
  theNightCaf,
  propColor,
  onNextContainerClick,
}) => {
  const theNightCaf1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.next} onClick={onNextContainerClick}>
      <img className={styles.maskGroupIcon} alt="" src={maskGroup} />
      <img
        className={styles.iconsarrow}
        loading="eager"
        alt=""
        src={iconsArrow}
      />
      <div className={styles.theNightCaf} style={theNightCaf1Style}>
        {theNightCaf}
      </div>
    </div>
  );
};

export default Next;
