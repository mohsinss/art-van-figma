import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Top1 from "../components/top1";
import TheNightCafetext from "../components/the-night-cafetext";
import MainTextFrame from "../components/main-text-frame";
import Footer from "../components/footer";
import styles from "./portfolio-layout2-dark.module.css";

const PortfolioLayout2Dark: NextPage = () => {
  const router = useRouter();

  const onHeaderLeftContainerClick = useCallback(() => {
    router.push("/dark");
  }, [router]);

  const onNextContainerClick = useCallback(() => {
    router.push("/portfolio-layout1-dark");
  }, [router]);

  return (
    <div className={styles.portfolioLayout2Dark}>
      <Top1
        iconsArrow="/iconsarrow1.svg"
        iconsDarkLight="/iconsdarklight1@2x.png"
        iconsMenu="/iconsmenu1.svg"
        frameDarkLightIconsMenuColor="#fff"
        h1Color="#fff"
        onHeaderLeftContainerClick={onHeaderLeftContainerClick}
      />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <TheNightCafetext
        propColor="rgba(255, 255, 255, 0.4)"
        propColor1="#fff"
        propColor2="rgba(255, 255, 255, 0.4)"
        propColor3="#fff"
        propColor4="rgba(255, 255, 255, 0.4)"
        propColor5="#fff"
        propColor6="rgba(255, 255, 255, 0.4)"
        propColor7="#fff"
        propColor8="#fff"
      />
      <section className={styles.imageFrame}>
        <img
          className={styles.image2Icon}
          loading="eager"
          alt=""
          src="/image-21@2x.png"
        />
        <img
          className={styles.image3Icon}
          loading="eager"
          alt=""
          src="/image-31@2x.png"
        />
      </section>
      <MainTextFrame propColor="#000" />
      <section className={styles.galleryFrame}>
        <h1 className={styles.h1}>
          Although The Starry Night was painted during the day in Van Gogh's
          ground-floor studio, it would be inaccurate to state that the picture
          was painted from memory.
        </h1>
        <h1
          className={styles.paragraph}
        >{`The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. `}</h1>
      </section>
      <section className={styles.galleryImage5Wrapper}>
        <img
          className={styles.galleryImage5}
          loading="eager"
          alt=""
          src="/gallery-image-5@2x.png"
        />
      </section>
      <div className={styles.nextArrowEllipseParent}>
        <div className={styles.nextArrowEllipse}>
          <div className={styles.nextArrowEllipseChild} />
          <img
            className={styles.iconsarrow}
            loading="eager"
            alt=""
            src="/iconsarrow-11.svg"
          />
          <h2 className={styles.paulGauguinsArmchair}>
            Paul Gauguin's Armchair
          </h2>
        </div>
        <div className={styles.next} onClick={onNextContainerClick}>
          <div className={styles.nextChild} />
          <h2 className={styles.theNightCaf}>The Night Café</h2>
          <img
            className={styles.iconsarrow1}
            loading="eager"
            alt=""
            src="/iconsarrow-21.svg"
          />
        </div>
      </div>
      <Footer
        dimensionCode="/iconsarrow-31@2x.png"
        dimensionCodeText="/iconsarrow-41@2x.png"
        dimensionCodeImage="/iconsarrow-51@2x.png"
        dimensionCodeImageUrl="/iconsarrow-61@2x.png"
        dimensionCodeText2="/iconsarrow-71@2x.png"
        dimensionCodeImageText="/up1.svg"
        footerWidth="1160px"
        footerFlex="unset"
        vangoghcomColor="#fff"
        linkedinColor="#fff"
        dividerBackgroundColor="rgba(255, 255, 255, 0.16)"
        dribbbleColor="#fff"
        dividerBackgroundColor1="rgba(255, 255, 255, 0.16)"
        myspaceColor="#fff"
        dividerBackgroundColor2="rgba(255, 255, 255, 0.16)"
        gITHUBColor="#fff"
        dividerBackgroundColor3="rgba(255, 255, 255, 0.16)"
        instagramColor="#fff"
      />
    </div>
  );
};

export default PortfolioLayout2Dark;
