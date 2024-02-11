import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent from "../components/frame-component";
import FooterLeft from "../components/footer-left";
import Footer from "../components/footer";
import styles from "./dark.module.css";

const Dark: NextPage = () => {
  const router = useRouter();

  const onIconsDarkLightClick = useCallback(() => {
    router.push("/light");
  }, [router]);

  const onIconsMenuClick = useCallback(() => {
    router.push("/extra-content1280-dark");
  }, [router]);

  const onHeaderContainerClick = useCallback(() => {
    router.push("/extra-content1280-dark");
  }, [router]);

  const onImage1Click = useCallback(() => {
    router.push("/portfolio-layout2-dark");
  }, [router]);

  const onImage2Click = useCallback(() => {
    router.push("/portfolio-layout1-dark");
  }, [router]);

  return (
    <div className={styles.dark}>
      <header className={styles.logoParent}>
        <img
          className={styles.logoIcon}
          loading="eager"
          alt=""
          src="/logo.svg"
        />
        <div className={styles.fRAMEFRAME}>
          <div className={styles.headerRight}>
            <div className={styles.headerRight1}>
              <div className={styles.frameMenu}>
                <div className={styles.frameSet}>
                  <img
                    className={styles.iconsdarkLight}
                    loading="eager"
                    alt=""
                    src="/iconsdarklight1@2x.png"
                    onClick={onIconsDarkLightClick}
                  />
                </div>
              </div>
              <div className={styles.frameMenu1}>
                <div className={styles.iconsmenuWrapper}>
                  <img
                    className={styles.iconsmenu}
                    alt=""
                    src="/iconsmenu.svg"
                    onClick={onIconsMenuClick}
                  />
                </div>
              </div>
            </div>
            <div className={styles.header} onClick={onHeaderContainerClick}>
              <div className={styles.iconsclose}>
                <div className={styles.background32} />
                <input className={styles.vector} type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className={styles.numberFrame}>
        <h1 className={styles.h1}>
          <p className={styles.vincentVanGogh}>Vincent Van Gogh.</p>
          <p className={styles.postImpressionistPainterAnd}>
            post-impressionist painter and artist
          </p>
        </h1>
      </section>
      <section className={styles.numberArtwork}>
        <div className={styles.arrows}>
          <div className={styles.experienceFrame}>
            <div className={styles.number}>1</div>
            <div className={styles.artwork}>The Starry Night</div>
            <img
              className={styles.iconsarrow}
              loading="eager"
              alt=""
              src="/iconsarrow2.svg"
            />
            <img
              className={styles.image1Icon}
              alt=""
              src="/image1@2x.png"
              onClick={onImage1Click}
            />
          </div>
          <div className={styles.footerSplit}>
            <img
              className={styles.image2Icon}
              loading="eager"
              alt=""
              src="/image2@2x.png"
              onClick={onImage2Click}
            />
            <div className={styles.numberParent}>
              <div className={styles.number1}>2</div>
              <div className={styles.artwork1}>The Night Café</div>
              <img
                className={styles.iconsarrow1}
                alt=""
                src="/iconsarrow-12.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.numberArtworkInner}>
          <div className={styles.frameWithIconsDarkLightParent}>
            <div className={styles.frameWithIconsDarkLight}>
              <div className={styles.frameWithHeaderRight}>
                <img
                  className={styles.image3Icon}
                  loading="eager"
                  alt=""
                  src="/image3@2x.png"
                />
                <div className={styles.numberGroup}>
                  <div className={styles.number2}>3</div>
                  <div className={styles.artwork2}>The Red Vineyard</div>
                  <img
                    className={styles.iconsarrow2}
                    alt=""
                    src="/iconsarrow-12.svg"
                  />
                </div>
              </div>
              <div className={styles.image4Parent}>
                <img
                  className={styles.image4Icon}
                  loading="eager"
                  alt=""
                  src="/image4@2x.png"
                />
                <div className={styles.numberContainer}>
                  <div className={styles.number3}>4</div>
                  <div className={styles.artwork3}>
                    Ward in the Hospital in Arles
                  </div>
                  <img
                    className={styles.iconsarrow3}
                    alt=""
                    src="/iconsarrow-12.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.image5Parent}>
                <img
                  className={styles.image5Icon}
                  loading="eager"
                  alt=""
                  src="/image5@2x.png"
                />
                <div className={styles.frameDiv}>
                  <div className={styles.number4}>3</div>
                  <div className={styles.artwork4}>
                    Ploughman in the Fields near Arles
                  </div>
                  <img
                    className={styles.iconsarrow4}
                    alt=""
                    src="/iconsarrow-12.svg"
                  />
                </div>
              </div>
              <div className={styles.frameExperience}>
                <div className={styles.frameCompanyName}>
                  <img
                    className={styles.image6Icon}
                    loading="eager"
                    alt=""
                    src="/image6@2x.png"
                  />
                  <div className={styles.frameCompanyName1}>
                    <div className={styles.number5}>4</div>
                    <div className={styles.artwork5}>
                      Paul Gauguin's Armchair
                    </div>
                    <img
                      className={styles.iconsarrow5}
                      alt=""
                      src="/iconsarrow-52.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent propColor="#fff" propColor1="#fff" />
      <FooterLeft
        instagramDividerBackgroundImage="unset"
        companyColor="#fff"
        positionColor="#fff"
        yearColor="rgba(255, 255, 255, 0.4)"
        companyColor1="#fff"
        positionColor1="#fff"
        yearColor1="rgba(255, 255, 255, 0.4)"
        companyColor2="#fff"
        positionColor2="#fff"
        yearColor2="rgba(255, 255, 255, 0.4)"
        companyColor3="#fff"
        positionColor3="#fff"
        yearColor3="rgba(255, 255, 255, 0.4)"
        companyColor4="#fff"
        positionColor4="#fff"
        yearColor4="rgba(255, 255, 255, 0.4)"
      />
      <Footer
        dimensionCode="/iconsarrow-31@2x.png"
        dimensionCodeText="/iconsarrow-72@2x.png"
        dimensionCodeImage="/iconsarrow-51@2x.png"
        dimensionCodeImageUrl="/iconsarrow-61@2x.png"
        dimensionCodeText2="/iconsarrow-71@2x.png"
        dimensionCodeImageText="/up2.svg"
        footerWidth="1120px"
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

export default Dark;
