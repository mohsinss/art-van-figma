import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  /** Style props */
  propColor?: CSSProperties["color"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ propColor }) => {
  const paragraph1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.paragraphParent}>
      <h2 className={styles.paragraph} style={paragraph1Style}>
        he Night Café (French: Le Café de nuit) is an oil painting created by
        Dutch artist Vincent van Gogh in September 1888 in Arles.[1] Its title
        is inscribed lower right beneath the signature. The painting is owned by
        Yale University and is currently held at the Yale University Art Gallery
        in New Haven, Connecticut.
      </h2>
      <div className={styles.image5Wrapper}>
        <img
          className={styles.image5Icon}
          loading="eager"
          alt=""
          src="/image-5@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
