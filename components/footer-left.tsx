import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./footer-left.module.css";

export type FooterLeftType = {
  /** Style props */
  instagramDividerBackgroundImage?: CSSProperties["backgroundImage"];
  companyColor?: CSSProperties["color"];
  positionColor?: CSSProperties["color"];
  yearColor?: CSSProperties["color"];
  companyColor1?: CSSProperties["color"];
  positionColor1?: CSSProperties["color"];
  yearColor1?: CSSProperties["color"];
  companyColor2?: CSSProperties["color"];
  positionColor2?: CSSProperties["color"];
  yearColor2?: CSSProperties["color"];
  companyColor3?: CSSProperties["color"];
  positionColor3?: CSSProperties["color"];
  yearColor3?: CSSProperties["color"];
  companyColor4?: CSSProperties["color"];
  positionColor4?: CSSProperties["color"];
  yearColor4?: CSSProperties["color"];
};

const FooterLeft: NextPage<FooterLeftType> = ({
  instagramDividerBackgroundImage,
  companyColor,
  positionColor,
  yearColor,
  companyColor1,
  positionColor1,
  yearColor1,
  companyColor2,
  positionColor2,
  yearColor2,
  companyColor3,
  positionColor3,
  yearColor3,
  companyColor4,
  positionColor4,
  yearColor4,
}) => {
  const instagramDividerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: instagramDividerBackgroundImage,
    };
  }, [instagramDividerBackgroundImage]);

  const companyStyle: CSSProperties = useMemo(() => {
    return {
      color: companyColor,
    };
  }, [companyColor]);

  const positionStyle: CSSProperties = useMemo(() => {
    return {
      color: positionColor,
    };
  }, [positionColor]);

  const yearStyle: CSSProperties = useMemo(() => {
    return {
      color: yearColor,
    };
  }, [yearColor]);

  const company1Style: CSSProperties = useMemo(() => {
    return {
      color: companyColor1,
    };
  }, [companyColor1]);

  const position1Style: CSSProperties = useMemo(() => {
    return {
      color: positionColor1,
    };
  }, [positionColor1]);

  const year1Style: CSSProperties = useMemo(() => {
    return {
      color: yearColor1,
    };
  }, [yearColor1]);

  const company2Style: CSSProperties = useMemo(() => {
    return {
      color: companyColor2,
    };
  }, [companyColor2]);

  const position2Style: CSSProperties = useMemo(() => {
    return {
      color: positionColor2,
    };
  }, [positionColor2]);

  const year2Style: CSSProperties = useMemo(() => {
    return {
      color: yearColor2,
    };
  }, [yearColor2]);

  const company3Style: CSSProperties = useMemo(() => {
    return {
      color: companyColor3,
    };
  }, [companyColor3]);

  const position3Style: CSSProperties = useMemo(() => {
    return {
      color: positionColor3,
    };
  }, [positionColor3]);

  const year3Style: CSSProperties = useMemo(() => {
    return {
      color: yearColor3,
    };
  }, [yearColor3]);

  const company4Style: CSSProperties = useMemo(() => {
    return {
      color: companyColor4,
    };
  }, [companyColor4]);

  const position4Style: CSSProperties = useMemo(() => {
    return {
      color: positionColor4,
    };
  }, [positionColor4]);

  const year4Style: CSSProperties = useMemo(() => {
    return {
      color: yearColor4,
    };
  }, [yearColor4]);

  return (
    <section className={styles.footerLeft}>
      <div className={styles.linkedinDivider}>
        <div className={styles.instagramDivider} style={instagramDividerStyle}>
          <img
            className={styles.instagramDividerChild}
            alt=""
            src="/rectangle-2@2x.png"
          />
          <img
            className={styles.upButtonIcon}
            loading="eager"
            alt=""
            src="/rectangle-3@2x.png"
          />
        </div>
        <div className={styles.experience}>
          <div className={styles.experience1}>
            <div className={styles.companyParent}>
              <h2 className={styles.company} style={companyStyle}>
                Nuenen and Antwerp
              </h2>
              <div className={styles.position} style={positionStyle}>
                painting intern
              </div>
            </div>
            <div className={styles.year} style={yearStyle}>
              1883
            </div>
          </div>
          <div className={styles.experience2}>
            <div className={styles.companyGroup}>
              <h2 className={styles.company1} style={company1Style}>
                PAris
              </h2>
              <div className={styles.position1} style={position1Style}>
                Junior Painter
              </div>
            </div>
            <div className={styles.year1} style={year1Style}>
              1886
            </div>
          </div>
          <div className={styles.experience3}>
            <div className={styles.companyContainer}>
              <h2 className={styles.company2} style={company2Style}>
                Gauguin's visit
              </h2>
              <div className={styles.position2} style={position2Style}>
                Experimental artist
              </div>
            </div>
            <div className={styles.year2} style={year2Style}>
              1888
            </div>
          </div>
          <div className={styles.experience4}>
            <div className={styles.frameDiv}>
              <h2 className={styles.company3} style={company3Style}>
                Saint-Rémy
              </h2>
              <div className={styles.position3} style={position3Style}>
                Senior Painter
              </div>
            </div>
            <div className={styles.year3} style={year3Style}>
              1889
            </div>
          </div>
          <div className={styles.experience5}>
            <div className={styles.companyParent1}>
              <h2 className={styles.company4} style={company4Style}>
                Auvers-sur-Oise
              </h2>
              <div className={styles.position4} style={position4Style}>
                painting studio manager
              </div>
            </div>
            <div className={styles.year4} style={year4Style}>
              1890
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterLeft;
