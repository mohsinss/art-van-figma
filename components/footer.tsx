import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./footer.module.css";

export type FooterType = {
  dimensionCode?: string;
  dimensionCodeText?: string;
  dimensionCodeImage?: string;
  dimensionCodeImageUrl?: string;
  dimensionCodeText2?: string;
  dimensionCodeImageText?: string;

  /** Style props */
  footerWidth?: CSSProperties["width"];
  footerFlex?: CSSProperties["flex"];
  vangoghcomColor?: CSSProperties["color"];
  linkedinColor?: CSSProperties["color"];
  dividerBackgroundColor?: CSSProperties["backgroundColor"];
  dribbbleColor?: CSSProperties["color"];
  dividerBackgroundColor1?: CSSProperties["backgroundColor"];
  myspaceColor?: CSSProperties["color"];
  dividerBackgroundColor2?: CSSProperties["backgroundColor"];
  gITHUBColor?: CSSProperties["color"];
  dividerBackgroundColor3?: CSSProperties["backgroundColor"];
  instagramColor?: CSSProperties["color"];
};

const Footer: NextPage<FooterType> = ({
  dimensionCode,
  dimensionCodeText,
  dimensionCodeImage,
  dimensionCodeImageUrl,
  dimensionCodeText2,
  dimensionCodeImageText,
  footerWidth,
  footerFlex,
  vangoghcomColor,
  linkedinColor,
  dividerBackgroundColor,
  dribbbleColor,
  dividerBackgroundColor1,
  myspaceColor,
  dividerBackgroundColor2,
  gITHUBColor,
  dividerBackgroundColor3,
  instagramColor,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      width: footerWidth,
      flex: footerFlex,
    };
  }, [footerWidth, footerFlex]);

  const vangoghcomStyle: CSSProperties = useMemo(() => {
    return {
      color: vangoghcomColor,
    };
  }, [vangoghcomColor]);

  const linkedinStyle: CSSProperties = useMemo(() => {
    return {
      color: linkedinColor,
    };
  }, [linkedinColor]);

  const dividerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: dividerBackgroundColor,
    };
  }, [dividerBackgroundColor]);

  const dribbbleStyle: CSSProperties = useMemo(() => {
    return {
      color: dribbbleColor,
    };
  }, [dribbbleColor]);

  const divider1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: dividerBackgroundColor1,
    };
  }, [dividerBackgroundColor1]);

  const myspaceStyle: CSSProperties = useMemo(() => {
    return {
      color: myspaceColor,
    };
  }, [myspaceColor]);

  const divider2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: dividerBackgroundColor2,
    };
  }, [dividerBackgroundColor2]);

  const gITHUBStyle: CSSProperties = useMemo(() => {
    return {
      color: gITHUBColor,
    };
  }, [gITHUBColor]);

  const divider3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: dividerBackgroundColor3,
    };
  }, [dividerBackgroundColor3]);

  const instagramStyle: CSSProperties = useMemo(() => {
    return {
      color: instagramColor,
    };
  }, [instagramColor]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.footerLeft}>
        <div className={styles.vangoghcom} style={vangoghcomStyle}>
          ☻@vangogh.com
        </div>
      </div>
      <div className={styles.footerRight}>
        <div className={styles.linkedinDivider}>
          <div className={styles.linkedin}>
            <div className={styles.linkedin1} style={linkedinStyle}>
              Linkedin
            </div>
            <img className={styles.iconsarrow} alt="" src={dimensionCode} />
          </div>
          <div className={styles.divider} style={dividerStyle} />
        </div>
        <div className={styles.dribbbleDivider}>
          <div className={styles.dribbble}>
            <div className={styles.dribbble1} style={dribbbleStyle}>
              Dribbble
            </div>
            <img
              className={styles.iconsarrow1}
              alt=""
              src={dimensionCodeText}
            />
          </div>
          <div className={styles.divider1} style={divider1Style} />
        </div>
        <div className={styles.myspaceDivider}>
          <div className={styles.myspace}>
            <div className={styles.myspace1} style={myspaceStyle}>
              myspace
            </div>
            <img
              className={styles.iconsarrow2}
              alt=""
              src={dimensionCodeImage}
            />
          </div>
          <div className={styles.divider2} style={divider2Style} />
        </div>
        <div className={styles.githubDivider}>
          <div className={styles.github}>
            <div className={styles.github1} style={gITHUBStyle}>
              GITHUB
            </div>
            <img
              className={styles.iconsarrow3}
              alt=""
              src={dimensionCodeImageUrl}
            />
          </div>
          <div className={styles.divider3} style={divider3Style} />
        </div>
        <div className={styles.instagramDivider}>
          <div className={styles.instagram}>
            <div className={styles.instagram1} style={instagramStyle}>
              Instagram
            </div>
            <img
              className={styles.iconsarrow4}
              alt=""
              src={dimensionCodeText2}
            />
          </div>
        </div>
        <img
          className={styles.upIcon}
          loading="eager"
          alt=""
          src={dimensionCodeImageText}
        />
      </div>
    </div>
  );
};

export default Footer;
