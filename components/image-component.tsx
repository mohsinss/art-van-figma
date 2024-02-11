import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Image1Icon from "./image1-icon";
import Image2Icon from "./image2-icon";
import styles from "./image-component.module.css";

const ImageComponent: NextPage = () => {
  const router = useRouter();

  const onPortfolioItemContainerClick = useCallback(() => {
    router.push("/portfolio-layout2-light");
  }, [router]);

  const onPortfolioItemContainer2Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.imageComponent}>
      <div className={styles.numberArtworkFrame}>
        <div
          className={styles.portfolioItem}
          onClick={onPortfolioItemContainerClick}
        >
          <Image1Icon />
          <div className={styles.imageComponent1}>
            <div className={styles.number}>1</div>
            <div className={styles.artwork}>The Starry Night</div>
            <img
              className={styles.iconsarrow}
              loading="eager"
              alt=""
              src="/iconsarrow3.svg"
            />
          </div>
        </div>
        <div className={styles.portfolioItemFrame}>
          <div
            className={styles.portfolioItem1}
            onClick={onPortfolioItemContainer2Click}
          >
            <Image2Icon />
            <div className={styles.arrowInstance}>
              <div className={styles.number1}>2</div>
              <div className={styles.artwork1}>The Night Café</div>
              <img
                className={styles.iconsarrow1}
                alt=""
                src="/iconsarrow3.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
