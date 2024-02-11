import type { NextPage } from "next";
import Next from "../components/next";
import MaskGroupEllipse from "../components/mask-group-ellipse";

const NextPreviousHoverExample3: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-between p-[272px] box-border gap-[20px] tracking-[normal] mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:flex-wrap mq725:pl-[136px] mq725:pr-[136px] mq725:box-border">
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
