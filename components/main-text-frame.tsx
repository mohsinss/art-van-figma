import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./main-text-frame.module.css";

export type MainTextFrameType = {
  /** Style props */
  propColor?: CSSProperties["color"];
};

const MainTextFrame: NextPage<MainTextFrameType> = ({ propColor }) => {
  const paragraph2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <section className={styles.mainTextFrame}>
      <img
        className={styles.image4Icon}
        loading="eager"
        alt=""
        src="/image-41@2x.png"
      />
      <div className={styles.headerIconFrame}>
        <div className={styles.headerIconFrameChild} />
        <h2 className={styles.paragraph} style={paragraph2Style}>
          it depicts the view from the east-facing window of his asylum room at
          Saint Rémy de Provence, just before sunrise, with the addition of an
          imaginary village. It has been in the permanent collection of the
          Museum of Modern Art in New York City since 1941, acquired through the
          Lizzie Plummer Bliss Bequest.
        </h2>
      </div>
    </section>
  );
};

export default MainTextFrame;
