import type { NextPage } from "next";
import LogoIcon from "../components/logo-icon";
import ImageComponent from "../components/image-component";
import Image3Icon from "../components/image3-icon";
import Image4Icon from "../components/image4-icon";
import FooterItemFrame from "../components/footer-item-frame";
import FrameComponent from "../components/frame-component";
import FooterLeft from "../components/footer-left";
import Footer from "../components/footer";
import styles from "./light.module.css";

const Light: NextPage = () => {
  return (
    <div className={styles.light}>
      <header className={styles.frameLight}>
        <LogoIcon />
        <div className={styles.headerRight}>
          <div className={styles.logoComponent}>
            <div className={styles.headerRightFrame}>
              <img
                className={styles.iconsdarkLight}
                loading="eager"
                alt=""
                src="/iconsdarklight@2x.png"
              />
            </div>
          </div>
          <div className={styles.logoComponent1}>
            <div className={styles.iconsmenuWrapper}>
              <img
                className={styles.iconsmenu}
                loading="eager"
                alt=""
                src="/iconsmenu2.svg"
              />
            </div>
          </div>
        </div>
      </header>
      <section className={styles.h1Wrapper}>
        <h1 className={styles.h1}>
          <p className={styles.vincentVanGogh}>Vincent Van Gogh.</p>
          <p className={styles.postImpressionistPainterAnd}>
            post-impressionist painter and artist
          </p>
        </h1>
      </section>
      <section className={styles.portfolioItemFrame}>
        <ImageComponent />
        <div className={styles.imageContainer}>
          <div className={styles.numberArtworkContainer}>
            <Image3Icon />
            <div className={styles.imageContainer1}>
              <div className={styles.number}>3</div>
              <div className={styles.artwork}>The Red Vineyard</div>
              <img
                className={styles.iconsarrow}
                alt=""
                src="/iconsarrow3.svg"
              />
            </div>
          </div>
          <div className={styles.imageContainer2}>
            <Image4Icon />
            <div className={styles.portfolioItemFrame1}>
              <div className={styles.number1}>4</div>
              <div className={styles.artwork1}>
                Ward in the Hospital in Arles
              </div>
              <img
                className={styles.iconsarrow1}
                alt=""
                src="/iconsarrow3.svg"
              />
            </div>
          </div>
        </div>
        <FooterItemFrame />
      </section>
      <FrameComponent />
      <FooterLeft />
      <Footer
        dimensionCode="/iconsarrow-3@2x.png"
        dimensionCodeText="/iconsarrow-73@2x.png"
        dimensionCodeImage="/iconsarrow-5@2x.png"
        dimensionCodeImageUrl="/iconsarrow-6@2x.png"
        dimensionCodeText2="/iconsarrow-7@2x.png"
        dimensionCodeImageText="/up5.svg"
      />
    </div>
  );
};

export default Light;
