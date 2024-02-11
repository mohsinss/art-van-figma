import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./f-r-a-m-e.module.css";

export type FRAMEType = {
  iconsArrow?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];

  /** Action props */
  onHeaderLeftContainerClick?: () => void;
};

const FRAME: NextPage<FRAMEType> = ({
  iconsArrow,
  propColor,
  propColor1,
  onHeaderLeftContainerClick,
}) => {
  const titleLeftStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const titleLeft1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className={styles.fRAME}>
      <div className={styles.fRAME1}>
        <div className={styles.headerLeft} onClick={onHeaderLeftContainerClick}>
          <img
            className={styles.iconsarrow}
            loading="eager"
            alt=""
            src={iconsArrow}
          />
          <div className={styles.titleLeft} style={titleLeftStyle}>
            home
          </div>
        </div>
        <div className={styles.titleLeft1} style={titleLeft1Style}>
          2. The night café
        </div>
      </div>
    </div>
  );
};

export default FRAME;
