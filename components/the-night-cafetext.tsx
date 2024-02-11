import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./the-night-cafetext.module.css";

export type TheNightCafetextType = {
  /** Style props */
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propColor2?: CSSProperties["color"];
  propColor3?: CSSProperties["color"];
  propColor4?: CSSProperties["color"];
  propColor5?: CSSProperties["color"];
  propColor6?: CSSProperties["color"];
  propColor7?: CSSProperties["color"];
  propColor8?: CSSProperties["color"];
};

const TheNightCafetext: NextPage<TheNightCafetextType> = ({
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
  propColor5,
  propColor6,
  propColor7,
  propColor8,
}) => {
  const fieldStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const field1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const field2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const field3Style: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const field4Style: CSSProperties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const field5Style: CSSProperties = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  const field6Style: CSSProperties = useMemo(() => {
    return {
      color: propColor6,
    };
  }, [propColor6]);

  const field7Style: CSSProperties = useMemo(() => {
    return {
      color: propColor7,
    };
  }, [propColor7]);

  const theNightCafStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor8,
    };
  }, [propColor8]);

  return (
    <section className={styles.theNightCafetext}>
      <div className={styles.galleryImageFrame}>
        <div className={styles.information}>
          <div className={styles.data}>
            <div className={styles.field} style={fieldStyle}>
              year
            </div>
            <div className={styles.field1} style={field1Style}>
              1888
            </div>
          </div>
          <div className={styles.data1}>
            <div className={styles.field2} style={field2Style}>
              MEDIUM
            </div>
            <div className={styles.field3} style={field3Style}>
              Oil on canvas
            </div>
          </div>
          <div className={styles.data2}>
            <div className={styles.field4} style={field4Style}>
              LOCATION
            </div>
            <div className={styles.field5} style={field5Style}>
              AYale University Gallery
            </div>
          </div>
          <div className={styles.data3}>
            <div className={styles.field6} style={field6Style}>
              SIZE
            </div>
            <div className={styles.field7} style={field7Style}>
              28.5 in × 36.3 in
            </div>
          </div>
        </div>
        <div className={styles.theNightCaf} style={theNightCafStyle}>
          The Night Café (French: Le Café de nuit) is an oil painting created by
          Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is
          inscribed lower right beneath the signature. The painting is owned by
          Yale University and is currently held at the Yale University Art
          Gallery in New Haven, Connecticut.
        </div>
      </div>
    </section>
  );
};

export default TheNightCafetext;
