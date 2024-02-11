import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component3.module.css";

export type FrameComponentType = {
  /** Style props */
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  propColor,
  propColor1,
}) => {
  const h11Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const paragraph3Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <section className={styles.lightInner}>
      <div className={styles.h1Parent}>
        <h1 className={styles.h1} style={h11Style}>
          Van Gogh painted several landscapes with flowers, roses, lilacs, and
          sunflowers.
        </h1>
        <h1 className={styles.paragraph} style={paragraph3Style}>
          Some reflect his interests in the language of colour, and also in
          Japanese ukiyo-e. There are two series of dying sunflowers. The first
          was painted in Paris in 1887 and shows flowers lying on the ground.
        </h1>
      </div>
    </section>
  );
};

export default FrameComponent;
