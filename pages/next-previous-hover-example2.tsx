import type { NextPage } from "next";
import PrevNextEllipse from "../components/prev-next-ellipse";
import Next from "../components/next";
import styles from "./next-previous-hover-example2.module.css";

const NextPreviousHoverExample2: NextPage = () => {
  return (
    <div className={styles.nextPreviousHoverExample}>
      <PrevNextEllipse
        iconsArrow="/iconsarrow-11.svg"
        paulGauguinsArmchair="Paul Gauguin's Armchair"
        propBackgroundColor="#fff"
        propMargin="unset"
        propColor="#000"
      />
      <Next
        maskGroup="/mask-group@2x.png"
        iconsArrow="/iconsarrow-21.svg"
        theNightCaf="The Night Café"
        propColor="#000"
      />
    </div>
  );
};

export default NextPreviousHoverExample2;
