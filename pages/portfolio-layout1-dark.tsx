import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FRAME from "../components/f-r-a-m-e";
import FrameComponent2 from "../components/frame-component2";
import Frametitleleft from "../components/frametitleleft";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";
import styles from "./portfolio-layout1-dark.module.css";

const PortfolioLayout1Dark: NextPage = () => {
  const router = useRouter();

  const onHeaderLeftContainerClick = useCallback(() => {
    router.push("/dark");
  }, [router]);

  const onPreviousContainerClick = useCallback(() => {
    router.push("/portfolio-layout2-dark");
  }, [router]);

  return (
    <div className={styles.portfolioLayout1Dark}>
      <header className={styles.frameParent}>
        <FRAME
          iconsArrow="/iconsarrow1.svg"
          propColor="#fff"
          propColor1="#fff"
          onHeaderLeftContainerClick={onHeaderLeftContainerClick}
        />
        <FrameComponent2
          iconsDarkLight="/iconsdarklight1@2x.png"
          iconsMenu="/iconsmenu1.svg"
          propColor="#fff"
        />
      </header>
      <main className={styles.textWrapper}>
        <section className={styles.text}>
          <div className={styles.dataFieldField}>
            <div className={styles.text1}>
              <div className={styles.information}>
                <div className={styles.data}>
                  <div className={styles.field}>year</div>
                  <div className={styles.field1}>1888</div>
                </div>
                <div className={styles.data1}>
                  <div className={styles.field2}>MEDIUM</div>
                  <div className={styles.field3}>Oil on canvas</div>
                </div>
                <div className={styles.data2}>
                  <div className={styles.field4}>LOCATION</div>
                  <div className={styles.field5}>AYale University Gallery</div>
                </div>
                <div className={styles.data3}>
                  <div className={styles.field6}>SIZE</div>
                  <div className={styles.field7}>28.5 in × 36.3 in</div>
                </div>
              </div>
              <div className={styles.theNightCaf}>
                The Night Café (French: Le Café de nuit) is an oil painting
                created by Dutch artist Vincent van Gogh in September 1888 in
                Arles. Its title is inscribed lower right beneath the signature.
                The painting is owned by Yale University and is currently held
                at the Yale University Art Gallery in New Haven, Connecticut.
              </div>
            </div>
          </div>
          <Frametitleleft propColor="#fff" />
          <div className={styles.image4Wrapper}>
            <img
              className={styles.image4Icon}
              loading="eager"
              alt=""
              src="/image-4@2x.png"
            />
          </div>
          <FrameComponent1 propColor="#fff" />
          <FrameComponent
            iconsArrow="/iconsarrow-11.svg"
            iconsArrow1="/iconsarrow-21.svg"
            propBackgroundColor="#fff"
            propColor="#000"
            propBackgroundColor1="#fff"
            propColor1="#000"
            onPreviousContainerClick={onPreviousContainerClick}
          />
        </section>
      </main>
      <div className={styles.footerFrame}>
        <Footer
          dimensionCode="/iconsarrow-31@2x.png"
          dimensionCodeText="/iconsarrow-41@2x.png"
          dimensionCodeImage="/iconsarrow-51@2x.png"
          dimensionCodeImageUrl="/iconsarrow-61@2x.png"
          dimensionCodeText2="/iconsarrow-71@2x.png"
          dimensionCodeImageText="/up3.svg"
          footerWidth="unset"
          footerFlex="1"
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
    </div>
  );
};

export default PortfolioLayout1Dark;
