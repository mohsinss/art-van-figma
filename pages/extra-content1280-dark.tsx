import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./extra-content1280-dark.module.css";

const ExtraContent1280Dark: NextPage = () => {
  const router = useRouter();

  const onIconsCloseContainerClick = useCallback(() => {
    router.push("/dark");
  }, [router]);

  return (
    <div className={styles.extraContent1280Dark}>
      <div className={styles.frameOne}>
        <div className={styles.h1}>EXTENDED ABOUT SECTION COMING SOON</div>
      </div>
      <div className={styles.frameThree}>
        <div className={styles.photoFrameOne}>
          <div className={styles.photo}>
            <div className={styles.innerFrames}>
              <img
                className={styles.rectangleOneIcon}
                alt=""
                src="/rectangle-2@2x.png"
              />
              <img
                className={styles.rectangleTwoIcon}
                loading="eager"
                alt=""
                src="/rectangle-3@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.iconsclose} onClick={onIconsCloseContainerClick}>
          <div className={styles.background32} />
          <img
            className={styles.vectorSymbolIcon}
            loading="eager"
            alt=""
            src="/vector1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ExtraContent1280Dark;
