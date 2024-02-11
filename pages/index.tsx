import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import PassionCard from "../components/passion-card";
import Frametitleleft from "../components/frametitleleft";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";
import styles from "./index.module.css";

const PortfolioLayout1Light: NextPage = () => {
  const router = useRouter();

  const onPreviousContainerClick = useCallback(() => {
    router.push("/portfolio-layout2-light");
  }, [router]);

  return (
    <div className={styles.portfolioLayout1Light}>
      <PassionCard />
      <main className={styles.dataFieldWrapper}>
        <section className={styles.dataField}>
          <div className={styles.field}>
            <div className={styles.field1}>
              <div className={styles.information}>
                <div className={styles.data}>
                  <div className={styles.field2}>year</div>
                  <div className={styles.field3}>1888</div>
                </div>
                <div className={styles.data1}>
                  <div className={styles.field4}>MEDIUM</div>
                  <div className={styles.field5}>Oil on canvas</div>
                </div>
                <div className={styles.data2}>
                  <div className={styles.field6}>LOCATION</div>
                  <div className={styles.field7}>AYale University Gallery</div>
                </div>
                <div className={styles.data3}>
                  <div className={styles.field8}>SIZE</div>
                  <div className={styles.field9}>28.5 in × 36.3 in</div>
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
          <Frametitleleft />
          <div className={styles.image4Wrapper}>
            <img
              className={styles.image4Icon}
              loading="eager"
              alt=""
              src="/image-4@2x.png"
            />
          </div>
          <FrameComponent1 />
          <FrameComponent
            iconsArrow="/iconsarrow-1.svg"
            iconsArrow1="/iconsarrow-2.svg"
            onPreviousContainerClick={onPreviousContainerClick}
          />
        </section>
      </main>
      <div className={styles.footerframe}>
        <Footer
          dimensionCode="/iconsarrow-3@2x.png"
          dimensionCodeText="/iconsarrow-4@2x.png"
          dimensionCodeImage="/iconsarrow-5@2x.png"
          dimensionCodeImageUrl="/iconsarrow-6@2x.png"
          dimensionCodeText2="/iconsarrow-7@2x.png"
          dimensionCodeImageText="/up.svg"
          footerWidth="unset"
          footerFlex="1"
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
    </div>
  );
};

export default PortfolioLayout1Light;
