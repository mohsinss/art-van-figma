import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./extra-content1280-light.module.css";

const ExtraContent1280Light: NextPage = () => {
  const router = useRouter();

  const onIconsCloseContainerClick = useCallback(() => {
    router.push("/light");
  }, [router]);

  return (
    <div className={styles.extraContent1280Light}>
      <div className={styles.frameA}>
        <div className={styles.h1}>EXTENDED ABOUT SECTION COMING SOON</div>
      </div>
      <div className={styles.containerC}>
        <div className={styles.innerFrame}>
          <div className={styles.photo}>
            <div className={styles.imageHolder}>
              <img
                className={styles.imageHolderChild}
                alt=""
                src="/rectangle-2@2x.png"
              />
              <img
                className={styles.imageHolderItem}
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
            className={styles.vectorMarkerIcon}
            loading="eager"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ExtraContent1280Light;
