import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Top1 from "../components/top1";
import TheNightCafetext from "../components/the-night-cafetext";
import MainTextFrame from "../components/main-text-frame";
import PrevNextEllipse from "../components/prev-next-ellipse";
import Footer from "../components/footer";
import styles from "./portfolio-layout2-light.module.css";

const PortfolioLayout2Light: NextPage = () => {
  const router = useRouter();

  const onHeaderLeftContainerClick = useCallback(() => {
    router.push("/light");
  }, [router]);

  const onNextContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.portfolioLayout2Light}>
      <Top1
        iconsArrow="/iconsarrow.svg"
        iconsDarkLight="/iconsdarklight@2x.png"
        iconsMenu="/iconsmenu.svg"
        onHeaderLeftContainerClick={onHeaderLeftContainerClick}
      />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <TheNightCafetext />
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
      <MainTextFrame />
      <section className={styles.footerTextFrame}>
        <h1 className={styles.h1}>
          Although The Starry Night was painted during the day in Van Gogh's
          ground-floor studio, it would be inaccurate to state that the picture
          was painted from memory.
        </h1>
        <h1
          className={styles.paragraph}
        >{`The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. `}</h1>
      </section>
      <section className={styles.dividerFrame}>
        <img
          className={styles.galleryImage5}
          loading="eager"
          alt=""
          src="/gallery-image-5@2x.png"
        />
      </section>
      <div className={styles.ellipseShape}>
        <PrevNextEllipse
          iconsArrow="/iconsarrow-1.svg"
          paulGauguinsArmchair="Paul Gauguin's Armchair"
        />
        <PrevNextEllipse
          iconsArrow="/iconsarrow-2.svg"
          paulGauguinsArmchair="The Night Café"
          propBackgroundColor="#000"
          propMargin="0"
          propColor="#fff"
          onNextContainerClick={onNextContainerClick}
        />
      </div>
      <Footer
        dimensionCode="/iconsarrow-3@2x.png"
        dimensionCodeText="/iconsarrow-4@2x.png"
        dimensionCodeImage="/iconsarrow-5@2x.png"
        dimensionCodeImageUrl="/iconsarrow-6@2x.png"
        dimensionCodeText2="/iconsarrow-7@2x.png"
        dimensionCodeImageText="/up4.svg"
        footerWidth="1160px"
        footerFlex="unset"
        vangoghcomColor="#000"
        linkedinColor="#000"
        dividerBackgroundColor="rgba(0, 0, 0, 0.16)"
        dribbbleColor="#000"
        dividerBackgroundColor1="rgba(0, 0, 0, 0.16)"
        myspaceColor="#000"
        dividerBackgroundColor2="rgba(0, 0, 0, 0.16)"
        gITHUBColor="#000"
        dividerBackgroundColor3="rgba(0, 0, 0, 0.16)"
        instagramColor="#000"
      />
    </div>
  );
};

export default PortfolioLayout2Light;
