import type { NextPage } from "next";
import Next from "../components/next";
import MaskGroupEllipse from "../components/mask-group-ellipse";
import styles from "./next-previous-hover-example1.module.css";

const NextPreviousHoverExample1: NextPage = () => {
  return (
    <div className={styles.nextPreviousHoverExample}>
      <Next
        maskGroup="/mask-group@2x.png"
        iconsArrow="/iconsarrow-11.svg"
        theNightCaf="The STARRY NIGHT"
        propColor="#000"
      />
      <MaskGroupEllipse iconsArrow="/iconsarrow-21.svg" />
    </div>
  );
};

export default NextPreviousHoverExample1;
