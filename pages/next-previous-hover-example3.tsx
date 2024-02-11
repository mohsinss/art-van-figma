import type { NextPage } from "next";
import Next from "../components/next";
import MaskGroupEllipse from "../components/mask-group-ellipse";
import styles from "./next-previous-hover-example3.module.css";

const NextPreviousHoverExample3: NextPage = () => {
  return (
    <div className={styles.nextPreviousHoverExample}>
      <Next
        maskGroup="/mask-group@2x.png"
        iconsArrow="/iconsarrow-1.svg"
        theNightCaf="The STARRY NIGHT"
        propColor="#fff"
      />
      <MaskGroupEllipse
        iconsArrow="/iconsarrow-2.svg"
        propBackgroundColor="#000"
        propColor="#fff"
      />
    </div>
  );
};

export default NextPreviousHoverExample3;
