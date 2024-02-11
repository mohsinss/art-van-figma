import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frametitleleft.module.css";

export type FrametitleleftType = {
  /** Style props */
  propColor?: CSSProperties["color"];
};

const Frametitleleft: NextPage<FrametitleleftType> = ({ propColor }) => {
  const paragraphStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.frametitleleft}>
      <div className={styles.framecontent}>
        <img
          className={styles.image1Icon}
          loading="eager"
          alt=""
          src="/image-1@2x.png"
        />
        <div className={styles.frametext}>
          <div className={styles.framesubimage}>
            <img
              className={styles.image2Icon}
              loading="eager"
              alt=""
              src="/image-2@2x.png"
            />
            <h2 className={styles.paragraph} style={paragraphStyle}>
              The interior depicted is the Café de la Gare, 30 Place Lamartine,
              run by Joseph Ginoux and his wife Marie, who in November 1888
              posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph
              Ginoux evidently posed for both artists.
            </h2>
          </div>
          <div className={styles.image3Wrapper}>
            <img
              className={styles.image3Icon}
              loading="eager"
              alt=""
              src="/image-3@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frametitleleft;
