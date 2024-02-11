import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import PrevNextEllipse from "../components/prev-next-ellipse";
import Next from "../components/next";
import styles from "./next-previous-hover-example.module.css";

const NextPreviousHoverExample: NextPage = () => {
  const router = useRouter();

  const onNextContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.nextPreviousHoverExample}>
      <PrevNextEllipse
        iconsArrow="/iconsarrow-1.svg"
        paulGauguinsArmchair="Paul Gauguin's Armchair"
        propBackgroundColor="#000"
        propMargin="unset"
        propColor="#fff"
      />
      <Next
        maskGroup="/mask-group@2x.png"
        iconsArrow="/iconsarrow-2.svg"
        theNightCaf="The Night Café"
        onNextContainerClick={onNextContainerClick}
      />
    </div>
  );
};

export default NextPreviousHoverExample;
