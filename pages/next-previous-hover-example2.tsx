import type { NextPage } from "next";
import PrevNextEllipse from "../components/prev-next-ellipse";
import Next from "../components/next";

const NextPreviousHoverExample2: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-row items-start justify-between p-[272px] box-border gap-[20px] tracking-[normal] mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:flex-wrap mq725:pl-[136px] mq725:pr-[136px] mq725:box-border">
      <PrevNextEllipse
        iconsArrow="/iconsarrow-11.svg"
        paulGauguinsArmchair="Paul Gauguin's Armchair"
        propBackgroundColor="#fff"
        propMargin="unset"
        propColor="#000"
      />
      <Next
        maskGroup="/mask-group1@2x.png"
        iconsArrow="/iconsarrow-21.svg"
        theNightCaf="The Night Café"
        propColor="#000"
      />
    </div>
  );
};

export default NextPreviousHoverExample2;
