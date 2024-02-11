import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FRAME from "./f-r-a-m-e";
import FrameComponent2 from "./frame-component2";
import styles from "./passion-card.module.css";

const PassionCard: NextPage = () => {
  const router = useRouter();

  const onHeaderLeftContainerClick = useCallback(() => {
    router.push("/light");
  }, [router]);

  return (
    <div className={styles.lightFrame}>
      <FRAME
        iconsArrow="/iconsarrow.svg"
        onHeaderLeftContainerClick={onHeaderLeftContainerClick}
      />
      <FrameComponent2
        iconsDarkLight="/iconsdarklight@2x.png"
        iconsMenu="/iconsmenu.svg"
      />
    </div>
  );
};

export default PassionCard;
